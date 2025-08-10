import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Signup from "@/app/lib/models/signup.models";
import { connectDB } from "@/app/lib/config/db";
import { sendMail } from "@/app/lib/utilities/sendemail";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    // Find user by email
    const user = await Signup.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      "secret-key", // same as signup
      { expiresIn: "1d" }
    );

    // Send sign-in notification email
    await sendMail({
      to: user.email,
      subject: "Login Notification - AJOCREMAY Medicare",
      html: `<p>Hello ${user.name},</p><p>You have successfully signed in on ${new Date().toLocaleString()}.</p>`,
    });

    // Send admin notification
    await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: "User Signed In",
      html: `<p>User <b>${user.name}</b> (${user.email}) signed in at ${new Date().toLocaleString()}.</p>`,
    });

    return NextResponse.json({
      message: "Sign-in successful",
      token,
    }, { status: 200 });

  } catch (error) {
    console.error("❌ Error signing in:", error);
    return NextResponse.json({ message: "Error signing in", error }, { status: 500 });
  }
}

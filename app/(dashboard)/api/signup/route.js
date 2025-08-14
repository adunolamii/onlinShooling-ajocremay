

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
 import Signup from "@/app/lib/models/signup.models"
 import { connectDB } from "@/app/lib/config/db";
import { sendMail } from "@/app/lib/utilities/sendemail";
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return Response.json({ message: "All fields are required" }, { status: 400 });
    }

    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return Response.json({ message: "User already exists" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Signup.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT Token
    const token = jwt.sign({ userId: newUser._id }, "secret-key", { expiresIn: "1d" });

    // Send email to user
    await sendMail({
      to: newUser.email,
      subject: "Welcome to AJOCREMAY Medicare",
      html: `<p>Hello ${name},</p><p>Welcome to AJOCREMAY MEDICARE CONSORTIUM. We are thrilled to have you on board. Our team  is dedicated to providing you with exceptional healthcare, education, mentorship, networking, schorlarship, job placement,career opportunity services and support. THANK YOU FOR SIGNING UP ON OUR PORTAL. We are excited to have you as part of our community, and we look forward to helping you achieve your goals. If you have any questions or need assistance, please do not hesitate to reach out to us. We are here to help.  Best Regards, AJOCREMAY MEDICARE CONSORTIUM Team.    Hon. Faith O. O. [Registrar]           Hon. Fathia B. A. [Clerk]  </p>`,
    });

    // Send email to admin
    await sendMail({
      to: process.env.ADMIN_EMAIL,
      subject: "New User Signup Notification",
      html: `<p>A new user has signed up:</p><ul><li>Name: ${name}</li><li>Email: ${email}</li></ul>`,
    });

    return Response.json({
      message: "User registered successfully",
      token,
    }, { status: 201 });

  } catch (error) {
    console.error("❌ Error registering user:", error);
    return Response.json({ message: "Error registering user", error }, { status: 500 });
  }
}

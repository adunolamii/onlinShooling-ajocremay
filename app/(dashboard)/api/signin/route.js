import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import SignupModel from "@/models/signupModel";
import { connectDB } from "@/lib/config/db";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    // Check if user exists
    const user = await SignupModel.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    return NextResponse.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: "Signin error", error }, { status: 500 });
  }
}

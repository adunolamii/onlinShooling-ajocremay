import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Signup from "@/app/lib/models/signup.models"
import { connectDB } from "@/app/lib/config/db";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, password } = await req.json();

    // Password validation regex
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!passwordRegex.test(password)) {
      return NextResponse.json(
        {
          message:
            "Password must be at least 8 characters long, contain an uppercase letter, lowercase letter, number, and special character.",
        },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Signup.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { message: "Error registering user", error: error.message },
      { status: 500 }
    );
  }
}


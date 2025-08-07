// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
//  import Signup from "@/app/lib/models/signup.models"
//  import { connectDB } from "@/app/lib/config/db";

// export async function POST(req) {
//   await connectDB();

//   try {
//     const { name, email, password } = await req.json();

//     // Check if user exists
//     const existingUser = await Signup.findOne({ email });
//     if (existingUser) {
//       return NextResponse.json(
//         { message: "Email already exists" },
//         { status: 400 }
//       );
//     }

//     // Validate password strength
//     const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
//     if (!strongPassword.test(password)) {
//       return NextResponse.json(
//         { message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character." },
//         { status: 400 }
//       );
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = await Signup.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     // Generate JWT token
//     const token = jwt.sign(
//       { id: newUser._id, email: newUser.email },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     return NextResponse.json(
//       { message: "User registered successfully", token },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error registering user:", error);
//     return NextResponse.json(
//       { message: "Error registering user", error },
//       { status: 500 }
//     );
//   }
// }

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
      html: `<p>Hello ${name},</p><p>Welcome to AJOCREMAY Medicare. We're glad to have you!</p>`,
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

// import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import SignupModel from "@/models/signupModel";
// import { connectDB } from "@/lib/config/db";

// export async function POST(req) {
//   try {
//     await connectDB();

//     const { email, password } = await req.json();

//     // Check if user exists
//     const user = await SignupModel.findOne({ email });
//     if (!user) {
//       return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
//     }

//     // Compare password
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
//     }

//     // Generate token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

//     return NextResponse.json({
//       message: "Login successful",
//       token,
//       user: {
//         id: user._id,
//         fullname: user.fullname,
//         email: user.email,
//       },
//     }, { status: 200 });

//   } catch (error) {
//     return NextResponse.json({ message: "Signin error", error }, { status: 500 });
//   }
// }
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
 import Signup from "@/app/lib/models/signup.models"
 import { connectDB } from "@/app/lib/config/db";

export async function POST(req) {
  await connectDB();

  try {
    const { email, password } = await req.json();

    // Check if user exists
    const user = await Signup.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return NextResponse.json(
      { message: "Login successful", token },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error signing in:", error);
    return NextResponse.json(
      { message: "Error signing in", error },
      { status: 500 }
    );
  }
}

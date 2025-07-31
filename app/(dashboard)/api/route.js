// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";

// import { connectDB } from "@/app/lib/config/db";

// const loadDB = async()=>{
//     await connectDB();
//   }
//   loadDB();
// app/api/test/route.js (Next.js 13/14)
import { connectDB } from "@/app/lib/config/db"; // adjust path to match your file

export async function GET() {
  await connectDB();
  return new Response("DB connected!", { status: 200 });
}

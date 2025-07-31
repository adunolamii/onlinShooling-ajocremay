// import mongoose from "mongoose";
// import dotenv from "dotenv"

//  export const connectDB = async ()=>{

//     await mongoose.connect(process.env.MONGODB_URL)
//     console.log("connectedDB for ajocremay app");
    
// }
// lib/db.js (or similar)
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


export const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ Connected to MongoDB for ajocremay app");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};



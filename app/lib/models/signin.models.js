import mongoose from "mongoose";

const signinSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Signin = mongoose.models.Signin || mongoose.model("Signin", signinSchema);

export default Signin;

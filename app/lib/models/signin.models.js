// models/signupModel.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: String,
  email: { type: String, unique: true },
  password: String,
});

const SignupModel = mongoose.models.SignupModel || mongoose.model("SignupModel", userSchema);
export default SignupModel;

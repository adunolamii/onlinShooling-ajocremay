import mongoose from "mongoose";

const RecordSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, trim: true }
  },
  { timestamps: true }
);

export default mongoose.models.Record || mongoose.model("Record", RecordSchema);

import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  author: String
}, { timestamps: true });

export default mongoose.model("Quote", quoteSchema);

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const TodoSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    unique: false,
  },
  text: {
    type: String,
    required: true,
    unique: false,
  },
  status: {
    type: String,
    enum: ["completed", "pending"],
    default: "pending",
  },
  importance: {
    type: String,
    enum: {
      values: ["urgent", "normal"],
      message: "Importance can be either urgent or normal",
    },
    default: "normal",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("todo", TodoSchema);

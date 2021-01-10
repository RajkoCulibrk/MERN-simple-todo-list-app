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
  completed: {
    type: Boolean,
    default: false,
  },
  important: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("todo", TodoSchema);

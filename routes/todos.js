import express from "express";
const router = express.Router();
import User from "../models/User.js";
import validator from "express-validator";
const { check, validationResult } = validator;
import auth from "../middleware/auth.js";
import Todo from "../models/Todo.js";

router.get("/", auth, async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id }).sort({ date: -1 });
    res.json(todos);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

router.post(
  "/",
  [
    auth,
    [check("text", "Please enter something for this todo").not().isEmpty()],
  ],
  auth,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { text, importance } = req.body;

    try {
      const todoFields = {
        text: text,
        user: req.user.id,
      };
      if (importance) {
        todoFields.importance = importance;
      }
      const newTdodo = new Todo({
        ...todoFields,
      });
      let error = newTdodo.validateSync();
      if (error && error.errors.importance) {
        return res.status(500).send(error.errors.importance.message);
      }

      const todo = await newTdodo.save();
      res.send(todo);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }
  }
);

router.put("/:id", auth, async (req, res) => {
  const { text, status, importance } = req.body;

  const todoFields = {};
  if (text) todoFields.text = text;
  if (status) todoFields.status = status;
  if (importance) todoFields.importance = importance;

  try {
    let todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { $set: todoFields },
      { new: true, runValidators: true }
    );
    res.json(todo);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});
router.delete("/:id", auth, async (req, res) => {
  try {
    let todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    await Todo.findByIdAndRemove(req.params.id);
    res.json({ msg: "Todo removed" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

export default router;

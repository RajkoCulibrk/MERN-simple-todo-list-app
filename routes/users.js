import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  res.send("Register a user");
});

export default router;

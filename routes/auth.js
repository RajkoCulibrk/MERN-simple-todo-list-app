import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get logged a user");
});

router.post("/", (req, res) => {
  res.send("log in a user");
});

export default router;

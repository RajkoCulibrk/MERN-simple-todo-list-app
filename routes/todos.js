import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get all todos");
});
router.post("/", (req, res) => {
  res.send("add new todos");
});
router.put("/:id", (req, res) => {
  res.send("update  todos");
});
router.delete("/:id", (req, res) => {
  res.send("delet  todos");
});

export default router;

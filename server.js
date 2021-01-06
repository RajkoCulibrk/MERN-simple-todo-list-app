import express from "express";
const app = express();
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import todoRoutes from "./routes/todos.js";

const PORT = process.env.PORT || 5000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

import express from "express";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import todoRoutes from "./routes/todos.js";
import db from "./config/db.js";

const app = express();

db();

const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: false }));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

import express from "express";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import todoRoutes from "./routes/todos.js";
import db from "./config/db.js";
import path from "path";

const app = express();

db();

const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: false }));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT);

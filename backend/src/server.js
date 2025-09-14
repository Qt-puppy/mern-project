import express from "express";
import notesRoute from "./routes/notesRoute.js";
import connectDB from "../config/db.js";
import dotenv from "dotenv";
import rateLimiter from "../middleware/rateLimiter.js";
import cors from "cors";
dotenv.config();

// console.log(process.env.MONGO_URI);
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoute);
connectDB().then(() => {
  app.listen(5001, () => {
    console.log("The server started at LOCALHOST : 5001");
  });
});

import express from "express";
import notesRoute from "./routes/notesRoute.js";
import connectDB from "../config/db.js";
import dotenv from "dotenv";
import rateLimiter from "../middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-frontend.vercel.app", // replace with your Vercel URL
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

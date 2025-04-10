import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import cors from "cors";
import { errorHandler } from "./middleware/error.middleware";

const app = express();
dotenv.config();

if (!process.env.CLIENT_URL) {
  throw new Error("CLIENT_URL is not defined in the .env file");
}

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(errorHandler)
export default app;
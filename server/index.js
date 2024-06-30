import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// routes
import { authRoutes, userRoutes } from "./routes/index.js";

dotenv.config();

const app = express();

app.use(bodyParser.json());

// ------- Routes and controllers ------
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

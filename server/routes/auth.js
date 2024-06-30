import express from "express";
import { loginUser, registerUser, loginUserGet } from "../controllers/auth.js";

const router = express.Router();

// POST login
router.post("/login", loginUser);
router.get("/login", loginUserGet);

// POST register
router.post("/register", registerUser);

export default router;

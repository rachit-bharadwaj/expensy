import express from "express";
import {
  deleteUserController,
  getUserController,
  updateUserController,
} from "../controllers/user.js";

const router = express.Router();

// GET user by ID
router.post("/", getUserController);

// PUT update user
router.put("/", updateUserController);

// DELETE user
router.delete("/", deleteUserController);

export default router;

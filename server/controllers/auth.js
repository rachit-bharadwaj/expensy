import {
  checkUserExists,
  createUser,
  getUser,
} from "../database/services/users/index.js";
import { createToken } from "../utils/jwt.js";

/**
 * Controller function to handle user login.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const loginUser = async (req, res) => {
  const { phoneNo } = req.body;

  try {
    // Check if the user exists
    const userExists = await checkUserExists(phoneNo);

    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = await getUser(phoneNo);
    // Create a JWT token for the logged-in user
    const token = createToken({ phoneNo });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Controller function to handle user registration.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const registerUser = async (req, res) => {
  const userData = req.body;

  try {
    // Create a new user
    const newUser = await createUser(userData);

    res
      .status(200)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { loginUser, registerUser };

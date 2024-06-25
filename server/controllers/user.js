import {
  updateUser,
  getUser,
  deleteUser,
} from "../database/services/users/index.js";

/**
 * Controller function to handle user update.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const updateUserController = async (req, res) => {
  const { phoneNo, ...updatedData } = req.body;

  try {
    // Update user data
    const updatedUser = await updateUser(phoneNo, updatedData);

    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Controller function to handle retrieving user data.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const getUserController = async (req, res) => {
  const { phoneNo } = req.body; // Extract phone number from request body

  try {
    // Get user data
    const user = await getUser(phoneNo);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User retrieved successfully", user });
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Controller function to handle deleting user data.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const deleteUserController = async (req, res) => {
  const { phoneNo } = req.body; // Extract phone number from request body

  try {
    // Delete user data
    await deleteUser(phoneNo);

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { updateUserController, getUserController, deleteUserController };

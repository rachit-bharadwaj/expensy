import connectDB from "../database/connection/mongoose.js";
import User from "../database/models/User.schema.js";

/**
 * Controller function to handle user update.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const updateUserController = async (req, res) => {
  await connectDB();
  const { email, ...updateData } = req.body;

  try {
    // Find the user by email and update their data
    const updatedUser = await User.findOneAndUpdate({ email }, updateData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

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
  await connectDB();
  const { email } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Controller function to handle deleting user data.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const deleteUserController = async (req, res) => {
  await connectDB();
  const { email } = req.body;

  try {
    // Find the user by email and delete them
    const deletedUser = await User.findOneAndDelete({ email });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { updateUserController, getUserController, deleteUserController };

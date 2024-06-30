import connectDB from "../database/connection/mongoose.js";
import User from "../database/models/User.schema.js";
import bcrypt from "bcrypt";

/**
 * Controller function to handle user login.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */

const loginUser = async (req, res) => {
  await connectDB();
  const { userId, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({
      $or: [{ email: userId }, { phone: userId }, { username: userId }],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 7500 registration
    // 47500 total

    //  ML, data science, analyst, bussiness analyst

    // 3 months training
    // then placement (may be)

    // Verify password
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ message: "Wrong Password!" });
    }

    // Create a JWT token for the logged-in user
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({ message: "Login successful!", token, user });
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
  await connectDB();
  const { name, email, username, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res
        .status(400)
        .json({ message: "User with that email already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      username,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error registering user: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { loginUser, registerUser };

import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/* create-post new user */
export const registerUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(11);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPass;
    const newUser = new UserModel(req.body);
    const { username } = req.body;

    const oldUser = await UserModel.findOne({ username });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const user = await newUser.save();

    const token = jwt.sign(
      { username: user.username, id: user._id },
      process.env.JWT_KEY,
      { expiresIn: "24h" }
    );

    res.status(200).json({ user, token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "❌ user could NOT be created:", error: error.message });
  }
};

/* create-post login user */
export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username: username });
  try {
    if (user) {
      const validity = await bcrypt.compare(password, user.password);

      if (!validity) {
        res.status(404).json("❌ wrong password.");
      } else {
        const token = jwt.sign(
          { username: user.username, id: user._id },
          process.env.JWT_KEY,
          { expiresIn: "24h" }
        );
        res.status(200).json({ user, token });
      }
    } else {
      res.status(404).json({ message: "❌ user not found." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "❌ user could NOT login:", error: error.message });
  }
};

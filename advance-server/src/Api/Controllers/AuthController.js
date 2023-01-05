import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

/* create-post new user */
export const registerUser = async (req, res) => {
  try {
    const { username, password, firstname, lastname } = req.body;

    if (!username) {
      throw new Error("user name needed");
    }
    if (!password) {
      throw new Error("Password needed");
    }
    if (!firstname) {
      throw new Error("first name needed");
    }
    if (!lastname) {
      throw new Error("last name needed");
    }

    const salt = await bcrypt.genSalt(11); //Password Encription
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      username,
      password: hashedPass,
      firstname,
      lastname,
    });
    await newUser.save();

    return res.status(201).json({ message: "✅ user created.", info: newUser });
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

      validity
        ? res.status(200).json({ message: "✅ user loged in.", info: user })
        : res.status(400).json({ message: "❌ wrong credentials." });
    } else {
      res.status(404).json({ message: "❌ user not found." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "❌ user could NOT login:", error: error.message });
  }
};

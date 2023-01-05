/*
res.status(200).json({ message: "✅ yeeeeessss.", info:user })
res.status(400).json({ message: "❌ nooooooo.", error: error.message })
 */
import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

/* get single user */
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      res.status(404).json({ message: "❌ user not found." });
    } else {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json({ message: "✅ user found.", info: otherDetails });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "❌ user not found:", error: error.message });
  }
};

/* update user */
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, _id, currentUserAdminStatus, password } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(11);
        req.body.password = await bcrypt.hash(password, salt);
      }

      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(200).json({ message: "✅ user updated.", info: user });
    } catch (error) {
      res
        .status(400)
        .json({ message: "❌ user not updated:", error: error.message });
    }
  } else {
    res.status(403).json({ message: "❌ Acces denied."})
  }
};

/* delete user */
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  const { currentUserId, currentUserAdmin } = req.body;

  if (currentUserId === id || currentUserAdmin) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json({ message: "✅ user deleted successfully."})
    } catch (error) {
      res.status(500).json({ message: "❌ user could not be deleted:", error: error.message });
    }
  } else {
    res.status(403).json({ message: "❌ delete access denied."})
  }
};

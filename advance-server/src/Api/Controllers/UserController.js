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

/* Get all users */
export const getAllUsers = async (req, res) => {
  try {
    let users = await UserModel.find();
    users = users.map((user)=>{
      const {password, ...otherDetails} = user._doc
      return otherDetails
    })
    res.status(200).json({message: "✅ multiple users found",users:users});
  } catch (error) {
    res.status(500).json({message: "❌ multipe users not found:", error: error.message});
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

/* Follow a User */
export const followUser = async (req, res) => {
  const id = req.params.id;
  const { _id } = req.body;
  if (_id == id) {
    res.status(403).json({message:"❌ Action Forbidden"});
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(_id);

      if (!followUser.followers.includes(_id)) {
        await followUser.updateOne({ $push: { followers: _id } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json({messsage: "✅ User followed!",followUser:followUser,followingUser:followingUser});
      } else {
        res.status(403).json({messsage: "❌ you are already following this id"});
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "❌ follow user catch.", error: error.message })
    }
  }
};

/* Unfollow a User */
export const unfollowUser = async (req, res) => {
  const id = req.params.id;
  const { _id } = req.body;

  if(_id === id)
  {
    res.status(403).json("Action Forbidden")
  }
  else{
    try {
      const unFollowUser = await UserModel.findById(id)
      const unFollowingUser = await UserModel.findById(_id)


      if (unFollowUser.followers.includes(_id))
      {
        await unFollowUser.updateOne({$pull : {followers: _id}})
        await unFollowingUser.updateOne({$pull : {following: id}})
        res.status(200).json({message:"✅ Unfollowed Successfully!",followUser:followUser,followingUser:followingUser})
      }
      else{
        res.status(403).json({message:"❌ You are not following this User"})
      }
    } catch (error) {
      res.status(500).json({ message: "❌ could not unfollow catch:", error: error.message })
    }
  }
};

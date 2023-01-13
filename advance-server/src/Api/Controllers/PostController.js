import mongoose from "mongoose";
import PostModel from "../Models/postModel.js";
import UserModel from "../Models/userModel.js";

/* create post */
export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res
      .status(500)
      .json({ message: "❌ could not create post:", error: error.message });
  }
};

/* get a single post */
export const getPost = async (req, res) => {
  try {
    const postForQueryId = req.params.id;
    const postQuery = await PostModel.findById(postForQueryId);
    res.status(200).json({ message: "✅ post found:", post: postQuery });
  } catch (error) {
    res
      .status(500)
      .json({ message: "❌ post could not be found", error: error.message });
  }
};

/* get multiple posts */
export const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json({ message: "✅ multiple posts found.", posts: posts });
  } catch (error) {
    res
      .status(500)
      .json({ message: "❌ multipe posts not found:", error: error.message });
  }
};

/* update post */
export const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { userId } = req.body;

    const post = await PostModel.findById(postId);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body }, { new: true });
      const updatedPost = await PostModel.findById(postId);
      res.status(200).json({ message: "✅ post updated:", post: updatedPost });
    } else {
      res.status(403).json({ message: "❌ Authentication failed" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "❌ post could not be updated:", error: error.message });
  }
};

/* delete post */
export const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const { userId } = req.body;

    const post = await PostModel.findById(id);
    if (post.userId === userId) {
      const deletedPost = await post.deleteOne();
      res
        .status(200)
        .json({ message: "✅Post deleted.", deletedPost: deletedPost });
    } else {
      res.status(403).json({ message: "❌Action forbidden" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "❌ post could not be deleted", error: error.message });
  }
};

/* like & dislike post */
export const likePost = async (req, res) => {
  try {
    const id = req.params.id;
    const { userId } = req.body;
    const post = await PostModel.findById(id);
    if (post.likes.includes(userId)) {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post disliked");
    } else {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post liked");
    }
  } catch (error) {
    res.status(500).json("likePost postController error:", error);
  }
};

/* timeline posts */
export const getTimelinePosts = async (req, res) => {
  const userId = req.params.id
  try {
    const currentUserPosts = await PostModel.find({ userId: userId });

    const followingPosts = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);

    res.status(200).json(
      currentUserPosts
        .concat(...followingPosts[0].followingPosts)
        .sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
    );
  } catch (error) {
    res.status(500).json("postController -> getTimelinePosts",error);
  }
};

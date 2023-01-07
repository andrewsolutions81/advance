import mongoose from "mongoose";
import PostModel from "../Models/postModel.js";

/* create post */
export const createPost = async (req, res)=> {
  const newPost = new PostModel(req.body);
  try {

    await newPost.save()
    res.status(201).json({message:"✅ post created!", post: newPost})
  } catch (error) {
    res.status(500).json({message:"❌ could not create post:" , error: error.message})
  }
};

/* get a post */
export const  getPost = async(req,res) =>{
  try {
    const postForQueryId = req.params.id
    const postQuery = await PostModel.findById(postForQueryId)

    res.status(200).json({message:"✅ post found:", post:postQuery})
  } catch (error) {
    req.status(500).json({message:"❌ post could not be found", error:error.message})
  }
}

/* update post */
export const updatePost = async (req, res) => {
  try {
  const postId = req.params.id;
  const { userId } = req.body;

    const post = await PostModel.findById(postId);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body }, {new: true});
      const updatedPost = await PostModel.findById(postId);
      res.status(200).json({message:"✅ post updated:", post:updatedPost});
    } else {
      res.status(403).json({message:"❌ Authentication failed"});
    }
  } catch (error) {
    res.status(500).json({message:"❌ post could not be updated:", error:error.message})
  }
};
//

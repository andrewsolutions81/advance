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

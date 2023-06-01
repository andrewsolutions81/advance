// postModel.js
import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    likes: [],
    createdAt: {
      type: Date,
      default: new Date(),
    },
    "imageName": String,
    "imageUrl": String,
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("Posts", postSchema);

export default PostModel;

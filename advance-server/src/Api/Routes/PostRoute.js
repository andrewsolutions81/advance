import express from 'express'
import { createPost, deletePost, getAllPosts, getPost, getTimelinePosts, likePost, updatePost } from "../Controllers/PostController.js";

const router = express.Router();
router.post("/",createPost);
router.get("/:id",getPost);
router.get("/",getAllPosts)
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.put('/:id/like', likePost);
router.get('/:id/timeline', getTimelinePosts);

export default router;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTimelinePosts } from "../../redux/actions/postAction.js";
import Post from "../Post/Post.jsx";
import "./Posts.css";

export default function Posts() {


  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  return (
    <div className="Posts">
      {loading
        ? "Loading posts...."
        : posts.map((post, id) => {
            return <Post data={post} key={id} />;
          })}
    </div>
  );
}

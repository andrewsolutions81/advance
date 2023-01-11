import React, { useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useSelector } from "react-redux";

export default function Post({ data }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const url = "http://localhost:8080/images/"

  return (
    <div className="Post">
      <img
        src={
          data.image
            ? url + data.image
            : "post image not working"
        }
        alt=""
      />
      <div className="postReact">
        <img src={data.liked ? Heart : NotLike} alt="like icon" />
        <img src={Comment} alt="comment icon" />
        <img src={Share} alt="share icon" />
      </div>
      <span className="post-likes">{data.likes} Likes</span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
}

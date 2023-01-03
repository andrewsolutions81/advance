import React from 'react'
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import "./Post.css"

export default function Post({data}) {
  return (
    <div className="Post">
      <img src={data.img} alt="" />

      <div className="postReact">
        <img src={data.liked? Heart : NotLike} alt="like icon" />
        <img src={Comment} alt="comment icon" />
        <img src={Share} alt="share icon" />
      </div>
      <span className='post-likes'>{data.likes} Likes</span>
      <div className="detail">
        <span><b>{data.name}</b></span>
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

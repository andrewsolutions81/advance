import React, { useState  } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useSelector } from "react-redux";
import { likePost } from "../../api/PostsRequests";

export default function Post({ data }) {
  const url = "http://localhost:8080/images/"
  // const url = process.env.REACT_APP_PUBLIC_FOLDER
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length)

  const handleLike = () => {
    setLiked((prev=>!prev))
    likePost(data._id, user._id)
    liked? setLikes((prev=> prev-1)) : setLikes((prev=> prev+1))
    console.log("data",data)
  }

  return (
    <div className="Post" key={data.image}>
      <img
        src={
          data.image
            ? url + data.image
            : "post image not working"
        }
        alt=""
      />
      <div className="postReact">
        <img className="like-icon" src={liked ? Heart : NotLike} alt="like icon" onClick={handleLike} />
        <img src={Comment} alt="comment icon" />
        <img src={Share} alt="share icon" />
      </div>
      <span className="post-likes">{likes} Likes</span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
}

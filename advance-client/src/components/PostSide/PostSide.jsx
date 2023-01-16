import React from "react";
import PostShare from "../PostShare/PostShare";
import Posts from "../Posts/Posts";
import "./PostSide.css"

export default function PostSide(){
  return(
    <div className="PostSide">
      <PostShare/>
      <Posts/>
    </div>
  )
}

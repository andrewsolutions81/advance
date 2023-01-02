import React from 'react'
import { PostsData } from "../../Data/PostsData"
import Post from "../Post/Post.jsx"
import "./Posts.css"

export default function Posts() {
  console.log(Post)
  return (
    <div className="Posts">
        {PostsData.map((post, id)=> {
          return <Post data={post} id={id}/>
          })}
    </div>
  )
}

import React from 'react'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
import "./Home.css"

export default function Home() {
  return (
    <div className="home">
      <ProfileSide/>
      <PostSide/>
    </div>
  )
}

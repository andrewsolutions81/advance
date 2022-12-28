import React from 'react'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import "./Home.css"

export default function Home() {
  return (
    <div className="home">
      <ProfileSide/>
      <div className="postSide">post</div>
      <div className="rightSide">rightside</div>
    </div>
  )
}

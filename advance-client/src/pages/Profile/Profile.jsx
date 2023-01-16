import React from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import PostSide from '../../components/PostSide/PostSide'
import "./Profile.css"

export default function Profile() {
  return (
    <div className="Profile">
      <ProfileLeft/>
      <div className="Profile-center">
        <ProfileCard location="profilePage"/>
        <PostSide/>
      </div>
    </div>
  )
}

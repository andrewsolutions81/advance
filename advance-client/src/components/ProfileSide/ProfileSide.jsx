import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'
import "./ProfileSide.css"

export default function ProfileSide() {
  return (
<div className="ProfileSide">
  <LogoSearch/>
  <ProfileCard/>
  <FollowersCard/>
</div>  )
}

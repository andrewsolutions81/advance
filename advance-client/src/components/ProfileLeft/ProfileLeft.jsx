import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'
import FollowersCard from '../FollowersCard/FollowersCard'
import "./ProfileLeft.css"

export default function ProfileLeft() {
  return (
    <div className="ProfileLeft">
      <LogoSearch/>
      <InfoCard/>
      <FollowersCard/>
    </div>
  )
}

import React from 'react'
import Home from '../../img/home.png'
import Settings from '../../img/settings-icon.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import TrendCard from "../TrendCard/TrendCard"
import "./RightSide.css"

export default function RightSide() {
  return (
    <mai className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="home icon" />
        <img src={Settings} alt="settings icon" />
        <img src={Noti} alt="noti icon" />
        <img src={Comment} alt="comment icon" />
      </div>

      <TrendCard/>
      <button className="button r-button">
        Share
      </button>
    </mai>
  )
}

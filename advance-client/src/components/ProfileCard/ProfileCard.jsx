import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";

export default function ProfileCard() {
  return (
    <div className="ProfileCard">
      <main className="ProfileImages">
        <img
          className="ProfileCardCover"
          src={Cover}
          alt="profile card cover"
        />
        <img
          className="ProfileCardAvatar"
          src={Profile}
          alt="profile card cover"
        />
      </main>
      <div className="ProfileName">
        <span className="UserName">Juliana MA</span>
        <span className="UserPosition">Save a cat CEO</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followrs</span>
          </div>
        </div>
        <hr />
      </div>
      <span>My Profile</span>
    </div>
  );
}

import React from "react";
import { Followers } from "../../Data/FollowersData";
import "./FollowersCard.css";

export default function FollowersCard() {
  return (
    <div className="FollowersCard">
      <h3>Followers</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img
                src={follower.img}
                alt="follower profile face"
                className="followerImage"
              />
              <div className="name">
                <span className="followerName">{follower.name}</span>
                <span className="followerUserName">@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">
              Follow
            </button>
          </div>
        );
      })}
    </div>
  );
}

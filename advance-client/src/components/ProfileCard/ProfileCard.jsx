import React from "react";
import { Link } from "react-router-dom";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import { useSelector } from "react-redux";
import "./ProfileCard.css";

export default function ProfileCard({location}) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts)
  const $url = process.env.REACT_APP_PUBLIC_FOLDER;

  const ProfilePage = false;
  return (
    <div className="ProfileCard">
      <main className="ProfileImages">
        <img
          className="ProfileCardCover"
          src={
            user.coverPicture
              ? $url + user.coverPicture
              : $url + "cover-icon.png"
          }
          alt="profile card cover"
        />
        <img
          className="ProfileCardAvatar"
          src={
            user.coverPicture
              ? $url + user.profilePicture
              : $url + "user-icon.png"
          }
          alt="profile card cover"
        />
      </main>
      <div className="ProfileName">
        <span className="UserName">
          {user.firsname} {user.lastname}
        </span>
        <span className="UserPosition">
          {user.workesAt ? user.workesAt : " What do you do ?"}
        </span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{posts.filter((post)=> post.userId === user._id).length}</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span className="my-profile">
          <Link to={`/profile/${user._id}`}>
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
}

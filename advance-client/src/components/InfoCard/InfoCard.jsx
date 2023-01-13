import Pen from "../../img/pen-icon.png";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserRequests.js";
import { logout } from "../../redux/actions/AuthActions.js";
import ProfileModal from "../ProfileModal/ProfileModal";
import "./InfoCard.css";

export default function InfoCard() {
  const [modalOpened, setModalOpened] = useState(false);
  const handleModal = () => setModalOpened(true);

  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});

  const { user } = useSelector((state) => state.authReducer.authData);
  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user]);

  const handleLogout = () => dispatch(logout)
console.log(profileUser.worksAt)
  return (
    <div className="InfoCard">
      <header className="infoHead">
        <h4>My Info</h4>
        {user._id === profileUserId ? (
          <div onClick={handleModal}>
            <img className="pen" src={Pen} alt="pen icon" />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        ) : (
          ""
        )}
      </header>
      <section className="info">
        <span>
          <b>Status </b>
        </span>
        <span>{profileUser.relationship}</span>
      </section>
      <section className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>{profileUser.livesI}</span>
      </section>
      <section className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>{profileUser.worksAt}</span>
      </section>
      <button className="button logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

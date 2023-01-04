import React, { useState } from "react";
import ProfileModal from "../ProfileModal/ProfileModal";
import Pen from "../../img/pen-icon.png";
import "./InfoCard.css";

export default function InfoCard() {
  const [modalOpened, setModalOpened] = useState(false);

  const handleModal = () => {
    setModalOpened(true);
  };

  return (
    <div className="InfoCard">
      <header className="infoHead">
        <h4>My Info</h4>
        <div onClick={handleModal}>
          <img className="pen" src={Pen} alt="pen icon" />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </header>
      <section className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in a relationship</span>
      </section>
      <section className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>New York</span>
      </section>
      <section className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Google</span>
      </section>
      <button className="button logout-button">Logout</button>
    </div>
  );
}

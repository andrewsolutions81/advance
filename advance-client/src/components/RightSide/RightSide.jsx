import React, { useState } from "react";
import Home from "../../img/home.png";
import Settings from "../../img/settings-icon.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import { Link } from "react-router-dom";
import "./RightSide.css";

export default function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);

  const handleModal = () => {
    setModalOpened(true);
  };

  return (
    <main className="RightSide">
      <div className="navIcons">
        <Link to="../home">
          <img src={Home} alt="home icon" />
        </Link>
        <img src={Settings} alt="settings icon" />
        <img src={Noti} alt="noti icon" />
        <img src={Comment} alt="comment icon" />
      </div>

      <TrendCard />
      <button className="button r-button" onClick={handleModal}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </main>
  );
}

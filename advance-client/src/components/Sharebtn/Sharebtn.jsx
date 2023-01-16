import React, { useState }from "react";
import ShareModal from "../ShareModal/ShareModal.jsx";

import "./Sharebtn.css";
function Sharebtn() {

  const [modalOpened, setModalOpened] = useState(false);

  const handleModal = () => {
    setModalOpened(true);
  };

  return (
    <div className="Sharebtn">
      <button className="button r-button" onClick={handleModal}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
}

export default Sharebtn;

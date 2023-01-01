import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import PhotoIcon from "../../img/photo-icon.png";
import VideoIcon from "../../img/video-icon.png";
import LocationIcon from "../../img/location-icon.png";
import ScheduleIcon from "../../img/schedule-icon.png";
import "./PostShare.css";

export default function PostShare() {
  const [image, setImage] = useState(null)
  const imageRef = useRef()

  const onImageChange = (e) => {
    if(e.target.files && e.target.files[0]){
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img)
      })
    }
  }

  const handleImageRef = ()=> {imageRef.current.click()}
  const handleCloseUpload = ()=> setImage(null)

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="user pic" className="PostShareImage" />
      <div className="PostShareInput">
        <input type="text" placeholder="Show your advance!" />
        <div className="PostOptions">
          <div className="option"
              onClick={handleImageRef}>
            <img src={PhotoIcon} alt="pic icon" />
            Photo
          </div>
          <div className="option">
            <img src={VideoIcon} alt="video icon" />
            Video
          </div>
          <div className="option">
            <img src={LocationIcon} alt="location icon" />
            Location
          </div>
          <div className="option">
            <img src={ScheduleIcon} alt="schedule icon" />
            Schedule
          </div>
          <button className="button ps--button">share</button>
          <div style={{display: "none"}}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <div className="CloseUpload" onClick={handleCloseUpload}>x</div>
            <img src={image.image} alt="upload preview"/>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../redux/actions/uploadAction";
import ProfileImage from "../../img/profileImg.jpg";
import PhotoIcon from "../../img/photo-icon.png";
import VideoIcon from "../../img/video-icon.png";
import LocationIcon from "../../img/location-icon.png";
import ScheduleIcon from "../../img/schedule-icon.png";
import "./PostShare.css";

const PostShare = () => {
  const loading = useSelector((state)=>state.postReducer.uploading)
  const dispatch = useDispatch();
  const [image, setImage] = useState(null)
  const imageRef = useRef()
  const { user } = useSelector((state) => state.authReducer.authData);
  const desc = useRef()

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const handleImageRef = ()=> {imageRef.current.click()}

  const handleCloseUpload = ()=> setImage(null)

  const handleSubmit = (e)=>{
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }
    if(image){
      const data =  new FormData()
      const filename = Date.now() + image.name
      data.append("name",filename)
      data.append("file", image)
      newPost.image = filename
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log("PostShare handleSubmit error:", error)
      }
    }
    dispatch(uploadPost(newPost));
    resetShare();
  }

  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="user pic" className="PostShareImage" />
      <div className="PostShareInput">
        <input type="text" placeholder="Show your advance!"
        ref={desc}
        required
        />
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
          <button className="button ps--button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading? "uploading...":"Share"}
          </button>
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
            <img src={URL.createObjectURL(image)} alt="upload preview"/>
          </div>
        )}
      </div>
    </div>
  );
}
export default PostShare;

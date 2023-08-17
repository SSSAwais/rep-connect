import React from "react";
import "./additionalBio.css";
const AdditionalBioFilmVideo = (props) => {
  const { title } = props;
  return (
    <>
      <div className="biofilm_video_wrapper">
        <h5>{title}</h5>
        <div className="bio_video"></div>
      </div>
    </>
  );
};

export default AdditionalBioFilmVideo;

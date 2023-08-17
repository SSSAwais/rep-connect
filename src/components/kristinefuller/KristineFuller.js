import React from "react";
import "./kristineFuller.css";
const KristineFuller = (props) => {
  const { fullerTitle } = props;
  return (
    <>
      <div className="fuller_video_wrapper">
        <h4>{fullerTitle}</h4>
        <div className="videoBox"></div>
      </div>
    </>
  );
};

export default KristineFuller;

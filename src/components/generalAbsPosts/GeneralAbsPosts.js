import React from "react";
import "./GeneralAbsPosts.css";

const GeneralAbsPosts = (props) => {
  const { trainingHeading } = props;
  return (
    <>
      <div className="genreal_training_wrapper">
        <h3>{trainingHeading}</h3>
        <div className="training_video_frame"></div>
      </div>
    </>
  );
};

export default GeneralAbsPosts;

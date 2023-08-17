"use client";
import React, { useState } from "react";
import Webcam from "react-webcam";
import style from "./webCam.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AddImage } from "@/redux/slices/editProfile";

const WebCamera = ({ rendered, _handleCaputer, getImage }) => {
  const imageProfile = useSelector((state) => state.editPro);
  const dispatch = useDispatch();
  const [isRendered, setIsRendered] = useState(rendered);

  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "user",
  };
  const [picture, setPicture] = useState("");

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });
  const _handleCaputeree = (e) => {
    e.preventDefault();

    _handleCaputer(webcamRef.current.getScreenshot());
  };
  console.log(picture, "picture");
  return (
    <>
      <div className={`${style.main_image_webvcam}`}>
        <div className={style.overlay}></div>
        <div>
          {picture == "" ? (
            <Webcam
              audio={false}
              height={400}
              ref={webcamRef}
              width={400}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          ) : (
            <img src={picture} />
          )}
        </div>
        <div>
          {picture != "" ? (
            <button
              onClick={_handleCaputeree}
              // onClick={(e) => {
              //   e.preventDefault();
              //   setPicture();
              //   setIsRendered(false)
              //  }}
              className={`${style.takeeee} hhh`}
            >
              Take Photo
            </button>
          ) : (
            <button onClick={_handleCaputeree} className={`${style.takeeee}`}>
              Take Photo
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default WebCamera;

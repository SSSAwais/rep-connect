import React from "react";
import Image from "next/image";
import "./MediaLibContent.css";
const MediaLibContent = (props) => {
  const {
    image,
    id,
    _handleGettingId,
    selectedImage,
    img,
    isSingle,
    _handleSingle,
  } = props;

  return (
    <>
      {isSingle === true ? (
        <div
          className={`image_section ${
            selectedImage.filter((item) => item === id).length > 0
              ? "addBorder"
              : ""
          }`}
        >
          <Image
            src={image}
            alt=""
            className={`image_`}
            width={120}
            height={120}
            onClick={() => _handleSingle(id, img)}
          />
        </div>
      ) : (
        <div
          className={`image_section ${
            selectedImage.filter((item) => item === id).length > 0
              ? "addBorder"
              : ""
          }`}
        >
          <Image
            src={image}
            alt=""
            className={`image_`}
            width={120}
            height={120}
            onClick={() => _handleGettingId(id, img)}
          />
        </div>
      )}
    </>
  );
};

export default MediaLibContent;

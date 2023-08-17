import Image from "next/image";
import React from "react";
import "./ImagesView.css";
const ImagesView = (props) => {
  const { immmg, id, _handleDeleteImage } = props;

  return (
    <>
      <div className="image_area">
        <Image src={immmg} alt="" width={60} height={60} />
        <i
          className="fa-solid fa-xmark"
          onClick={() => _handleDeleteImage(id)}
        ></i>
      </div>
    </>
  );
};

export default ImagesView;

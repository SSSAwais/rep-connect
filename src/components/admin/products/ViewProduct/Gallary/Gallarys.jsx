import React, { useState } from "react";
import viewimg from "../../../../../assets/images/products/covid-flu-22.jpg";
import Image from "next/image";
import "./gallary.css";
const Gallarys = ({ data }) => {
  const [coverImg, setCoverImg] = useState(data.cover_image.image.url);
  const [gallaryImg, setGallaryImg] = useState(data.gallary);
  const [active, setAcive] = useState(0);

  const hanldeActive = (index, url) => {
    setAcive(index);
    setCoverImg(url);
  };
  return (
    <div className="view-left">
      <div className="view-image">
        <Image
          src={coverImg}
          alt="admin"
          className="img-fluid object-fit-cover"
          fill
        />
      </div>
      <div className="view-gallary">
        {gallaryImg.map((img, index) => {
          return (
            <div
              key={index}
              className={`gallary-item me-2 ${
                active === index ? "active" : null
              }`}
              onClick={() => hanldeActive(index, img.image.url)}
            >
              <Image
                src={img.image.url}
                width={70}
                height={70}
                alt="admin"
                className="img-fluid"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallarys;

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "./images.css";
const ReactImageMagnify = dynamic(() => import("react-image-magnify"), {
  ssr: false,
});

const ImageGallary = ({ item }) => {
  const [coverImage, setCoverImage] = useState(item.gallary[0].image.url);
  const [index, setIndex] = useState(0);

  return (
    <figure className="deail--product">
      <div className="deail--product--image">
        <ReactImageMagnify
          {...{
            className: "magnify-image-small-image",
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: coverImage,
            },
            largeImage: {
              src: coverImage,
              width: 1426,
              height: 2000,
            },

            enlargedImagePosition: "over",
          }}
        />
      </div>
      <div className="detail--product-gallary d-flex mt-3">
        {item.gallary.length >= 1
          ? item.gallary.map((item, i) => {
              return (
                <div
                  className={`imagesslist me-2 ${
                    index === i ? "active" : null
                  }`}
                  key={i}
                  onClick={() => {
                    setIndex(i);
                    setCoverImage(item.image.url);
                  }}
                >
                  <Image
                    src={item.image.url}
                    alt="item.name"
                    width={100}
                    height={100}
                  />
                </div>
              );
            })
          : null}
      </div>
    </figure>
  );
};

export default ImageGallary;

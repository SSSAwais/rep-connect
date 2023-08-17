import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./DownloadAbleMaterialCart.css";
const DownloadAbleMaterialCart = ({ item, index }) => {
  return (
    <div className="DownloadAbleMaterialCart">
      <Link href={`/downloadable-sales-material/${item.link}`}>
        <div className={`image_wrapper cart${index + 1}`}>
          <Image src={item.img} alt={item.name} className="img-fluid" />
        </div>
        <div className="desc_wrapper">
          <h4 className="title">{item.name}</h4>
        </div>
      </Link>
    </div>
  );
};

export default DownloadAbleMaterialCart;

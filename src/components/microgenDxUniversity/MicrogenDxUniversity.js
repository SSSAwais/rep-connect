import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./MicrogenDxUniversity.css";
const MicrogenDxUniversity = ({ item }) => {
  return (
    <>
      <div className="university_card_wrapper">
        <Link href={{ pathname: `/microgen-dx-university/${item.link}` }}>
          <div className="uni_card_image_">
            <Image src={item.cardImage} alt="Image" className="img-fluid" />
          </div>
          <div className="desc_wrapper text-center">
            <h4>{item.card_heading}</h4>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MicrogenDxUniversity;

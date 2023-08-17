import React from "react";
import "./SpecialtyCard.css";
import Link from "next/link";
const SpecialtyCards = (props) => {
  const { specialimg, specialHeading, link } = props;
  return (
    <>
      <div className="specialty_cards_wrapper">
        <Link href={{ pathname: `/sales-resources-by-speciality/${link}` }}>
          <div className="specialty_img">
            <img src={specialimg} alt="image" className="img-fluid" />
          </div>
          <h2>{specialHeading}</h2>
        </Link>
      </div>
    </>
  );
};

export default SpecialtyCards;

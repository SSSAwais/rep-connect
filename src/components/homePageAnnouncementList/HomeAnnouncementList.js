import React from "react";
import Image from "next/image";
import "./HomeAnnouncementList.css";
const HomeAnnouncementList = (props) => {
  const { image, annTitle, date, Link } = props;
  return (
    <>
      <li>
        <div className="ann_listss_wrapper">
          <a href="#">
            <Image src={image} alt="image" className="image-fluid" />
          </a>
          <div className="annoucement_list">
            <a href={Link}>{annTitle}</a>
            <p>{date}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default HomeAnnouncementList;

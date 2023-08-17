import React from "react";
import image1 from "../../assets/images/sliderimage/biofilms-1-320.jpg";
import image2 from "../../assets/images/sliderimage/biofilms-2-320.jpg";
import image3 from "../../assets/images/sliderimage/biofilms-3-320.jpg";
import image4 from "../../assets/images/sliderimage/biofilms-4-320.jpg";
import image5 from "../../assets/images/sliderimage/biofilms-5-320.jpg";
import image6 from "../../assets/images/sliderimage/biofilms-6-320.jpg";
import image7 from "../../assets/images/sliderimage/biofilms-7-320.jpg";
import image8 from "../../assets/images/sliderimage/biofilms-8-320.jpg";
import image9 from "../../assets/images/sliderimage/biofilms-9-320.jpg";
import image10 from "../../assets/images/sliderimage/biofilms-10-320.jpg";
import image11 from "../../assets/images/sliderimage/biofilms-11-320.jpg";
import image12 from "../../assets/images/sliderimage/biofilms-12-320.jpg";
import image13 from "../../assets/images/sliderimage/biofilms-13-320.jpg";
import image14 from "../../assets/images/sliderimage/biofilms-14-320.jpg";
import image15 from "../../assets/images/sliderimage/biofilms-15-320.jpg";
import image16 from "../../assets/images/sliderimage/biofilms-16-320.jpg";
import image17 from "../../assets/images/sliderimage/biofilms-17-320.jpg";
import image18 from "../../assets/images/sliderimage/biofilms-18-320.jpg";
import image19 from "../../assets/images/sliderimage/biofilms-19-320.jpg";
import image20 from "../../assets/images/sliderimage/biofilms-20-320.jpg";
import image21 from "../../assets/images/sliderimage/biofilms-21-320.jpg";
import image22 from "../../assets/images/sliderimage/biofilms-22-320.jpg";
import image23 from "../../assets/images/sliderimage/biofilms-23-320.jpg";
import image24 from "../../assets/images/sliderimage/biofilms-24-320.jpg";
import image25 from "../../assets/images/sliderimage/biofilms-25-320.jpg";
import image26 from "../../assets/images/sliderimage/biofilms-26-320.jpg";
import image27 from "../../assets/images/sliderimage/biofilms-27-320.jpg";
import image28 from "../../assets/images/sliderimage/biofilms-28-320.jpg";
import image29 from "../../assets/images/sliderimage/biofilms-29-320.jpg";
import image30 from "../../assets/images/sliderimage/biofilms-30-320.jpg";
import image31 from "../../assets/images/sliderimage/biofilms-31-320.jpg";
import image32 from "../../assets/images/sliderimage/biofilms-32-320.jpg";
import image33 from "../../assets/images/sliderimage/biofilms-33-320.jpg";
import image34 from "../../assets/images/sliderimage/biofilms-34-320.jpg";
import image35 from "../../assets/images/sliderimage/biofilms-35-320.jpg";
import image36 from "../../assets/images/sliderimage/biofilms-36-320.jpg";
import image37 from "../../assets/images/sliderimage/biofilms-37-320.jpg";

import Slides from "./Slides";
import "./style.css";
const MainSlider = () => {
  const data = [
    { title: image1 },
    {
      title: image2,
    },
    {
      title: image3,
    },
    {
      title: image4,
    },
    {
      title: image5,
    },
    {
      title: image6,
    },
    {
      title: image7,
    },
    {
      title: image8,
    },
    {
      title: image9,
    },
    {
      title: image10,
    },
    {
      title: image11,
    },
    {
      title: image12,
    },
    {
      title: image13,
    },
    {
      title: image14,
    },
    {
      title: image15,
    },
    {
      title: image16,
    },
    {
      title: image17,
    },
    {
      title: image18,
    },
    {
      title: image19,
    },
    {
      title: image20,
    },
    {
      title: image21,
    },
    {
      title: image22,
    },
    {
      title: image23,
    },
    {
      title: image24,
    },
    {
      title: image25,
    },
    {
      title: image26,
    },
    {
      title: image27,
    },
    {
      title: image28,
    },
    {
      title: image29,
    },
    {
      title: image30,
    },
    {
      title: image31,
    },
    {
      title: image32,
    },
    {
      title: image33,
    },
    {
      title: image34,
    },
    {
      title: image35,
    },
    {
      title: image36,
    },
    {
      title: image37,
    },
  ];
  return (
    <>
      <div className="main_wrapper">
        <Slides slides={data} />
      </div>
    </>
  );
};

export default MainSlider;

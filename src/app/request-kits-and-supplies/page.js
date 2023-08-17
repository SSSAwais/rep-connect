"use client";
import React, { useState } from "react";
import style from "./request.module.css";
import standardkits from "../../assets/images/request-kit-supplies/request-kit-physician.jpg";
import individual from "../../assets/images/request-kit-supplies/request-supplies.jpg";
import labreq from "../../assets/images/request-kit-supplies/lab-req-2020-thumb.jpg";
import Link from "next/link";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth";
const page = () => {
  const [reqKits, setReqKits] = useState([
    {
      name: "Request Standard Kits",
      link: "/product-category/request-office-hospital-kits/",
      img: standardkits,
    },
    {
      name: "Request Individual Supplies",
      link: "product-category/individual-kit-items/",
      img: individual,
    },
    {
      name: "Pre-Filled Lab Req ",
      link: "/product-detail/pre-filled-lab-req/",
      img: labreq,
    },
  ]);
  return (
    <>
      <BreadCrum
        breadHeading={"Request Kits & Supplies"}
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "Request Kits & Supplies",
            link: "/",
          },
        ]}
      />
      <section className={style.request_kit_supplies}>
        <div className="container-xxl">
          <div className={`row ${style.request_kit_post_wrapper}`}>
            {reqKits.map((element, index) => {
              return (
                <div
                  className={`col-lg-4 col-md-6 col-sm-6 ${style.request_item}`}
                  key={index}
                >
                  <div className={style.image_wrapper}>
                    <Link href={element.link} target="_blank">
                      <img className="img-fluid" src={element.img.src} />
                      <div className={style.mask}></div>
                    </Link>
                    <Link
                      className={style.image_links}
                      href={element.link}
                      target="_blank"
                    >
                      <i className="fa-solid fa-link"></i>
                    </Link>
                  </div>
                  <div className={style.wp_caption_text}>
                    <p>{element.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);

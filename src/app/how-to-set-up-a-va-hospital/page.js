"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import React from "react";
import style from "./style.module.css";
import vahospital from "../../assets/images/global/va-logo-mgn-knoe.jpg";
import Image from "next/image";
import withAuth from "@/utils/auth";
const page = () => {
  return (
    <>
      <BreadCrum
        breadHeading="How to Set Up a VA Hospital"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "How to Set Up a VA Hospital",
            link: "/",
          },
        ]}
      />
      <section className={style.main_set_up_va_hospital}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className={`${style.head_title}`}>
                Please download and review the steps & forms for working with a
                VA Hospital
              </h3>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className={style.left_side_content_va_hospital}>
                <Image
                  src={vahospital}
                  className="img-fluid"
                  alt="va logo mgn knoe"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className={style.right_side_content_va_hospital}>
                <a
                  className={style.download_btn_work}
                  href="/downloadable-sales-material/working-with-hospitals-material/"
                >
                  Download How to Set up a VA Hospital Forms
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);

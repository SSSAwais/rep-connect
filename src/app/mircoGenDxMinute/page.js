"use client";
import withAuth from "@/utils/auth";
import React from "react";
import style from "./mircoGenDxMinute.module.css";
import BreadCrum from "@/components/breadCrum/BreadCrum";
const page = () => {
  return (
    <>
      <BreadCrum
        breadHeading="MicroGenDX Minute"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "MicroGenDX University",
            link: "/",
          },
          {
            page: "MicroGenDX Minute",
          },
        ]}
      />
      <section className={style.microgendxMin}>
        <div className="container">
          <div className={` row ${style.main_row}`}>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className={style.first_section}>
                <h4>PCR & NGS: What's the Difference? - Ep.1</h4>
                <div className={style.div_height}></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className={`${style.first_section} ${style.small}`}>
                <h4>Using NGS for Infections - Ep.2</h4>
                <div className={style.div_height}></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className={`${style.first_section} ${style.medioum}`}>
                <h4>Why Can't You Culture a Biofilm? - Ep.3</h4>
                <div className={style.div_height}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);

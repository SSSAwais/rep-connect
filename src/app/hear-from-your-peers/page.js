"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import React from "react";
import style from "./hearfromyourpeers.module.css";
import withAuth from "@/utils/auth";
const page = () => {
  return (
    <>
      <BreadCrum
        breadHeading="MicroGenDX University"
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
            page: "Hear From Your Peers",
          },
        ]}
      />
      <section className="container">
        <div className={`row ${style.peerrow}`}>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={style.ppers_posts}>
              <h4>Luis Lopez</h4>
              <div className={style.videoo}>
                <h6>video pacakge require</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={style.ppers_posts}>
              <h4>Kristie Fuller</h4>
              <div className={style.videoo}>
                <h6>Video package require</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={style.ppers_posts}>
              <h4>Andrew Knadler</h4>
              <div className={style.videoo}>
                <h6>Video package require</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);

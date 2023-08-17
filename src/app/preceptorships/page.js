"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth";
import React from "react";
import styles from "./preceptorships.module.css";
const page = () => {
  return (
    <>
      <BreadCrum
        breadHeading="Preceptorships"
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
            page: "Preceptorships",
          },
        ]}
      />
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className={styles.video_container}>
              <div className={styles.video_heading}>
                <h2>
                  OrthoKey:Evolutionary Step in Diagnosis of Orthopedic
                  Infections - Javad Parvizi
                </h2>
              </div>
              <div className={styles.video}>
                <iframe
                  src="https://player.vimeo.com/video/676361133?h=7d6bd70675"
                  width="640"
                  height="360"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className={styles.video_container2}>
              <div className={styles.video_heading}>
                <h2>Wound Preceptorship Physician's Perspective by Dr. Lam</h2>
              </div>
              <div className={styles.video2}>
                <iframe
                  src="https://player.vimeo.com/video/676361133?h=7d6bd70675"
                  width="640"
                  height="360"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(page);

"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth";
import React from "react";
import styles from "./effectivelySalesMaterial.module.css";
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
            link: "/microgen-dx-university",
          },
          {
            page: "effectively-Sales-Material",
          },
        ]}
      />
      <section className={styles.effectivaly_using_sale_material_wrapper}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className={styles.sale_material_video}>
                <h4>New Report Guide Trifold</h4>
                <div className={styles.videoBox}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);

"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import React from "react";
import style from "./hopsital.module.css";
import withAuth from "@/utils/auth";
const page = () => {
  return (
    <>
      <BreadCrum
        breadHeading="How to Bill a Hospital"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "How to Bill a Hospital",
            link: "/",
          },
        ]}
      />
      <section className={style.hospital_billing}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className={style.billing__left_section}>
                [mycred_video id="C5TLtly8Qpk"]
              </div>
            </div>
            <div className="col-lg-6  col-md-6 col-sm-12 col-12">
              <div className={style.billing__right__section}>
                <h2>
                  When billing a hospital please utilize the 4 sheets located in
                  dropbox.
                </h2>
                <p>You will need the following forms:</p>
                <ol>
                  <li>Billing Information Sheet</li>
                  <li>Combo Sheet</li>
                  <li>Invoice</li>
                  <li>Hospital Contract</li>
                  <li>Hospital Lab Req</li>
                </ol>
                <p>
                  There is a 6th sheet that explains how to use these correctly
                  in a hospital environment.
                </p>
                <a className={style.btn_billing_from__btn} href="#">
                  <span>Click Here to Download the Forms</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className={style.notedSection}>
                <hr />
                <h3>PLEASE NOTE: Pricing has been bumped up to $250</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);

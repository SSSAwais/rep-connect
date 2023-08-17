"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import React from "react";
import style from "./hospital.module.css";
import withAuth from "@/utils/auth";
const page = () => {
  return (
    <>
      <BreadCrum
        breadHeading="Hospital Contracting"
        pagess={[
          { page: "Home", link: "/" },
          { page: "Hospital Contracting", link: "/" },
        ]}
      />
      <section className={style.hospital_contracting}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-6">
              <div className={style.contacting__left_section}>
                [mycred_video id="C5TLtly8Qpk"]
              </div>
            </div>
            <div className="col-lg-6">
              <div className={style.contacting__right__section}>
                <h2>Hospital Contracting</h2>
                <p>
                  Please contact Beth Wall for Hospital Binder, Lab Req and
                  Contract.
                </p>

                <p>
                  Beth is here to assist you through the hospital contracting
                  process. Please call her as soon as you are in the starting
                  phase:
                </p>
                <p>
                  <b>
                    <a href="tel:404-204-1400">
                      <i className="fa-solid fa-phone-flip"></i>404-204-1400
                      EXT. 101
                    </a>{" "}
                    <a href="mailto:beth.wall@microgendx.com">
                      <i className="fa-regular fa-envelope"></i>{" "}
                      beth.wall@microgendx.com
                    </a>
                  </b>
                </p>
                <strong>
                  <i>
                    "I strongly advise that you watch the video for a snap shot
                    of how the Hospital Contract Process works.”
                  </i>
                </strong>
                <a className={style.btn_hostpital_contrac_from} href="#">
                  <span>
                    Click Here to Download the Hospital Contracting Forms
                  </span>
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

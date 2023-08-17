"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import React from "react";
import style from "./register.module.css";
import RegisterAccordian from "@/components/registerAccordian/RegisterAccordian";
const page = () => {
  return (
    <>
      <BreadCrum
        breadHeading="Rep Registration"
        pagess={[
          { page: "Home", link: "/" },
          { page: "My Profile", link: "/profile" },
          { page: "Rep Registration" },
        ]}
      />
      <section className={style.registation_wrapper}>
        <div className={`container-xxl ${style.first_section} `}>
          <div className="row ">
            <div className="col-lg-12 p-0">
              <div className={style.account_details}>
                <h4>Register Details</h4>
                <h4>Already a member?</h4>
              </div>
            </div>
          </div>
          <RegisterAccordian />
        </div>
      </section>
    </>
  );
};

export default page;

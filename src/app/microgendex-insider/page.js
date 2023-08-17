"use client";
import React, { useState } from "react";
import styles from "./microgendxInsider.module.css";
import MicrogendxInsiderComponent from "@/components/microgendxInsiderComponent/microgendxInsiderComponent";
import labCompany from "../../assets/images/microgenInsider/lab-company.png";
import drpleads from "../../assets/images/microgenInsider/doctorpleads.png";
import indicated from "../../assets/images/microgenInsider/tenindicted.png";
import business from "../../assets/images/microgenInsider/businessagreement.png";
import jail from "../../assets/images/microgenInsider/jail.png";
import Image from "next/image";
import withAuth from "@/utils/auth";
import Pagination from "@/components/pagination/Pagination";
import BreadCrum from "@/components/breadCrum/BreadCrum";
const page = () => {
  const [imageCounter, setImageCounter] = useState(0);
  const [layout, setLayout] = useState(false);
  const imageControls = (value) => {
    if (value === "forward") {
      if (imageCounter < micrognInsider.length - 1) {
        setImageCounter(imageCounter + 1);
      } else {
        setImageCounter(0);
      }
    }
    if (value === "back") {
      if (imageCounter != 0) {
        setImageCounter(imageCounter - 1);
      } else {
        setImageCounter(4);
      }
    }
  };
  const [micrognInsider, setMicrognInsider] = useState([
    {
      image: labCompany,
      heading:
        "Lab Company Owners Indicted for False Billing of Medically Unnecessary Tests",
      paragraph:
        "Case:  A north Texas federal grand jury indicted 10 people for a $300 million Medicare fraud scheme, including two physicians and the founders of three lab […]",
      comments: "3",
      readComment: "Read more",
      link: "lab-company-owners-indicted-for-false-billing-of-medically-unnecessary-tests/",
    },
    {
      image: drpleads,
      heading: "Doctor Pleads Guilty to Accepting Illegal Kickback Payments",
      paragraph:
        "It is illegal to pay or receive “kickbacks” in conjunction with federal health care insurance. Prohibitions against kickbacks are crucial to ensure that financial motives do […]",
      comments: "0",
      readComment: "Read more",
      link: "doctor-pleads-guilty-to-accepting-illegal-kickback-payments/",
    },
    {
      image: business,
      heading: "Business Associate Agreements 101",
      paragraph:
        "One of my offices told me I need to have a BAA (Business Associate Agreement) signed with them, what are they referring to and what should […]",
      comments: "0",
      readComment: "Read more",
      link: "business-associate-agreements-101/",
    },
    {
      image: indicated,
      heading:
        "Ten Indicted for Healthcare Kickbacks; Including Labs, Marketers and Physicians",
      paragraph:
        "Ten Indicted for Healthcare Kickbacks According to the indictment, the founders of several lab companies, including Unified Laboratory Services, Spectrum Diagnostic Laboratory, and Reliable Labs LLC, […]",
      comments: "0",
      readComment: "Read more",
      link: "ten-indicted-for-healthcare-kickbacks-including-labs-marketers-and-physicians/",
    },
    {
      image: jail,
      heading:
        "Laboratory Owner Sentenced to 82 Months in Prison for COVID-19 Kickback Scheme",
      paragraph:
        "A Florida owner of multiple diagnostic testing laboratories was sentenced today in the Southern District of Florida to 82 months in prison for a scheme to […]",
      comments: "0",
      readComment: "Read more",
      link: "laboratory-owner-sentenced-to-82-months-in-prison-for-covid-19-kickback-scheme/",
    },
  ]);
  const func = (value) => {
    setLayout(true);
    setImageCounter(value);
  };
  const cancel = (event) => {
    event.preventDefault();
    setLayout(false);
  };
  return (
    <>
      {/* {
        layout ? <div className={styles.layout01}>
          <div className={styles.imagepopup}>
            <div className={styles.img_container}>
              <div className={styles.cancel}> <button onClick={cancel} className={styles.cancel_btn}><i className="fa-solid fa-xmark"></i> </button> </div>
              <button className={styles.controls} onClick={() => imageControls("back")} > <i className="fa-solid fa-angle-left"></i> </button>
              <Image className="img-fluid" width={800} src={micrognInsider[imageCounter].image} alt="logo" />
              <button className={styles.controls} onClick={() => imageControls("forward")} ><i className="fa-solid fa-angle-right"></i> </button>
            </div>
          </div>
        </div> : ""
      } */}
      <BreadCrum
        breadHeading="MicroGenDX Insider"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "MicroGenDX Insider",
            link: "/",
          },
        ]}
      />
      <div className={layout ? styles.layout01 : ""}></div>
      {layout ? (
        <div className="row">
          <div className={`col-12 ${styles.layout_column}`}>
            <div className={styles.imagepopup}>
              <div className={styles.img_container}>
                <div className={styles.cancel}>
                  <button onClick={cancel} className={styles.cancel_btn}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className={styles.btns_ctrl}>
                  <button
                    className={styles.controls}
                    onClick={() => imageControls("back")}
                  >
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                  <Image
                    className="img-fluid"
                    width={800}
                    src={micrognInsider[imageCounter].image}
                    alt="logo"
                  />
                  <button
                    className={styles.controls}
                    onClick={() => imageControls("forward")}
                  >
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <section className={styles.microInsider_wrapper}>
        <div className="container-xxl">
          <div className="row">
            {micrognInsider.map((e, idx) => {
              return (
                <div className={`row ${styles.row_margin}`} key={idx}>
                  <MicrogendxInsiderComponent
                    popFunction={() => func(idx)}
                    items={e}
                    key={idx}
                  />
                </div>
              );
            })}
            <div className="pagi_margin">
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);

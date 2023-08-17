"use client";
import React, { useState } from "react";
import ScienceCards from "@/components/scienceCards/ScienceCards";
import styless from "./science.module.css";
import cardImg from "../../assets/images/sciencecards/microbiology-101-2.jpg";
import dna from "../../assets/images/sciencecards/understanding-genetics-and-dna.jpg";
import human from "../../assets/images/sciencecards/human-immune-defense.jpg";
import biofilm from "../../assets/images/sciencecards/biofilms-720.jpg";
import diagnose from "../../assets/images/sciencecards/diagnose-infections.jpg";
import antibiotics from "../../assets/images/sciencecards/antibiotics-and-antifungals-2.jpg";
import withAuth from "@/utils/auth";
import BreadCrum from "@/components/breadCrum/BreadCrum";
const page = () => {
  const [scienceCardData, setScienceCardData] = useState([
    {
      cardImage: cardImg,
      desctitle: "1. Microbiology 101",
      subtitle: "chapter 0 - 10",
    },
    {
      cardImage: dna,
      desctitle: "2. Understanding Genetics & DNA",
      subtitle: "chapter 11 - 15",
    },
    {
      cardImage: human,
      desctitle: "3. Human Immune Defense System ",
      subtitle: "chapter 16 - 19",
    },
    {
      cardImage: biofilm,
      desctitle: "4. Biofilms",
      subtitle: "chapter 20 - 22",
    },
    {
      cardImage: diagnose,
      desctitle: "5. Diagnosing Infections: Cultures vs NGS",
      subtitle: "chapter 23 - 31",
    },
    {
      cardImage: antibiotics,
      desctitle: "6. Antibiotics & Antifungals",
      subtitle: "chapter 32 - 34",
    },
  ]);
  return (
    <>
      <BreadCrum
        breadHeading="Science of MicrogenDX"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "Science of MicrogenDX",
          },
        ]}
      />
      <section className={styless.science_page_wrapper}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12">
              <div className={styless.science_para_wrapper}>
                <p>
                  Welcome to the Science of MicroGenDX Video and Online Test
                  Training Section. We believe knowledge empowers ours Reps for
                  greater success.
                </p>
                <p>
                  This section is built to give you confidence in understanding
                  the Science of what we deliver to our physicians. Please
                  review each video and take the test associated with each that
                  video
                </p>
                <div className={styless.science_heading}>
                  <h3>
                    Understand Scientifically why Physicians need MicroGenDX
                    today!
                  </h3>
                  <p>
                    View at your own pace & test your knowledge by taking the
                    test under each video.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {scienceCardData.map((e, idx) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-6" key={idx}>
                  <ScienceCards
                    cardImage={e.cardImage.src}
                    desctitle={e.desctitle}
                    subtitle={e.subtitle}
                  />
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className={styless.download_button_science}>
                <a href="#" target="blank">
                  <span>
                    <i className="fa-solid fa-file-pdf"></i>
                  </span>
                  Download the full Science of Microgen DX Script
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

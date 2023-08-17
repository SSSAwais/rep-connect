"use client"
import BreadCrum from "@/components/breadCrum/BreadCrum";
import GeneralAbsPosts from "@/components/generalAbsPosts/GeneralAbsPosts";
import withAuth from "@/utils/auth";
import React, { useState } from "react";
import styless from "./antibiotics.module.css";
const page = () => {
    const [trainingData, setTrainingData] = useState([
        {
          trainingHeading: "Sulfonamides",
        },
        {
          trainingHeading: "Tetracyclines",
        },
        {
          trainingHeading: "Aminoglycosides",
        },
        {
          trainingHeading: "Amphenicol",
        },
        {
          trainingHeading: "Beta Lactams",
        },
        {
          trainingHeading: "Cephalosporins",
        },
        {
          trainingHeading: "Glycopeptides",
        },
        {
          trainingHeading: "Macrolides",
        },
        {
          trainingHeading: "Oxazolidinones",
        },
        {
          trainingHeading: "Penicillins",
        },
        {
          trainingHeading: "Streptogramins",
        },
      ]);
  return (
    <>
      <BreadCrum
        breadHeading="Antibiotics 101"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "Antibiotics 101",
          },
        ]}
      />
      <section className={styless.training_wrapper_}>
        <div className="container-xxl">
          <div className="row">
            {trainingData.map((e, idx) => {
              return (
                <div className=" col-lg-4 col-md-6 col-sm-6" key={idx}>
                  <GeneralAbsPosts
                    key={idx}
                    trainingHeading={e.trainingHeading}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);

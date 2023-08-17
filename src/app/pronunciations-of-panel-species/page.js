"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth";
import React, { useState } from "react";
import stylee from "./pronuncuation.module.css";
import GeneralAbsPosts from "@/components/generalAbsPosts/GeneralAbsPosts";
const page = () => {
  const [proun, setProun] = useState([
    {
      trainingHeading: "All Bacteria",
    },
    {
      trainingHeading: "Blood Panel",
    },
    {
      trainingHeading: "ENT Panel",
    },
    {
      trainingHeading: "GI Panel",
    },
    {
      trainingHeading: "Nail Panel",
    },
    {
      trainingHeading: "Respiratory Panel",
    },
    {
      trainingHeading: "STD Panel",
    },

    {
      trainingHeading: "Urine/Semen Panel",
    },
    {
      trainingHeading: "Vaginal Panel",
    },
    {
      trainingHeading: "Wound/Ortho Panel",
    },
    {
      trainingHeading: "List of Resistance Genes",
    },
  ]);
  return (
    <>
      <BreadCrum
        breadHeading="Pronunciations of Panel Species"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "Pronunciations of Panel Species",
          },
        ]}
      />

      <section className={stylee.proun_wrapper}>
        <div className="container-xxl">
          <div className="row">
            {proun?.map((e, idx) => {
              return (
                <div
                  className={`col-lg-4 col-md-6 col-sm-12 ${stylee.prounssss}`}
                  key={idx}
                >
                  <GeneralAbsPosts trainingHeading={e.trainingHeading} />
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

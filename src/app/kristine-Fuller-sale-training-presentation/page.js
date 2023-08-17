"use client";
import withAuth from "@/utils/auth";
import React, { useState } from "react";
import styless from "./kristine.module.css";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import KristineFuller from "@/components/kristinefuller/KristineFuller";
const page = () => {
  const [kristineList, setKristineList] = useState([
    {
      fullerTitle: "Part 1: Intro",
    },
    {
      fullerTitle: "Part 2: Patient Success Stories",
    },
    {
      fullerTitle: "Part 3: Brief History of MDX",
    },
    {
      fullerTitle: "Part 4: Importance of the MA",
    },
    {
      fullerTitle: "Part 5: MA - Q & A",
    },
    {
      fullerTitle: "Part 6: Different Specialties",
    },
    {
      fullerTitle: "Part 7: Being a sales person",
    },
  ]);
  return (
    <>
      <BreadCrum
        breadHeading="Kristie Fuller’s Sales Training Presentation"
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
            page: "Kristie Fuller’s Sales Training Presentation",
          },
        ]}
      />

      <div className="container">
        <div className={`row ${styless.row_section_uni}`}>
          {kristineList.map((e, idx) => {
            return (
              <div className={`col-lg-4 col-md-6 col-sm-12`} key={idx}>
                <div className={styless.video_section}>
                  <KristineFuller fullerTitle={e.fullerTitle} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default withAuth(page);

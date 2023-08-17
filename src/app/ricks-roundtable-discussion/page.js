"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import React, { useState } from "react";
import styless from "./rick.module.css";
import KristineFuller from "@/components/kristinefuller/KristineFuller";
const page = () => {
  const [rickList, setRickList] = useState([
    {
      fullerTitle: "1.1 - Introductions",
    },
    {
      fullerTitle: "1.2 - Targeting",
    },
    {
      fullerTitle: "1.3 - Getting in the Door",
    },
    {
      fullerTitle:
        "1.4 - The Office Manager & Handling Billing & Invoice Issues",
    },
    {
      fullerTitle: "1.5 - Coverage & Closing",
    },
    {
      fullerTitle: "2.2 - Setting Office Up with Kits",
    },
    {
      fullerTitle: "2.3 - Importance of MA's",
    },
    {
      fullerTitle: "2.4 - The MA Contest",
    },
    {
      fullerTitle: "2.5 - Handling Objections",
    },
    {
      fullerTitle: "2.6 - New Tech what MicroGenDx Does and Doesn't",
    },
    {
      fullerTitle: "3.1 - Slide Show and Laptop Presentation ",
    },
    {
      fullerTitle: "3.2 - Discussing Sales Material Andrew",
    },
    {
      fullerTitle: "3.3 - Chris and Comparing Reports",
    },
    {
      fullerTitle: "3.4 - Sharing Ideas Knowing Materials",
    },
    {
      fullerTitle: "3.5 - Three Takeaways",
    },
    {
      fullerTitle: "3.6 - Competitiveness and Referrals",
    },
    {
      fullerTitle: "4.1 - Referrals and Recommendations ",
    },
    {
      fullerTitle: "4.2 - Learning from Pushback",
    },
    {
      fullerTitle: " 4.3 - Sales vs Customer Service",
    },
    {
      fullerTitle: "4.4 - Motivations and Rewards ",
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
        <div className={`row ${styless.row_section_ricks}`}>
          {rickList.map((e, idx) => {
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

export default page;

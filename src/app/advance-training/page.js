"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import KristineFuller from "@/components/kristinefuller/KristineFuller";
import withAuth from "@/utils/auth";
import React, { useState } from "react";
import styless from "./advanceTrain.module.css";
const page = () => {

  const [kristineList, setKristineList] = useState([
    {
      fullerTitle: "Welcome to MicroGenDX!",
    },
    {
      fullerTitle: "The MicroGenDX Elevator Pitch",
    },
    {
      fullerTitle: "Setting Yourself Up for Success with Office Buy-In",
    },
    {
      fullerTitle: "Ensuring Repeat Business",
    },
    {
      fullerTitle: "Why It's Important to Cover Sampling Techniques with MAs",
    },
    {
      fullerTitle: "Following Up with the Lab",
    },
    {
      fullerTitle: "Addressing FedEx Issues",
    },
    {
      fullerTitle: "Building the Case for Topical Antibiotic Treatment",
    },
    {
      fullerTitle: "The Main Differences in the Site-of-Service",
    },
    {
      fullerTitle: "Culture Reports and Next-Gen Sequencing",
    },
    {
      fullerTitle:
        " Taking a Proactive Approach with a Drop-Off In-Service Requests",
    },
    {
      fullerTitle: "Site of Service | OR Physicians ",
    },
    {
      fullerTitle: "Addressing Antibiotic Sensitivity Objections",
    },
  ]);
  

  const [additionalSale, setAdditionalSale] = useState([
    { fullerTitle: "Addressing Next-Gen Sequencing info to Physicians" },
    {
      fullerTitle: "Moving from Culture to Molecular Diagnostics",
    },
    {
      fullerTitle: "Antibiotic Delivery Systems & Topical Treatments",
    },
    {
      fullerTitle: "Building the Case for Topical Antibiotic Treatment",
    },
    {
      fullerTitle: "NGS and Infectious Disease Doctors",
    },
  ]);

  const [secondAddition, setSecondAddition] = useState([
    {
      fullerTitle: "Identifying the Causative Microbes of Infections with NGS",
    },
    {
      fullerTitle:
        "Answers to Common Misconceptions of Molecular Diagnostics for Microbes",
    },
    {
      fullerTitle: "What do I do with all of the Lab Report Information",
    },
    {
      fullerTitle: "Advancements in MicroGenDX",
    },
  ]);
  
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
            page: "Advance Training",
          },
        ]}
      />
      <section>
        <div className="container">
          <div className={`row ${styless.row_section_uni}`}>
            {kristineList.map((e, idx) => {
              return (
                <div className={`col-lg-5 col-md-6 col-sm-12`} key={idx}>
                  <div className={styless.video_section}>
                    <KristineFuller fullerTitle={e.fullerTitle} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className={styless.additional_heading}>
                <h4>Additional Sales Resources</h4>
              </div>
            </div>
          </div>
          <div className={`row ${styless.row_section_uni2}`}>
            {additionalSale.map((e, idx) => {
              return (
                <div className="col-lg-5 col-md-6 col-sm-12" key={idx}>
                  <div className={styless.sales_section}>
                    <KristineFuller fullerTitle={e.fullerTitle} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={`row ${styless.row_section_uni2}`}>
            {secondAddition.map((e, idx) => {
              return (
                <div className="col-lg-5 col-md-6 col-sm-12" key={idx}>
                  <div className={styless.sales_section}>
                    <KristineFuller fullerTitle={e.fullerTitle} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styless.congrates_section}>
          <div className="container">
            <div className={`row`}>
              <div className="col-lg-12">
                <div className={`${styless.congrates_heading}`}>
                  <h6>
                    Congratulations! You've got the General Sales Training down.
                    Now, move on to Specialties
                  </h6>
                  <div className="mb-2">
                    <a href="#">Click Here for part 2 - Learn the science of MicroGenDx</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);

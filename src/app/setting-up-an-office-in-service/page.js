"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import Link from "next/link";
import React, { useState } from "react";
import style from "./office.module.css";
import withAuth from "@/utils/auth";
const page = () => {
  const [steps, setSteps] = useState([
    {
      title: "PROVIDER APPROVAL (SELLING STEP)",

      desc: [
        "Provider (MD, PA, RNP) gives approval to use MicroGenDX",
        "Provider has been educated about clinical utility of qPCR + NGS",
        "Sample collection devices are supplied in the clinic/patient exam rooms",
      ],
    },
    {
      title: "STAFF EDUCATION",
      desc: [
        "MA knows how to take a sample, how to complete the lab req, how to register for and use the Lab Portal, and how to enter the MicroGenDX report into the medical record of the patient",
        "is given MicroGenDX patient brochures and billing policy tear-off pads to hand to patients ",
        "Sales rep reinforces with MA the need to keep sample tracking number on file (in order to locate sample) and points out the tear-out in the box",
        "Sales rep reviews and reinforces importance of the MA’s role in MicroGenDX testing gaining patient acceptance  ",
        "Front office staff responsible for contacting FedEx knows how to order FedEx for sample pickup        ",
      ],
    },
    {
      title: "PATIENT WITH INFECTION SEEN IN CLINIC",
      desc: [
        "MA advises the patient that the MGDX test is available, and informs them of cost implications if their insurance does not cover the test",
        "Patient agrees to the test and signs the lab req authorizing the test to be billed to their insurance",
      ],
    },
    {
      title: "SAMPLE COLLECTION ",
      desc: [
        "Depending on sample type, provider or MA collects sample",
        "Sales rep reinforces how to collect a sample and what not to do (https://microgendx.qrd.by/collect) ",
      ],
    },
    {
      title: "LAB REQ SUBMITTED ",
      desc: [
        "MA completes lab req and attaches patient insurance information or Demo Sheet to the lab req",
        "MA ensures the lab req is signed by the provider (or that a Provider Service Agreement is in place), that ICD-10 codes are on the lab req, and that the lab req is filled out completely with the appropriate test indicated",
        "Lab req is submitted to MicroGenDX",
      ],
    },
    {
      title: "MICROGENDX REPORT ISSUED",
      desc: [
        "MicroGenDX issues report and transmits to provider",
        "Sales rep has confirmed the preferred method of provider receiving reports (fax, email, lab portal)",
        "Sales rep ensures reports are being received",
        "Sales rep knows how reports will be entered into provider EMR or patient records",
      ],
    },
    {
      title: "REPORT REVIEWED BY PROVIDER",
      desc: [
        "Provider reviews MicroGenDX report, understands it, and is able to make a clinical decision for treatment",
        "If provider has questions about their report, sales rep schedules call with Dr. Alexander or other ID consultant at MicroGenDX",
      ],
    },
    {
      title: "FOLLOW-UPS",
      desc: [
        "Sales rep meets with practice office manager to reinforce clinical benefits of using MicroGenDX, explores new marketing opportunities, and reviews MicroGenDX billing policies ",
        "Sales rep ensures any problems or patient complaints are brought to their attention",
      ],
    },
  ]);
  return (
    <>
      <BreadCrum
        breadHeading="Setting Up an Office/In-Service"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "Setting Up an Office/In-Service",
            link: "/",
          },
        ]}
      />
      <section className={style.in_office_page}>
        <div className="container-xxl">
          <div className="row">
            <div className="col">
              <h2 className={style.in_office_title}>
                Provider Workflow Overview & Checklist
              </h2>
              <p>
                Sales reps will use this as a checklist when working with MAs,
                entering the date when information is reviewed with the provider
                or MA in the “Date Completed” column, and then email the
                completed checklist to their manager.
              </p>
            </div>
          </div>
          <div className={`row ${style.page__wrapper}`}>
            <div className="col-lg-3 col-md-4">
              <h5 className={style.step_title}>STEP</h5>
            </div>
            <div className="col-lg-9 col-md-8">
              <h4 className={style.step_title}>DESCRIPTION</h4>
            </div>
          </div>
          <div className={`col-12 ${style.steps__wrapper}`}>
            {steps.map((elem, index) => {
              return (
                <div className={`row ${style.steps__items}`} key={index}>
                  <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className={style.steps__item_tiles}>
                      <strong>{index + 1}</strong>
                      <p>{elem.title}</p>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8  col-sm-12">
                    <ul className={style.steps__item__desc}>
                      {elem.desc.map((e, i) => {
                        return <li key={i}>{e}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className={style.in_setting_pdf_section}>
        <div className="container-xxl">
          <div className="row">
            <div className={`col-12 ${style.download_btn_in_setting}`}>
              <Link href="/download/setting-up-new-office-checklist-0153/">
                <span className="icon">
                  <i className="fa-regular fa-file-pdf"></i>
                </span>
                Download Setting Up New Office Checklist PDF
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);

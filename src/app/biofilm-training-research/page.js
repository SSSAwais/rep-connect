"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth";
import React, { useState } from "react";
import stylee from "./biofilm.module.css";
import GeneralAbsPosts from "@/components/generalAbsPosts/GeneralAbsPosts";
import AdditionalBioFilmVideo from "@/components/additonalBioFilmVideo/AdditionalBioFilmVideo";
import report1 from "../../assets/images/microgendxuniversity/report1.jpg";
import report2 from "../../assets/images/microgendxuniversity/report2.jpg";
import report3 from "../../assets/images/microgendxuniversity/report3.jpg";
import report4 from "../../assets/images/microgendxuniversity/report4.jpg";
import report5 from "../../assets/images/microgendxuniversity/report5.jpg";
import report6 from "../../assets/images/microgendxuniversity/report6.jpg";
import report7 from "../../assets/images/microgendxuniversity/report7.jpg";
import report8 from "../../assets/images/microgendxuniversity/report8.jpg";
import report9 from "../../assets/images/microgendxuniversity/report9.jpg";
import report10 from "../../assets/images/microgendxuniversity/report10.jpg";
import report11 from "../../assets/images/microgendxuniversity/report11.jpg";
import report12 from "../../assets/images/microgendxuniversity/report12.jpg";
import report13 from "../../assets/images/microgendxuniversity/report13.jpg";
import report14 from "../../assets/images/microgendxuniversity/report14.jpg";
import report15 from "../../assets/images/microgendxuniversity/report15.jpg";
// import report16 from "../../assets/images/microgendxuniversity/report16.jpg";
import report18 from "../../assets/images/microgendxuniversity/report18.jpg";

import PdfBioResearch from "@/components/pdfbioResearch/PdfBioResearch";
import MainSlider from "@/components/slider/MainSlider";
import Popup from "@/components/slider/popup/Popup";
const page = () => {
  const [trainingData, setTrainingData] = useState([
    {
      trainingHeading: "Introduction to Biofilms ",
    },
    {
      trainingHeading: "History of Biofilms",
    },
    {
      trainingHeading: "Biofilms Gene Sharing ",
    },
  ]);
  const [bioVid, setBioVideo] = useState([
    {
      title: "What Are Bacterial Biofilms?",
    },
    {
      title: "Dr. Bill Costerton: Diagnosing and Treating Biofilm Infections ",
    },
    {
      title:
        "Randy Wolcott, MD - Diagnosing & Treating Bacterial Biofilm Infections",
    },
    {
      title: "Why Am I Still Sick?",
    },
    {
      title: "Rodney Donlan on Biofilm Infections ",
    },
    {
      title: "Biofilm: A New (Gross) Thing to Worry About",
    },
  ]);
  const [pdf, setPdf] = useState([
    {
      pdfImage: report1,
      buttonTitle:
        "Applications of Clinical Microbial Next-Generation Sequencing",
    },
    {
      pdfImage: report2,
      buttonTitle:
        "Understanding the Importance of Biofilms In Treating Chronic Sinusitis",
    },
    {
      pdfImage: report3,
      buttonTitle:
        "Biofilm-Related Periprosthetic Joint Infections | Dustin L. Williams and Roy D. Bloebaum",
    },
    {
      pdfImage: report4,
      buttonTitle:
        "The Role of Bacterial Biofilms and the Pathophysiology of Chronic Rhinosinusitis",
    },
    {
      pdfImage: report5,
      buttonTitle:
        "ESCMID guideline for the diagnosis and treatment of biofilm infections2014",
    },
    {
      pdfImage: report6,
      buttonTitle:
        "Economic aspects of biofilm-based wound care in diabetic foot ulcers",
    },
    {
      pdfImage: report7,
      buttonTitle:
        "More effective cell-based therapy through biofilm suppression",
    },
    {
      pdfImage: report8,
      buttonTitle:
        "The Role of Bacterial Biofilms in Chronic InfectionsT. Bjarnsholt",
    },
    {
      pdfImage: report9,
      buttonTitle: "ASM Microbe June 2016 Presentation",
    },
    {
      pdfImage: report10,
      buttonTitle: "Clinically Addressing Biofilm in Chronic Wounds",
    },
    {
      pdfImage: report11,
      buttonTitle: "Culture Negative Infections",
    },
    {
      pdfImage: report12,
      buttonTitle:
        "Molecular Microbiology New Dimensions for Cutaneous Biology and Wound Healing",
    },
    {
      pdfImage: report13,
      buttonTitle:
        "Actionable Diagnosis of Neuroleptospirosis by Next-Generation Sequencing",
    },
    {
      pdfImage: report14,
      buttonTitle: "Ramikrishnan Culture vs Sequencing",
    },
    {
      pdfImage: report15,
      buttonTitle: "The Problem of Culture Negative Infections ",
    },
    {
      pdfImage: report18,
      buttonTitle: "Wolcott Wound Repair and Regeneration ",
    },
  ]);
  return (
    <>
      <BreadCrum
        breadHeading="Biofilm Training & Research"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "Biofilm Training & Research",
          },
        ]}
      />

      <section className={stylee.biofilm_wrapper}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12">
              <div className={stylee.biofilm_heading}>
                <h4>Biofilm Training</h4>
                <p>
                  View the videos below to learn more about biofilms then click
                  the link to take the associated test.
                </p>
              </div>
            </div>
          </div>
          <div className={`row ${stylee.films_sexond_row}`}>
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
      <section className={stylee.additional_bio_wrapper}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12">
              <div className={stylee.additonal_bio_film}>
                <h4>Additional Biofilm Videos</h4>
                <p>
                  View the videos below to learn more about biofilm research
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {bioVid.map((e, idx) => {
              return (
                <div
                  className={`col-lg-4 col-md-6 col-sm-12 ${stylee.video_wid}`}
                  key={idx}
                >
                  <AdditionalBioFilmVideo title={e.title} />
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className={stylee.bio_research_paper}>
                <h5>Biofilm Research Papers</h5>
                <p>
                  Click the links below to view various biofilm research papers
                </p>
              </div>
            </div>
          </div>
          <div className={`row ${stylee.pdf_research}`}>
            {pdf.map((e, idx) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={idx}>
                  <PdfBioResearch
                    pdfImage={e.pdfImage}
                    buttonTitle={e.buttonTitle}
                  />
                </div>
              );
            })}
            <MainSlider />
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);

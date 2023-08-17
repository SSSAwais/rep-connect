"use client";
import DownloadAbleMaterialCart from "@/components/downloaAbleMaerialCart/DownloadAbleMaterialCart";
import React, { useState } from "react";
import style from "./donwnloadable.module.css";
import abdlab from "../../assets/images/download/abdl2-124.png";
import covid from "../../assets/images/download/covid-124.png";
import dental from "../../assets/images/download/dental-124.png";
import ent from "../../assets/images/download/ent-124.png";
import general from "../../assets/images/download/gen-124.png";
import infectious from "../../assets/images/download/id-124.png";
import microbiology from "../../assets/images/download/micro-124.png";
import nail from "../../assets/images/download/pod-124.png";
import orthopedics from "../../assets/images/download/ortho-124.png";
import plastic from "../../assets/images/download/ps-124.png";
import primay from "../../assets/images/download/pc-124.png";
import pulmonary from "../../assets/images/download/pulm-124.png";
import rtl from "../../assets/images/download/rtl-124.png";
import salesform from "../../assets/images/download/files-124.png";
import urology from "../../assets/images/download//uro-124.png";
import womenhealth from "../../assets/images/download/gyne-124.png";
import workingwithhospital from "../../assets/images/download/hospitals-124.png";
import woundcare from "../../assets/images/download/wound-124.png";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth";
const page = () => {
  const [downloadAbleMaterial, setDownloadAbleMaterial] = useState([
    {
      name: "ABDLabs",
      img: abdlab,
      link: "abdlabs-sales-material",
    },
    {
      name: "COVID-19",
      img: covid,
      link: "covid-19-sales-material",
    },
    {
      name: "Dental/PerioDX",
      img: dental,
      link: "periodx-dentistry-sales-material",
    },
    {
      name: "ENT",
      img: ent,
      link: "ent-sales-material",
    },

    {
      name: "General Sales Material",
      img: general,
      link: "general-sales-material",
    },
    {
      name: "Infectious Disease",
      img: infectious,
      link: "id-infectious-disease-sales-material",
    },
    {
      name: "Microbiology",
      img: microbiology,
      link: "microbiology-sales-material",
    },
    {
      name: "Nail",
      img: nail,
      link: "nail-sales-material",
    },
    {
      name: "Orthopedics",
      img: orthopedics,
      link: "orthopedic-sales-material-2",
    },
    {
      name: "Plastic Surgery",
      img: plastic,
      link: "plastic-surgery-sales-material/",
    },
    {
      name: "Primary Care",
      img: primay,
      link: "primary-care-sales-material/",
    },
    {
      name: "Pulmonary/AFB",
      img: pulmonary,
      link: "pulmonary-afb-sales-material/",
    },
    {
      name: "RTL",
      img: rtl,
      link: "rtl-sales-material/",
    },
    {
      name: "Sales Forms",
      img: salesform,
      link: "sales-forms/",
    },
    {
      name: "Urology",
      img: urology,
      link: "urology-sales-material/",
    },
    {
      name: "Women's Health",
      img: womenhealth,
      link: "womens-health-sales-material/",
    },
    {
      name: "Working with Hospitals Material",
      img: workingwithhospital,
      link: "working-with-hospitals-material/",
    },
    {
      name: "Wound Care",
      img: woundcare,
      link: "wound-care-sales-material/",
    },
  ]);
  return (
    <>
      <BreadCrum
        breadHeading="Downloadable Sales Material"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "Downloadable Sales Material",
            link: "/",
          },
        ]}
      />
      <section className={style.download_able_material}>
        <div className="container-xxl">
          <div className="row">
            <div className="col">
              <div className={style.download_able_material__wrapper}>
                {downloadAbleMaterial.map((elem, index) => {
                  return (
                    <DownloadAbleMaterialCart
                      item={elem}
                      key={index}
                      index={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);

"use client";
import React, { useState } from "react";
import styles from "./sale_resources.module.css";
import ent from "../../assets/images/specialty/ent-icon.jpg";
import SpecialtyCards from "@/components/specialtyCards/SpecialtyCards";
import ortho from "../../assets/images/specialty/orthopedic-icon.jpg";
import podiatry from "../../assets/images/specialty/podiatry-nail-4.jpg";
import urology from "../../assets/images/specialty/urology-icon.jpg";
import woundCare from "../../assets/images/specialty/wound-icon.jpg";
import withAuth from "@/utils/auth";
import BreadCrum from "@/components/breadCrum/BreadCrum";
const page = () => {
  const [specialCardDetail, setSpecialCardDetail] = useState([
    {
      specialimg: ent,
      specialHeading: "ENT",
      link: "ent-sales-resources",
    },
    {
      specialimg: ortho,
      specialHeading: "Orthopedic",
      link: "orthopedic-sales-resources",
    },
    {
      specialimg: podiatry,
      specialHeading: "Podiatry/Nail",
      link: "podiatrynail-sales-resources ",
    },
    {
      specialimg: urology,
      specialHeading: "Urology",
      link: "urology-sales-resources",
    },
    {
      specialimg: woundCare,
      specialHeading: "Wound Care",
      link: "wound-care-sales-resources",
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
            page: "sales Resources by Specialty",
          },
        ]}
      />
      <section className={styles.special_wrapper}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.speciality_heading}>
                <h2>Choose a Specialty</h2>
              </div>
            </div>
          </div>
          <div
            className={`row justify-content-between ${styles.special_card_row}`}
          >
            {specialCardDetail.map((e, idx) => {
              return (
                <div
                  className={`col-lg-2 col-md-3 col-sm-6 ${styles.columns}`}
                  key={idx}
                >
                  <SpecialtyCards
                    key={idx}
                    specialimg={e.specialimg.src}
                    specialHeading={e.specialHeading}
                    link={e.link}
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

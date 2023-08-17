"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import ComplianceAsideWidget from "@/components/complianceAsideWidget/ComplianceAsideWidget";
import React, { useState } from "react";
import style from "./compliance.module.css";
import withAuth from "@/utils/auth";
import Pagination from "@/components/pagination/Pagination";
import labCompany from "../../assets/images/microgenInsider/lab-company.png";
import drpleads from "../../assets/images/microgenInsider/doctorpleads.png";
import indicated from "../../assets/images/microgenInsider/tenindicted.png";
import business from "../../assets/images/microgenInsider/businessagreement.png";
import jail from "../../assets/images/microgenInsider/jail.png";
import MicrogendxInsiderComponent from "@/components/microgendxInsiderComponent/microgendxInsiderComponent";

const page = () => {
  const [micrognInsider, setMicrognInsider] = useState([
    {
      image: labCompany,
      heading:
        "Lab Company Owners Indicted for False Billing of Medically Unnecessary Tests",
      paragraph:
        "Case:  A north Texas federal grand jury indicted 10 people for a $300 million Medicare fraud scheme, including two physicians and the founders of three lab […]",
      comments: "3",
      readComment: "Read more",
      link: "lab-company-owners-indicted-for-false-billing-of-medically-unnecessary-tests/",
    },
    {
      image: drpleads,
      heading: "Doctor Pleads Guilty to Accepting Illegal Kickback Payments",
      paragraph:
        "It is illegal to pay or receive “kickbacks” in conjunction with federal health care insurance. Prohibitions against kickbacks are crucial to ensure that financial motives do […]",
      comments: "0",
      readComment: "Read more",
      link: "doctor-pleads-guilty-to-accepting-illegal-kickback-payments/",
    },
    {
      image: business,
      heading: "Business Associate Agreements 101",
      paragraph:
        "One of my offices told me I need to have a BAA (Business Associate Agreement) signed with them, what are they referring to and what should […]",
      comments: "0",
      readComment: "Read more",
      link: "business-associate-agreements-101/",
    },
    {
      image: indicated,
      heading:
        "Ten Indicted for Healthcare Kickbacks; Including Labs, Marketers and Physicians",
      paragraph:
        "Ten Indicted for Healthcare Kickbacks According to the indictment, the founders of several lab companies, including Unified Laboratory Services, Spectrum Diagnostic Laboratory, and Reliable Labs LLC, […]",
      comments: "0",
      readComment: "Read more",
      link: "ten-indicted-for-healthcare-kickbacks-including-labs-marketers-and-physicians/",
    },
    {
      image: jail,
      heading:
        "Laboratory Owner Sentenced to 82 Months in Prison for COVID-19 Kickback Scheme",
      paragraph:
        "A Florida owner of multiple diagnostic testing laboratories was sentenced today in the Southern District of Florida to 82 months in prison for a scheme to […]",
      comments: "0",
      readComment: "Read more",
      link: "laboratory-owner-sentenced-to-82-months-in-prison-for-covid-19-kickback-scheme/",
    },
  ]);
  return (
    <>
      <BreadCrum
        breadHeading="MicroGenDX Compliance Training"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "MicroGenDX Compliance Training",
            link: "/",
          },
        ]}
      />
      <section className={style.compliance_page}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <divs
                className={`${style.compliance__wrap__top} d-flex justify-content-between`}
              >
                <div className={`${style.compliance_content}`}>
                  <p>
                    Southwest Regionals PCR dba MicroGenDX has developed a
                    Compliance Program and Standards of Conduct designed to
                    demonstrate our ethical attitude and our emphasis on
                    compliance and to assure compliance with the conformity to
                    all applicable federal and state laws and regulations
                    governing the organization. This is meant for all employees
                    and representatives of MicroGenDX. This Compliance Program
                    and Standards of Conduct is a commitment to our clients as
                    well as a guidance for an ethical way of conducting
                    business, and serves as a values-based system for doing the
                    right thing.
                  </p>
                  <p>
                    Complying to the laws and regulations that govern our
                    activities is the responsibility of all of us. Dedication to
                    achieving full compliance with these laws and regulations,
                    as well as protecting the reputation of MicroGenDX is
                    something we strive to, and must continually bear in mind
                    and action.
                  </p>
                  <p>
                    As a provider of health care, much of what we do is
                    reimbursed through federal and state government programs
                    (such as Medicare and Medicaid). Also as a health care
                    provider, MicroGenDX operates in one of the highest
                    regulated industries, if not the highest. In recent years,
                    there has been significant concern about “fraud and abuse”
                    in healthcare. In light of this, the Office of Inspector
                    General (OIG) has been very clear in its efforts to reduce
                    such abuse and fraud in the healthcare system. As healthcare
                    providers,it is our responsibility to ensure we conduct our
                    business, on all levels, with extreme compliance.
                  </p>
                </div>
                <ComplianceAsideWidget />
              </divs>
            </div>
          </div>
          <div className={`row ${style.complaince_section}`}>
            <div className={`col-lg-12 ${style.border}`}>
              {micrognInsider.map((e, idx) => {
                return (
                  <div className={`row ${style.row_margin}`} key={idx}>
                    <MicrogendxInsiderComponent
                      popFunction={() => func(idx)}
                      items={e}
                      key={idx}
                    />
                  </div>
                );
              })}
              <div className="pagi_margin">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);

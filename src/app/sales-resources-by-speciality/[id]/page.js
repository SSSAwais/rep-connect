"use client";

import withAuth from "@/utils/auth";

const { default: BreadCrum } = require("@/components/breadCrum/BreadCrum");
import style from "../sale_resources.module.css";
import Link from "next/link";
const page = ({ params }) => {
  let { id } = params;
  console.log(id, "id is here baby");
  return (
    <>
      <BreadCrum
        breadHeading="id"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "id",
          },
        ]}
      />
      <section className={style.specialty_wrapper}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12">
              <div className={style.backward_button}>
                <Link href="/sales-resources-by-speciality">
                  <span>
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                  Back to Specialities
                </Link>
              </div>
            </div>
          </div>
          <div className={`row justify-content-center ${style.second_row}`}>
            <div className="col-lg-4 text-center">
              <div className={style.weclcome_note}>
                <h4>Welcome to MicroGenDX!</h4>
                <div className={style.boxx}></div>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className={style.weclcome_note}>
                <h4>The MicroGenDx Elevator Pitch</h4>
                <div className={style.boxx}></div>
              </div>
            </div>
          </div>
          <div className={`row justify-content-center ${style.third_row}`}>
            <div className="col-lg-4 text-center">
              <div className={style.weclcome_note2}>
                <h4>Addressing Podiatrists that Handle Wound Care</h4>
                <div className={style.boxx}></div>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className={style.weclcome_note2}>
                <h4>
                  Identifying the causative microbes of infections with Next-Gen
                  Sequencing- Andrew Pugliese MD
                </h4>
                <div className={style.boxx}></div>
              </div>
            </div>
          </div>
          <div className={`row justify-content-center ${style.third_row}`}>
            <div className="col-lg-4 text-center">
              <div className={style.weclcome_note2}>
                <h4>How to Collect a Wound Sample Swab Technique</h4>
                <div className={style.boxx}></div>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className={style.weclcome_note2}>
                <h4>How to Collect Wound Sample - Debridement</h4>
                <div className={style.boxx}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);

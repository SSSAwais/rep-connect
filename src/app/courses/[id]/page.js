"use client";
import Image from "next/image";
import styles from "../course.module.css";
import business from "../../../assets/images/microgendxuniversity/business-development.jpg";
import Link from "next/link";
import CourseContent from "@/components/courseContent/CourseContent";
import AbsImage from "@/components/absImage/AbsImage";
import { useState } from "react";
import MicrogenTutorialVideo from "@/components/microgenTutorialVideo/MicrogenTutorialVideo";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth";
 function page({ params }) {
  const [img, setImg] = useState([
    {
      image: business,
    },
  ]);
  let { id } = params;
  return (
    <>
      <BreadCrum
        breadHeading={id}
        pagess={[
          {
            page: "Home",
            link: "/",
          },

          {
            page: id,
            link: "/",
          },
        ]}
      />
      <section className={styles.course_wrapper}>
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              {img.map((e, idx) => {
                return <AbsImage image={e.image.src} key={idx} />;
              })}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.heading_course}>
                <h3>Course Content</h3>
                <div className={styles.expand_all}>
                  <button
                    data-bs-toggle="collapse"
                    data-bs-target=".accordion-collapse"
                    aria-expanded="false"
                    aria-controls="collapse"
                  >
                    {" "}
                    <span>
                      <i className="fa-solid fa-angle-down"></i>
                    </span>{" "}
                    Expand All
                  </button>
                </div>
              </div>
              <div className={styles.content_section_course}>
                <CourseContent />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <MicrogenTutorialVideo /> */}
    </>
  );
}
export default withAuth(page);
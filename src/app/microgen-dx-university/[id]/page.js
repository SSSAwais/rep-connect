"use client";
import UniversityCourse from "@/components/universityCourse/UniversityCourse";
import { useState } from "react";
import styles from "../university.module.css";
import withAuth from "@/utils/auth";
import BreadCrum from "@/components/breadCrum/BreadCrum";
// this is a client component 👈🏽
const page = ({ params }) => {
  let { id } = params;

  const [courseData, setCourseData] = useState([
    {
      courseTitle: "1. MicroGenDX Training Introduction",
      link: "courses/1-microgendx-training-introduction",
    },
    {
      courseTitle: "2. MicroGenDX Tutorial Videos",
      link: "courses/2-microgendx-tutorial-videos/",
    },
    {
      courseTitle: "3. Microbiology Key Concepts",
      link: "courses/3-microbiology-key-concepts/",
    },
    {
      courseTitle: "4. Technology",
      link: "courses/4-technology-key-concepts/",
    },
    {
      courseTitle: "5. Science of MicroGenDX – Sales Training 2.1",
      link: "courses/3-science-of-microgendx-sales-training-2-1/",
    },
    {
      courseTitle: "6. Understanding Clinical Papers",
      link: "courses/5-understanding-clinical-papers/",
    },
    {
      courseTitle: "7. Business Development",
      link: "courses/business-development/",
    },
  ]);
  return (
    <>
      <BreadCrum
        breadHeading="Home Study 101"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "Home Study 101",
          },
        ]}
      />
      <section className={styles.course_wrapper_section}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.list_wrapper}>
                {courseData.map((e, idx) => {
                  return (
                    <>
                      <UniversityCourse key={idx} item={e} />
                    </>
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

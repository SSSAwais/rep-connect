"use client";
import withAuth from "@/utils/auth"
import React from "react";
import Image from "next/image";
import styles from "./course.module.css";
import img01 from "../../assets/images/Courses/minute01.jpg";
import training from "../../assets/images/Courses/classroom-training.jpg";
import salesMaterial from "../../assets/images/Courses/Sales-material.jpg";
import supportVideos from "../../assets/images/Courses/sales-support-videos.jpg";
import processVideos from "../../assets/images/Courses/process-videos.jpg";
import business_support from "../../assets/images/Courses/business-development.jpg";
import clinical_paper from "../../assets/images/Courses/uderstanding-clinical-papers.jpg";
import science_microgen from "../../assets/images/Courses/science-of-microgendx.jpg";
import tutorial from "../../assets/images/Courses/tutorial-videos.jpg";
import training_intro from "../../assets/images/Courses/training-introduction.jpg";
import Link from "next/link";
import BreadCrum from "@/components/breadCrum/BreadCrum";

const page = () => {
  return (
    <>
      <BreadCrum
        breadHeading="Courses"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "Courses",
            link: "/",
          },
        ]}
      />

      <div className="container-xxl">
        <section className={styles.course_section}>
          <div className={styles.technologies}>
            <div className={styles.tech_heading}>
              <h2>4. Technology</h2>
            </div>
            <div className={styles.reading_area}>
              {" "}
              <i className={`fa-solid fa-file-lines ${styles.book}`}></i>{" "}
              <Link href={`/courses/4-Technology`}> ReadMore </Link>{" "}
            </div>
          </div>
          <div className={styles.technologies}>
            <div className={styles.tech_heading}>
              <h2>3. Microbiology Key Concepts</h2>
            </div>
            <div className={styles.reading_area}>
              {" "}
              <i className={`fa-solid fa-file-lines ${styles.book}`}></i>{" "}
              <Link href={`/courses/3-Microbiology-Key-Concepts`}>
                {" "}
                ReadMore{" "}
              </Link>{" "}
            </div>
          </div>
          <div className={styles.technologies}>
            <div className={styles.img_course}>
              <div className={styles.image_area}>
                <div className={styles.overlay}></div>
                <div className={styles.icon_area}>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-link"></i>
                  </div>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                <Image width={200} src={img01} alt="Img" />
              </div>
              <div className={styles.course_details}>
                <div className={styles.tech_heading01}>
                  <h2>5. MicroGenDX Minute</h2>
                </div>
                <div className={styles.reading_area01}>
                  {" "}
                  <i
                    className={`fa-solid fa-file-lines ${styles.book}`}
                  ></i>{" "}
                  <Link href={`/courses/5-MicroGenDX-Minute`}> ReadMore </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.technologies}>
            <div className={styles.img_course}>
              <div className={styles.image_area}>
                <div className={styles.overlay}></div>
                <div className={styles.icon_area}>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-link"></i>
                  </div>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                <Image width={200} src={training} alt="Img" />
              </div>
              <div className={styles.course_details}>
                <div className={styles.tech_heading01}>
                  <h2>1. Classroom Training</h2>
                </div>
                <div className={styles.heading_para}>
                  {" "}
                  This is the outline for on-site training.{" "}
                </div>
                <div className={styles.reading_area01}>
                  {" "}
                  <i
                    className={`fa-solid fa-file-lines ${styles.book}`}
                  ></i>{" "}
                  <Link href={`/courses/1-Classroom-Training`}>ReadMore</Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.technologies}>
            <div className={styles.img_course}>
              <div className={styles.image_area}>
                <div className={styles.overlay}></div>
                <div className={styles.icon_area}>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-link"></i>
                  </div>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                <Image width={200} src={salesMaterial} alt="Img" />
              </div>
              <div className={styles.course_details}>
                <div className={styles.tech_heading01}>
                  <h2>4. Sales Material</h2>
                </div>
                <div className={styles.heading_para}>
                  {" "}
                  This course is designed to help familiarize you with
                  MicroGenDX sales materials.{" "}
                </div>
                <div className={styles.reading_area01}>
                  {" "}
                  <i className={`fa-solid fa-file-lines ${styles.book}`}></i>
                  <Link href={`/courses/4-Sales-Material`}>
                    {" "}
                    ReadMore{" "}
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.technologies}>
            <div className={styles.img_course}>
              <div className={styles.image_area}>
                <div className={styles.overlay}></div>
                <div className={styles.icon_area}>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-link"></i>
                  </div>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                <Image width={200} src={supportVideos} alt="Img" />
              </div>
              <div className={styles.course_details}>
                <div className={styles.tech_heading01}>
                  <h2>3. Sales Support Videos</h2>
                </div>
                <div className={styles.heading_para}>
                  {" "}
                  This course is designed to help give you critical information
                  needing in the field to answer any questions you may receive.{" "}
                </div>
                <div className={styles.reading_area01}>
                  {" "}
                  <i
                    className={`fa-solid fa-file-lines ${styles.book}`}
                  ></i>{" "}
                  <Link href={`/courses/3-Sales-Support-Videos`}>
                    {" "}
                    ReadMore{" "}
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.technologies}>
            <div className={styles.img_course}>
              <div className={styles.image_area}>
                <div className={styles.overlay}></div>
                <div className={styles.icon_area}>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-link"></i>
                  </div>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                <Image width={200} src={processVideos} alt="Img" />
              </div>
              <div className={styles.course_details}>
                <div className={styles.tech_heading01}>
                  <h2>2. Process Videos</h2>
                </div>
                <div className={styles.heading_para}>
                  This course is designed to help you understand the MicroGenDX
                  Process for each test specialty. At the end of this course you
                  will understand: How to […]
                </div>
                <div className={styles.reading_area01}>
                  {" "}
                  <i
                    className={`fa-solid fa-file-lines ${styles.book}`}
                  ></i>{" "}
                  <Link href={`/courses/2-Process-Videos`}> ReadMore </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.technologies}>
            <div className={styles.img_course}>
              <div className={styles.image_area}>
                <div className={styles.overlay}></div>
                <div className={styles.icon_area}>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-link"></i>
                  </div>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                <Image width={200} src={business_support} alt="Img" />
              </div>
              <div className={styles.course_details}>
                <div className={styles.tech_heading01}>
                  <h2>7. Business Development</h2>
                </div>
                <div className={styles.heading_para}>
                  This course is designed to help you develop a solid business
                  plan to be successful as a MicroGenDX Sales Rep and understand
                  market competition and insurance […]
                </div>
                <div className={styles.reading_area01}>
                  {" "}
                  <i
                    className={`fa-solid fa-file-lines ${styles.book}`}
                  ></i>{" "}
                  <Link href={`/courses/7-Business-Development`}>
                    {" "}
                    ReadMore{" "}
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.technologies}>
            <div className={styles.img_course}>
              <div className={styles.image_area}>
                <div className={styles.overlay}></div>
                <div className={styles.icon_area}>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-link"></i>
                  </div>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                <Image width={200} src={clinical_paper} alt="Img" />
              </div>
              <div className={styles.course_details}>
                <div className={styles.tech_heading01}>
                  <h2>6. Understanding Clinical Papers</h2>
                </div>
                <div className={styles.heading_para}>
                  This course is designed to help you break down the key
                  concepts of reading medical journals. At the end of this
                  course, you should be able […]
                </div>
                <div className={styles.reading_area01}>
                  {" "}
                  <i
                    className={`fa-solid fa-file-lines ${styles.book}`}
                  ></i>{" "}
                  <Link href={`/courses/6-Understanding-Clinical-Papers`}>
                    {" "}
                    ReadMore{" "}
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.technologies}>
            <div className={styles.img_course}>
              <div className={styles.image_area}>
                <div className={styles.overlay}></div>
                <div className={styles.icon_area}>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-link"></i>
                  </div>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                <Image width={200} src={science_microgen} alt="Img" />
              </div>
              <div className={styles.course_details}>
                <div className={styles.tech_heading01}>
                  <h2>5. Science of MicroGenDX – Sales Training 2.1</h2>
                </div>
                <div className={styles.heading_para}>
                  Video sales training to gain a better understanding of the
                  role bacteria and biofilms play in infections.
                </div>
                <div className={styles.reading_area01}>
                  {" "}
                  <i
                    className={`fa-solid fa-file-lines ${styles.book}`}
                  ></i>{" "}
                  <Link
                    href={`/courses/5-Science-of-MicroGenDX–Sales-Training-2.1`}
                  >
                    {" "}
                    ReadMore{" "}
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.technologies}>
            <div className={styles.img_course}>
              <div className={styles.image_area}>
                <div className={styles.overlay}></div>
                <div className={styles.icon_area}>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-link"></i>
                  </div>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                <Image width={200} src={tutorial} alt="Img" />
              </div>
              {/* <div>
              </div> */}
              <div className={styles.course_details}>
                <div className={styles.tech_heading01}>
                  <h2>2. MicroGenDX Tutorial Videos</h2>
                </div>
                <div className={styles.heading_para}>
                  These videos will guide you through various MicroGenDX tasks.
                </div>
                <div className={styles.reading_area01}>
                  {" "}
                  <i
                    className={`fa-solid fa-file-lines ${styles.book}`}
                  ></i>{" "}
                  <Link href={`/courses/2-MicroGenDX-Tutorial-Videos`}>
                    {" "}
                    ReadMore{" "}
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.technologies}>
            <div className={styles.img_course}>
              <div className={styles.image_area}>
                <div className={styles.overlay}></div>
                <div className={styles.icon_area}>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-link"></i>
                  </div>
                  <div className={styles.icon}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
                <Image width={200} src={training_intro} alt="Img" />
              </div>
              <div className={styles.course_details}>
                <div className={styles.tech_heading01}>
                  <h2>1. MicroGenDX Training Introduction</h2>
                </div>
                <div className={styles.heading_para}>
                  Training Introduction by Rick Martin
                </div>
                <div className={styles.reading_area01}>
                  {" "}
                  <i
                    className={`fa-solid fa-file-lines ${styles.book}`}
                  ></i>{" "}
                  <Link href={`/courses/1-MicroGenDX-Training-Introduction`}>
                    {" "}
                    ReadMore{" "}
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default withAuth(page);

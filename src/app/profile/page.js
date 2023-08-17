"use client";
import { useState, useEffect, Suspense } from "react";
import withAuth from "@/utils/auth";
import Image from "next/image";
import Logo from "../../../src/assets/images/Profile/profile.png";
import Member from "../../../src/assets/images/Profile/member.png";
import styles from "./profile.module.css";
import Accordoin from "@/components/accordoin/accordoin";
import NewAccordion from "@/components/accordoin/newAccordion";
import CourseContent from "@/components/courseContent/CourseContent";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loading from "./loading";
function Profile() {
  const router = useRouter();
  const [expand, setExpand] = useState(true);
  const [editDetail, setEditDetail] = useState([]);
  const expandAll = (e) => {
    e.preventDefault();
    setExpand(!expand);
    var button = document.querySelectorAll(".ac-btn");
    button.forEach(function (btn) {
      if (!btn.classList.contains("collapsed")) {
        btn.classList.add("collapsed");
      } else {
        btn.classList.remove("collapsed");
      }
    });

    var accordions = document.querySelectorAll(".accordion-collapse02");
    accordions.forEach(function (accordion) {
      if (accordion.classList.contains("show")) {
        accordion.classList.remove("show");
      } else {
        accordion.classList.add("show");
      }
    });
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const header = {
      "x-auth-token": token,
      "Content-Type": "application/json",
    };

    axios
      .get(`${process.env.NEXT_PUBLIC_URL}api/user/getSingleUser`, {
        headers: header,
      })
      .then((resp) => setEditDetail(resp.data.data[0]))
      .catch((err) => console.log(err));
  }, []);

  const _handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  return (
    <div>
      <BreadCrum
        breadHeading="My Profile"
        pageName=" Home "
        subPage="My Profile"
      />
      <div className={styles.dummyDiv}></div>
      <Suspense fallback={<Loading />}>
        <section>
          <div className="container-xxl">
            <div className={styles.main}>
              <div className={styles.logorow}>
                <div>
                  <Image
                    src={Logo}
                    height={80}
                    className={styles.logoImg}
                    alt="logo"
                  />
                </div>
                <div>
                  <span>
                    You Currently Have:{" "}
                    <span className={styles.bold}>
                      [mycred_my_balance wrapper=0 balance_el=""] Points
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.main}>
              <div
                className={`row ${styles.row01} ${styles.custom__accd__shob}`}
              >
                <div className="col-lg-7 col-md-6">
                  <div className="accordion__sho">
                    <div
                      className="accordion"
                      id="accordionPanelsStayOpenExample"
                    >
                      <div className="accordion-item">
                        <div
                          className="accordion-header"
                          id="panelsStayOpen-headingOne"
                        >
                          <button
                            className="accordion-button accord_btn"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne03"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                          >
                            Points History
                          </button>
                        </div>
                        <div
                          id="panelsStayOpen-collapseOne03"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingOne"
                        >
                          <div className="accordion-body">
                            <p className={styles.acbody_content_para}>
                              Recent Awarded Points for Activity:
                            </p>
                            <p>
                              [mycred_history user_id="current" pagination=2
                              show_nav=0]
                            </p>
                            <span className={styles.acbody_content_link}>
                              View Full History
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.login}>
                    <div className={styles.loginArea}>
                      <span className={styles.btnspan}>
                        <button
                          className={styles.logout}
                          onClick={_handleLogout}
                        >
                          logout
                        </button>
                      </span>
                      <div className={styles.loginAreaDetails}>
                        <div>
                          <Image
                            height={80}
                            className={styles.logImg}
                            src={Member}
                            alt="logo"
                          />
                        </div>
                        <div>
                          <p className={styles.para}>{editDetail.username}</p>
                        </div>
                        <div>
                          <button className={styles.editprofile}>
                            Edit Profile
                          </button>
                        </div>
                        <div className={styles.email}>
                          <Link href="mailto:seositesoft5@gmail.com">
                            <i className="fa-regular fa-envelope"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className={styles.analytics}>
                      <div className={styles.analytic}>0 CONNECTIONS</div>
                      <div className={styles.analytic}>0 FOLLOWING</div>
                      <div className={styles.analytic}>0 FOLLOWERS</div>
                    </div>
                    <div className={styles.profile}>
                      <div className="accordion__sho01">
                        <div
                          className="accordion"
                          id="accordionPanelsStayOpenExample"
                        >
                          <div className={`accordion-item ${styles.ac_item}`}>
                            <h2
                              className="accordion-header"
                              id="panelsStayOpen-headingOne"
                            >
                              <button
                                className={`accordion-button sho_ ${styles.accordion_btn}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne02"
                                aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne"
                              >
                                Profile Details
                              </button>
                            </h2>
                            <div
                              id="panelsStayOpen-collapseOne02"
                              className="accordion-collapse collapse"
                              aria-labelledby="panelsStayOpen-headingOne"
                            >
                              <div className="accordion-body">
                                <div className="row pb-3">
                                  <div className="col-4">
                                    <div className={styles.profileDet}>
                                      Profile Display Name
                                    </div>
                                  </div>
                                  <div className="col-8">
                                    <div className={styles.dpname}>
                                      {editDetail.username}
                                    </div>
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-4">
                                    <div className="row">
                                      <div className={styles.profile_pic}>
                                        <div className="col-2">
                                          <div className={styles.iconContainer}>
                                            <i
                                              className={`fa-solid fa-camera ${styles.proicon}`}
                                            ></i>
                                          </div>
                                        </div>
                                        <div className="col-10">
                                          <div className={styles.profileDet}>
                                            Profile Picture
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-8">
                                    <div className={styles.userProfileimage}>
                                      <Image
                                        src={editDetail.profile_picture}
                                        width={80}
                                        height={80}
                                        alt="user image"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion__sho01">
                        <div
                          className="accordion"
                          id="accordionPanelsStayOpenExample"
                        >
                          <div className={`accordion-item ${styles.ac_item}`}>
                            <h2
                              className="accordion-header"
                              id="panelsStayOpen-headingOne"
                            >
                              <button
                                className={`accordion-button sho_ ${styles.accordion_btn}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne01"
                                aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne"
                              >
                                Account Details
                              </button>
                            </h2>
                            <div
                              id="panelsStayOpen-collapseOne01"
                              className="accordion-collapse collapse"
                              aria-labelledby="panelsStayOpen-headingOne"
                            >
                              <div className="accordion-body">
                                <div>
                                  <div className={styles.profile_img}>
                                    <div className={styles.iconContainer}>
                                      <i
                                        className={`fa-regular fa-envelope ${styles.proicon}`}
                                      ></i>
                                    </div>
                                    <div className={styles.profileDet}>
                                      E-mail Address
                                    </div>
                                    <div className={styles.userProfilemail}>
                                      {editDetail.email}
                                    </div>
                                    <span className={styles.envelopIcon}>
                                      <i
                                        className={`fa-regular fa-envelope`}
                                      ></i>
                                    </span>
                                  </div>
                                  <hr />
                                  <button className={styles.verify}>
                                    Request Verification
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6">
                  <div className={styles.tracker}>
                    <div>
                      <h2 className={styles.tracker_heading}>
                        {" "}
                        Course Tracker{" "}
                      </h2>
                    </div>
                    <hr />
                    <div className={styles.tracker_heading}>
                      <div className={styles.scores}>
                        <div> 11 </div>
                        <div> 1 </div>
                        <div> 0 </div>
                      </div>
                    </div>
                    <div className={styles.headings}>
                      <div> Courses </div>
                      <div> Completed </div>
                      <div> Certificated </div>
                    </div>
                    <div className={styles.input_container}>
                      <input placeholder="search" className={styles.input} />
                      <i
                        className={`fa-solid fa-magnifying-glass ${styles.search_icon}`}
                      ></i>
                    </div>
                    <div className={styles.section}>
                      <div className={styles.courses}>
                        <h3>Your Courses</h3>
                      </div>
                      <div className={styles.expand_all}>
                        <button
                          onClick={expandAll}
                          id="collapse-all-button"
                          data-bs-toggle="collapse"
                          data-bs-target=".shoaib"
                          aria-expanded="false"
                          aria-controls="collapse"
                        >
                          {expand ? (
                            <span>
                              <i className="fa-solid fa-angle-down"></i>
                            </span>
                          ) : (
                            <span>
                              <i className="fa-solid fa-angle-up"></i>
                            </span>
                          )}
                          {expand ? "Expand All" : "Collapse All"}
                        </button>
                      </div>
                    </div>
                    {/* <CourseContent/> */}

                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className={`accordion-button ac-btn  ${styles.acc_btn}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne-01"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <div className={styles.circle_select}></div>
                            <div> 1. Classroom Traning </div>
                          </button>
                        </h2>
                        <div
                          id="collapseOne-01"
                          className="accordion-collapse02 collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className={`accordion-body ${styles.acc_body}`}>
                            <div className={styles.accord_body}>
                              <div className={styles.accord_body_alignment}>
                                <div>
                                  <div>Course</div>
                                  <div>Progress</div>
                                </div>
                                <div className={styles.progress}>
                                  <div>0%</div>
                                  <div>Complete</div>
                                  <div className={styles.steps}>
                                    <small>0/2 Steps</small>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.file}>
                                <progress
                                  id="file"
                                  value="0"
                                  max="9"
                                ></progress>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className={`accordion-button ac-btn ${styles.acc_btn}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne-02"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <div className={styles.markTick}>
                              <i className="fa-solid fa-check"></i>{" "}
                            </div>
                            <div className={styles.markup}>
                              <div> 1. MicrogenDX Traning Introduction </div>
                              <div>
                                <span className={styles.statusMark}>
                                  complete
                                </span>
                              </div>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseOne-02"
                          className="accordion-collapse02 collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className={`accordion-body ${styles.acc_body}`}>
                            <div className={styles.accord_body}>
                              <div className={styles.accord_body_alignment}>
                                <div>
                                  <div>Course</div>
                                  <div>Progress</div>
                                </div>
                                <div className={styles.progress}>
                                  <div>0%</div>
                                  <div>Complete</div>
                                  <div className={styles.steps}>
                                    <small>1/1 Steps</small>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.file}>
                                <progress
                                  id="file"
                                  value="1"
                                  max="1"
                                ></progress>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className={`accordion-button ac-btn ${styles.acc_btn}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne03"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <div className={styles.circle_inprogress}> </div>
                            <div className={styles.inProgressMain}>
                              <div> 2. Process Videos </div>
                              <div>
                                <span className={styles.statusinprogress}>
                                  in progress
                                </span>
                              </div>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseOne03"
                          className="accordion-collapse02 collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className={`accordion-body ${styles.acc_body}`}>
                            <div className={styles.accord_body}>
                              <div className={styles.accord_body_alignment}>
                                <div>
                                  <div>Course</div>
                                  <div>Progress</div>
                                </div>
                                <div className={styles.progress}>
                                  <div>5%</div>
                                  <div>Complete</div>
                                  <div className={styles.steps}>
                                    <small>1/17 Steps</small>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.file}>
                                <progress
                                  id="file"
                                  value="1"
                                  max="17"
                                ></progress>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className={`accordion-button ${styles.acc_btn} ac-btn`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne04"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <div className={styles.circle_select}></div>{" "}
                            <div> 3. Microbiology Key Concepts </div>
                          </button>
                        </h2>
                        <div
                          id="collapseOne04"
                          className="accordion-collapse02 collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className={`accordion-body ${styles.acc_body}`}>
                            <div className={styles.accord_body}>
                              <div className={styles.accord_body_alignment}>
                                <div>
                                  <div>Course</div>
                                  <div>Progress</div>
                                </div>
                                <div className={styles.progress}>
                                  <div>0%</div>
                                  <div>Complete</div>
                                  <div className={styles.steps}>
                                    <small>0/9 Steps</small>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.file}>
                                <progress
                                  id="file"
                                  value="0"
                                  max="9"
                                ></progress>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className={`accordion-button ac-btn ${styles.acc_btn}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne05"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <div className={styles.circle_select}></div>{" "}
                            <div> 3. Sales Report Videos </div>
                          </button>
                        </h2>
                        <div
                          id="collapseOne05"
                          className="accordion-collapse02 collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className={`accordion-body ${styles.acc_body}`}>
                            <div className={styles.accord_body}>
                              <div className={styles.accord_body_alignment}>
                                <div>
                                  <div>Course</div>
                                  <div>Progress</div>
                                </div>
                                <div className={styles.progress}>
                                  <div>0%</div>
                                  <div>Complete</div>
                                  <div className={styles.steps}>
                                    <small>0/3 Steps</small>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.file}>
                                <progress
                                  id="file"
                                  value="0"
                                  max="3"
                                ></progress>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className={`accordion-button ac-btn ${styles.acc_btn}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne06"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <div className={styles.circle_select}></div>{" "}
                            <div> 4. Sales Material </div>
                          </button>
                        </h2>
                        <div
                          id="collapseOne06"
                          className="accordion-collapse02 collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className={`accordion-body ${styles.acc_body}`}>
                            <div className={styles.accord_body}>
                              <div className={styles.accord_body_alignment}>
                                <div>
                                  <div>Course</div>
                                  <div>Progress</div>
                                </div>
                                <div className={styles.progress}>
                                  <div>0%</div>
                                  <div>Complete</div>
                                  <div className={styles.steps}>
                                    <small>0/5 Steps</small>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.file}>
                                <progress
                                  id="file"
                                  value="0"
                                  max="5"
                                ></progress>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className={`accordion-button ac-btn ${styles.acc_btn}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne07"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <div className={styles.circle_select}></div>
                            <div> 4. Technology </div>
                          </button>
                        </h2>
                        <div
                          id="collapseOne07"
                          className="accordion-collapse02 collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className={`accordion-body ${styles.acc_body}`}>
                            <div className={styles.accord_body}>
                              <div className={styles.accord_body_alignment}>
                                <div>
                                  <div>Course</div>
                                  <div>Progress</div>
                                </div>
                                <div className={styles.progress}>
                                  <div>0%</div>
                                  <div>Complete</div>
                                  <div className={styles.steps}>
                                    <small>0/8 Steps</small>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.file}>
                                <progress
                                  id="file"
                                  value="0"
                                  max="8"
                                ></progress>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className={`accordion-button ac-btn ${styles.acc_btn}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne08"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <div className={styles.circle_select}></div>{" "}
                            <div> 5. MicroGenDX Minute </div>
                          </button>
                        </h2>
                        <div
                          id="collapseOne08"
                          className="accordion-collapse02 collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className={`accordion-body ${styles.acc_body}`}>
                            <div className={styles.accord_body}>
                              <div className={styles.accord_body_alignment}>
                                <div>
                                  <div>Course</div>
                                  <div>Progress</div>
                                </div>
                                <div className={styles.progress}>
                                  <div>0%</div>
                                  <div>Complete</div>
                                  <div className={styles.steps}>
                                    <small>0/4 Steps</small>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.file}>
                                <progress
                                  id="file"
                                  value="0"
                                  max="4"
                                ></progress>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className={`accordion-button ac-btn ${styles.acc_btn}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne09"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <div className={styles.circle_select}></div>{" "}
                            <div>
                              5. Science of MicroGenDX - Sales Training 2.1{" "}
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseOne09"
                          className="accordion-collapse02 collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className={`accordion-body ${styles.acc_body}`}>
                            <div className={styles.accord_body}>
                              <div className={styles.accord_body_alignment}>
                                <div>
                                  <div>Course</div>
                                  <div>Progress</div>
                                </div>
                                <div className={styles.progress}>
                                  <div>0%</div>
                                  <div>Complete</div>
                                  <div className={styles.steps}>
                                    <small>0/51 Steps</small>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.file}>
                                <progress
                                  id="file"
                                  value="0"
                                  max="51"
                                ></progress>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className={`accordion-button ac-btn ${styles.acc_btn}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne10"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <div className={styles.circle_select}></div>{" "}
                            <div> 6. Understanding Clinical Papers </div>
                          </button>
                        </h2>
                        <div
                          id="collapseOne10"
                          className="accordion-collapse02 collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className={`accordion-body ${styles.acc_body}`}>
                            <div className={styles.accord_body}>
                              <div className={styles.accord_body_alignment}>
                                <div>
                                  <div>Course</div>
                                  <div>Progress</div>
                                </div>
                                <div className={styles.progress}>
                                  <div>0%</div>
                                  <div>Complete</div>
                                  <div className={styles.steps}>
                                    <small>0/3 Steps</small>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.file}>
                                <progress
                                  id="file"
                                  value="0"
                                  max="3"
                                ></progress>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className={`accordion-button ac-btn ${styles.acc_btn}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne11"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <div className={styles.circle_select}></div>{" "}
                            <div> 7. Business Development </div>
                          </button>
                        </h2>
                        <div
                          id="collapseOne11"
                          className="accordion-collapse02 collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className={`accordion-body ${styles.acc_body}`}>
                            <div className={styles.accord_body}>
                              <div className={styles.accord_body_alignment}>
                                <div>
                                  <div>Course</div>
                                  <div>Progress</div>
                                </div>
                                <div className={styles.progress}>
                                  <div>0%</div>
                                  <div>Complete</div>
                                  <div className={styles.steps}>
                                    <small>0/6 Steps</small>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.file}>
                                <progress id="file" value="0" max="6">
                                  32%
                                </progress>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </div>
  );
}

export default withAuth(Profile);

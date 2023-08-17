"use client";

import React, { useState } from "react";
import AbsImage from "../absImage/AbsImage";
import "./MicrogenTutorialVideo.css";
import tutVideo from "../../assets/images/microgendxuniversity/tutorial-videos.jpg";
const MicrogenTutorialVideo = () => {
  const [tutImage, setTutImage] = useState([
    {
      image: tutVideo,
    },
  ]);
  return (
    <>
      <section className="tutorial_wrapper">
        <div className="container-xxl">
          <div className="row justify-content-center tutorial_row">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <div className="tutorial_image">
                {tutImage.map((e, idx) => {
                  return <AbsImage image={e.image.src} key={idx} />;
                })}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="status_getStarted">
                <div className="current_status">
                  <h6>Current Status </h6>
                  <div className="enrolled_">
                    <p
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Enroll in this course to get access"
                    >
                      Not Enrolled
                    </p>
                  </div>
                </div>
                <div className="get_started">
                  <h6>Get Started</h6>
                  <div className="button_course">
                    <button>Take this Course</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="video_guide">
                <p>
                  These videos will guide you through various MicroGenDX tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicrogenTutorialVideo;

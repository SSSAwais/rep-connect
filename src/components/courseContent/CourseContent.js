import Link from "next/link"
import React, { useState } from "react"
import "./CourseContent.css"
const CourseContent = () => {
  const [toogle, settoogle] = useState(false)
  const _handleToogle = () => {
    settoogle(!toogle)
  }
  return (
    <>
      <div className="course_content_wrapper">
        <div className="content_expand">
          <div className="accordion" id="accordianExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  onClick={_handleToogle}
                >
                  <Link href="#">
                    <div className="circle_select"></div>
                    <div className="course_data">
                      <p>key Concepts</p>
                      <span>6 Topics</span>
                    </div>
                  </Link>
                  <div className="expand_collapse">
                    {toogle ? (
                      <>
                        <span className="icons_angle"></span>{" "}
                        <span className="collapsingss"> Expand</span>
                      </>
                    ) : (
                      <>
                        <span className="icons_angle2"></span>{" "}
                        <span className="expanding"> Collpase</span>{" "}
                      </>
                    )}
                  </div>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="detail_section_wrapper">
                    <div className="content_header">
                      <div className="left_content_header">
                        <h5>
                          <span>
                            <i className="fa-solid fa-sheet-plastic"></i>
                          </span>
                          Lesson Content
                        </h5>
                      </div>
                      <div className="list_complete">
                        <p className="how_much_complete">0 % complete</p>
                        <p className="steps">0/6 steps </p>
                      </div>
                    </div>
                    <div className="list_of_content">
                      <div className="list">
                        <Link href="#">
                          <div className="circle"></div>
                          <p className="discription">NGS Introduction</p>
                        </Link>
                      </div>
                      <div className="list">
                        <Link href="#">
                          <div className="circle"></div>
                          <p className="discription">MicroGenDX NGS</p>
                        </Link>
                      </div>
                      <div className="list">
                        <Link href="#">
                          <div className="circle"></div>
                          <p className="discription">PCR Introduction</p>
                        </Link>
                      </div>
                      <div className="list">
                        <Link href="#">
                          <div className="circle"></div>
                          <p className="discription">PCR vs NGS Comparison</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="simple_list">
          <div className="list">
            <Link href={`/courses/4-technology-key-concepts/technology-ppt`}>
              <div className="circle"></div>
              <p className="discription">Techonology PPT</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseContent

import React, { useEffect, useState } from "react";
import "./ViewProfile.css";
import imagePrev from "../../assets/images/register/download.png";
import Image from "next/image";
import axios from "axios";
import Spinner from "../spinner/Spinner";
const ViewProfile = () => {
  const [viewProfile, setViewProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("token"));
    const header = {
      "x-auth-token": token,
      "Content-Type": "application/json",
    };
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}api/user/getSingleUser`, {
        headers: header,
      })
      .then((resp) => {
        setViewProfile(resp.data.data[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="row second_row">
            <div className="col-lg-12 p-0">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Profile Details
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="row align-items-center userName_section margin_area">
                        <div className="col-lg-5 col-md-4 col-sm-12">
                          <div className="profile_view_name only_pad">
                            <h6>Profile Display Name</h6>
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-8 col-sm-12 name_view_section">
                          <p>{viewProfile.username}</p>
                        </div>
                      </div>
                      <div className="row main_icons_row">
                        <div className="col-lg-5 col-md-4 col-sm-12">
                          <div className="profile_view_name d-flex align-items-center">
                            <span className="iconss">
                              <i className="fa-solid fa-camera"></i>
                            </span>
                            <h6>profile Picture</h6>
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-8 col-sm-12">
                          <div className="image_preview">
                            <Image
                              src={viewProfile.profile_picture}
                              alt="image"
                              width="64"
                              height="64"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row third_row">
            <div className="col-lg-12 p-0">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button third_row_button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Account Details
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="row align-items-center margin_area">
                        <div className="col-lg-5 col-md-4 col-sm-12">
                          <div className="profile_view_name only_pad">
                            <h6>Mobile Number</h6>
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-8 col-sm-12 name_view_section">
                          <p>{viewProfile.mobile}</p>
                        </div>
                      </div>
                      <div className="row main_icons_row lst_tow align-items-center">
                        <div className="col-lg-5 col-md-4 col-sm-12">
                          <div className="profile_view_name d-flex align-items-center">
                            <span className="iconss">
                              <i className="fa-regular fa-envelope-open"></i>
                            </span>
                            <h6>E-mail Address</h6>
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-8 col-sm-12 name_view_section">
                          <p>{viewProfile.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="requst___">Request Verification</button>
        </>
      )}
    </>
  );
};

export default ViewProfile;

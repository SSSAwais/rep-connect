"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Member from "../../../assets/images/Profile/member.png";
import styles from "./editprofile.module.css";
import help from "../../../assets/images/Profile/help.png";
import axios from "axios";
import WebCamera from "@/components/webCam/WebCam";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth";
import { CountyList } from "@/data/countylist/CountyList";
import Link from "next/link";
import ViewProfile from "@/components/viewProfile/ViewProfile";
import Spinner from "@/components/spinner/Spinner";
import { useRouter } from "next/navigation";
const EditProfile = () => {
  const router = useRouter();
  const [getImage, setGetImage] = useState("");
  const [base64Image, setBase64Image] = useState("");
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState([]);
  const [changeIcon, setChangeIcon] = useState([false, false, false]);
  // const [images, setImages] = useState([]);
  const [active, setActive] = useState(false);
  const [images, setImages] = useState(null);
  const [editProfile, setEditProfile] = useState(true);
  const _handleChangeInputs = (e) => {
    setActive(!active);
    setTimeout(() => {
      setActive(false);
    }, 3000);
  };

  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };
  // const [changeClass, setChangeClass] = useState([false, false, false]);
  const newArray = [false, false, false];

  const handleIcon = (value) => {
    const newArray = [...changeIcon];
    for (let i = 0; i < newArray.length; i++) {
      if (i === value) {
        newArray[i] = !newArray[i];
      } else {
        newArray[i] = false;
      }
    }
    setChangeIcon(newArray);
  };
  const handleChange = (e) => {
    setEntries({
      ...entries,
      [e.target.name]: e.target.value,
    });
  };
  const [userToken, setUserToken] = useState("");
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
        setEntries(resp.data.data[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [userToken]);
  const [isRendered, setIsRendered] = useState(false);
  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };
      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
      }
      return stateObj;
    });
  };
  const handleProfileSubmit = (e) => {
    e.preventDefault();

    const userToken = JSON.parse(localStorage.getItem("token"));
    const data = {
      first_name: entries.first_name,
      last_name: entries.last_name,
      bioGraphy: entries.bioGraphy,
      gender: entries.gender,
      country: entries.country,
      mobile: entries.mobile,
      email: entries.email,
      social_profiles: {
        facebook_page: entries.facebook_page,
        google_plus: entries.google_plus,
        twitter: entries.twitter,
        websiteUrl: entries.websiteUrl,
      },
      profile_picture: getImage,
      profile_picture: base64Image,
    };

    const header = {
      "x-auth-token": userToken,
      "Content-Type": "application/json",
    };
    axios
      .put(` ${process.env.NEXT_PUBLIC_URL}api/user/editProfile`, data, {
        headers: header,
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  const _handleImage = () => {
    setIsRendered(true);
  };
  const _handleCaputeree = (e) => {
    setIsRendered(!isRendered);
    setGetImage(e);
  };
  const _handleDelteImage = () => {
    setGetImage("");
  };
  const setImageSec = () => {
    setImg(img);
  };
  const handleImageChange = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      setBase64Image(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  const removeUpload = () => {
    setBase64Image("");
  };
  const _handleEditProfile = () => {
    setEditProfile(!editProfile);
  };

  const _handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };
  return (
    <>
      <BreadCrum
        breadHeading="Edit Profile"
        pagess={[
          { page: "Home", link: "/" },
          { page: "My Profile", link: "/profile" },
          { page: "Edit Profile", link: "/" },
        ]}
      />

      {loading ? (
        <Spinner />
      ) : (
        <section className="position-relative edit_prfile_page_main_wrapper">
          <div className="container-xxl">
            <div className={styles.profile_container}>
              <div className={styles.profile_area}>
                <div className={styles.btn_span}>
                  <button className={styles.logout_btn} onClick={_handleLogout}>
                    {" "}
                    logout{" "}
                  </button>
                </div>
                <div className={styles.loginAreaDetails}>
                  <div>
                    <Image
                      height={80}
                      className={styles.logImg}
                      src={entries.profile_picture}
                      alt="User Image"
                      width={80}
                    />
                  </div>
                  <div>
                    <span className={styles.para}>{entries.username}</span>
                  </div>
                  <div>
                    {editProfile ? (
                      <button
                        className={styles.editprofile}
                        onClick={_handleEditProfile}
                      >
                        View Profile
                      </button>
                    ) : (
                      <button
                        className={styles.editprofile}
                        onClick={_handleEditProfile}
                      >
                        Edit Profile
                      </button>
                    )}
                  </div>
                  <div className={styles.email}>
                    <Link href="mailto:seositesoft5@gmail.com">
                      <i className="fa-regular fa-envelope"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {editProfile ? (
                <div className={styles.accordion_section}>
                  <form onSubmit={handleProfileSubmit}>
                    <div className={`accordion`} id="accordionExample">
                      <div className={styles.accordion_item01}>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className={
                                changeIcon[0]
                                  ? `accordion-button ${styles.accordion_btn} ${styles.inactive01}`
                                  : `accordion-button ${styles.accordion_btn} ${styles.active}`
                              }
                              onClick={() => handleIcon(0)}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne01"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              {changeIcon[0] ? (
                                <div className={styles.icons}>
                                  <span>
                                    <i className="fa-solid fa-angle-right"></i>
                                  </span>
                                </div>
                              ) : (
                                <div className={styles.icons}>
                                  <i className="fa-solid fa-angle-down"></i>
                                </div>
                              )}
                              Profile Details
                            </button>
                          </h2>
                          <div
                            id="collapseOne01"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className={`row ${styles.profile_row}`}>
                                <div className="col-lg-4 col-md-12 p-1">
                                  <div className={styles.label}>
                                    <label> Profile Display Name </label>
                                    <span className="mx-2">
                                      <Image
                                        alt="logo"
                                        src={help}
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title="Your Profile name/nickname that is displayed to public."
                                      />
                                    </span>
                                  </div>
                                </div>
                                <div className="col-lg-8 col-md-12 p-1">
                                  <input
                                    className={`w-100 ${
                                      active ? styles.input : styles.secondInput
                                    }`}
                                    value={entries.username}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                              <div className={`row ${styles.profile_row}`}>
                                <div className="col-lg-4 col-md-12 p-2">
                                  <div className={styles.profilePic}>
                                    <div className={styles.camIcon}>
                                      <i className="fa-solid fa-camera"></i>
                                    </div>
                                    <div className={styles.iconLabel}>
                                      Profile Picture{" "}
                                      <span className="mx-2">
                                        <Image
                                          alt="logo"
                                          src={help}
                                          data-toggle="tooltip"
                                          data-placement="bottom"
                                          title="Upload a picture that presents you across this site"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-8 col-md-12 p-1">
                                  <div>
                                    <div className={styles.img_area}>
                                      {base64Image ? (
                                        <Image
                                          src={base64Image}
                                          alt=""
                                          width={80}
                                          height={80}
                                        />
                                      ) : (
                                          <Image
                                            height={80}
                                            className={`${styles.logImg}`}
                                            src={Member}
                                            alt="logo"
                                          />
                                        ) && getImage ? (
                                        <Image
                                          src={getImage}
                                          alt="img"
                                          height={80}
                                          width={80}
                                          className={`${styles.logImg}`}
                                        />
                                      ) : (
                                        <Image
                                          height={80}
                                          className={`${styles.logImg}`}
                                          src={Member}
                                          alt="logo"
                                        />
                                      )}
                                    </div>
                                    <div>
                                      <label
                                        for="myfile"
                                        className={styles.upload_pic}
                                      >
                                        Upload a profile picture
                                      </label>
                                      <input
                                        type="file"
                                        id="myfile"
                                        name="myFile"
                                        onChange={handleImageChange}
                                        style={{ display: "none" }}
                                      />
                                      {base64Image ? (
                                        <>
                                          <button
                                            className={`${styles.removeUpload}`}
                                            onClick={removeUpload}
                                          >
                                            remove
                                          </button>
                                          <button
                                            className={styles.click_photo}
                                            onClick={_handleImage}
                                          >
                                            Take Photo
                                          </button>
                                        </>
                                      ) : (
                                          <button
                                            className={styles.click_photo}
                                            onClick={_handleImage}
                                          >
                                            Take Photo
                                          </button>
                                        ) && getImage ? (
                                        <>
                                          <button
                                            className={`${styles.remove}`}
                                            onClick={_handleDelteImage}
                                          >
                                            remove
                                          </button>
                                          <button
                                            className={styles.click_photo}
                                            onClick={_handleImage}
                                          >
                                            Take Photo
                                          </button>
                                        </>
                                      ) : (
                                        <button
                                          className={styles.click_photo}
                                          onClick={_handleImage}
                                        >
                                          Take Photo
                                        </button>
                                      )}

                                      <div className={`${styles.photooo}`}>
                                        {isRendered ? (
                                          <WebCamera
                                            rendered={isRendered}
                                            _handleCaputer={(e) =>
                                              _handleCaputeree(e)
                                            }
                                          />
                                        ) : (
                                          <button className="d-none"></button>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`row ${styles.profile_row}`}>
                                <div className="col-lg-4 col-md-12 p-2">
                                  <div className={styles.label}>
                                    <label> First Name </label>
                                  </div>
                                </div>
                                <div className="col-lg-8 col-md-12 p-2">
                                  <input
                                    onChange={handleChange}
                                    value={entries.first_name}
                                    name="first_name"
                                    className={`w-100 ${
                                      active ? styles.input : styles.secondInput
                                    }`}
                                  />
                                </div>
                              </div>
                              <div className={`row ${styles.profile_row}`}>
                                <div className="col-lg-4 col-md-12 p-2">
                                  <div className={styles.label}>
                                    <label> Last Name </label>
                                  </div>
                                </div>
                                <div className="col-lg-8 col-md-12 p-2">
                                  <input
                                    onChange={handleChange}
                                    value={entries.last_name}
                                    name="last_name"
                                    className={`w-100 ${
                                      active ? styles.input : styles.secondInput
                                    }`}
                                  />
                                </div>
                              </div>
                              <div className={`row ${styles.profile_row}`}>
                                <div className="col-lg-4 col-md-12 p-2">
                                  <div className={styles.label}>
                                    Bio Graphy
                                    <span className="mx-2">
                                      <Image
                                        src={help}
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title="Discribe Yourself"
                                        alt="logo"
                                      />
                                    </span>
                                  </div>
                                </div>
                                <div className="col-lg-8 col-md-12 p-2">
                                  <textarea
                                    onChange={handleChange}
                                    value={entries.bioGraphy}
                                    name="bioGraphy"
                                    rows="6"
                                    className={`w-100 ${styles.textarea01}`}
                                  />
                                </div>
                              </div>
                              <div className={`row ${styles.profile_row}`}>
                                <div className="col-lg-4 col-md-12 p-2">
                                  <div className={styles.label}>Gender</div>
                                </div>
                                <div className="col-lg-8 col-md-12 p-2">
                                  <div className="d-flex">
                                    <div className="form-check mx-2">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="exampleRadios1"
                                        value="Male"
                                        onChange={handleChange}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="exampleRadios1"
                                      >
                                        Male
                                      </label>
                                    </div>
                                    <div className="form-check ">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        id="exampleRadios1"
                                        value="Female"
                                        onChange={handleChange}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="exampleRadios2"
                                      >
                                        Female
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`row ${styles.profile_row}`}>
                                <div className="col-lg-4 col-md-12 p-2">
                                  <div className={styles.profilePic}>
                                    <div className={styles.camIcon}>
                                      <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className={styles.iconLabel}>
                                      country/region
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-8 col-md-12 p-2">
                                  <div>
                                    <div>
                                      <select
                                        className={`w-100 ${styles.input} ${styles.inputtt_seclect}`}
                                        onChange={handleChange}
                                        name="country"
                                      >
                                        {CountyList.map((e, idx) => {
                                          return <option key={idx}>{e}</option>;
                                        })}
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.accordion_item01}>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className={
                                changeIcon[1]
                                  ? `accordion-button ${styles.accordion_btn} ${styles.inactive01}`
                                  : `accordion-button ${styles.accordion_btn} ${styles.active}`
                              }
                              onClick={() => handleIcon(1)}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne02"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              {changeIcon[1] ? (
                                <div className={styles.icons}>
                                  <span>
                                    <i className="fa-solid fa-angle-right"></i>
                                  </span>
                                </div>
                              ) : (
                                <div className={styles.icons}>
                                  <i className="fa-solid fa-angle-down"></i>
                                </div>
                              )}
                              Social Profiles
                            </button>
                          </h2>
                          <div
                            id="collapseOne02"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className={`row ${styles.profile_row}`}>
                                <div className="col-lg-4 col-md-12 p-2">
                                  <div className={styles.profilePic}>
                                    <div className={styles.camIcon}>
                                      <i className="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className={styles.iconLabel}>
                                      <label> Facebook Page </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-8 col-md-12 p-2">
                                  <div>
                                    <div>
                                      <input
                                        onChange={handleChange}
                                        value={entries.facebook_page}
                                        name="facebook_page"
                                        className={`w-100 ${
                                          active
                                            ? styles.input
                                            : styles.secondInput
                                        }`}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`row ${styles.profile_row}`}>
                                <div className="col-lg-4 col-md-12 p-2">
                                  <div className={styles.profilePic}>
                                    <div className={styles.camIcon}>
                                      <i className="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className={styles.iconLabel}>
                                      <label> Twitter </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-8 col-md-12 p-2">
                                  <div>
                                    <div>
                                      <input
                                        onChange={handleChange}
                                        name="twitter"
                                        className={`w-100 ${
                                          active
                                            ? styles.input
                                            : styles.secondInput
                                        }`}
                                        value={entries.twitter}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`row ${styles.profile_row}`}>
                                <div className="col-lg-4 col-md-12 p-2">
                                  <div className={styles.profilePic}>
                                    <div className={styles.camIcon}>
                                      <i className="fa-brands fa-google-plus-g"></i>
                                    </div>
                                    <div className={styles.iconLabel}>
                                      Google+
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-8 col-md-12 p-2">
                                  <div>
                                    <div>
                                      <input
                                        onChange={handleChange}
                                        className={`w-100 ${
                                          active
                                            ? styles.input
                                            : styles.secondInput
                                        }`}
                                        value={entries.google_plus}
                                        name="google_plus"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`row ${styles.profile_row}`}>
                                <div className="col-lg-4 col-md-12 p-2">
                                  <div className={styles.profilePic}>
                                    <div className={styles.camIcon}>
                                      <i className="fa-solid fa-house"></i>
                                    </div>
                                    <div className={styles.iconLabel}>
                                      Website(URL)
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-8 col-md-12 p-2">
                                  <div>
                                    <div>
                                      <input
                                        className={`w-100 ${
                                          active
                                            ? styles.input
                                            : styles.secondInput
                                        }`}
                                        value={entries.websiteUrl}
                                        name="websiteUrl"
                                        onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.accordion_item01}>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className={
                                changeIcon[2]
                                  ? `accordion-button ${styles.accordion_btn} ${styles.inactive01}`
                                  : `accordion-button ${styles.accordion_btn} ${styles.active}`
                              }
                              onClick={() => handleIcon(2)}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne03"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              {changeIcon[2] ? (
                                <div className={styles.icons}>
                                  <span>
                                    <i className="fa-solid fa-angle-right"></i>
                                  </span>
                                </div>
                              ) : (
                                <div className={styles.icons}>
                                  <i className="fa-solid fa-angle-down"></i>
                                </div>
                              )}
                              Account Details
                            </button>
                          </h2>
                          <div
                            id="collapseOne03"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div className={`row ${styles.profile_row}`}>
                                <div className="col-lg-4 col-md-12 p-2">
                                  <div className={styles.label}>
                                    <label> Mobile Number </label>
                                  </div>
                                </div>
                                <div className="col-lg-8 col-md-12 p-2">
                                  <input
                                    className={`w-100 ${
                                      active ? styles.input : styles.secondInput
                                    }`}
                                    value={entries.mobile}
                                    type="number"
                                    name="mobile"
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                              <div className={`row ${styles.profile_row}`}>
                                <div className="col-lg-4 col-md-12 p-2">
                                  <div className={styles.profilePic}>
                                    <div className={styles.camIcon}>
                                      <i className="fa-regular fa-envelope"></i>
                                    </div>
                                    <div className={styles.iconLabel}>
                                      E-mail Address
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-8 col-md-12 p-2">
                                  <div>
                                    <div>
                                      <input
                                        className={`w-100 ${
                                          active
                                            ? styles.input
                                            : styles.secondInput
                                        }`}
                                        value={entries.email}
                                        name="email"
                                        onChange={handleChange}
                                      />
                                      <span className={styles.check_box}>
                                        <input type="checkbox" />
                                        <span
                                          className={styles.check_box_label}
                                        >
                                          MAKE THIS FIELD HIDDEN FROM PUBLIC
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`row ${styles.profile_row}`}>
                                <div className="col-lg-4 col-md-12 p-2">
                                  <div className={styles.profilePic}>
                                    <div className={styles.camIcon}>
                                      <i className="fa-solid fa-lock"></i>
                                    </div>
                                    <div className={styles.iconLabel}>
                                      Password
                                      <span className="mx-2">
                                        <Image
                                          src={help}
                                          data-toggle="tooltip"
                                          data-placement="bottom"
                                          title="Your Password must be 8 characters long at-least"
                                          alt="logo"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-8 col-md-12 p-2">
                                  <div>
                                    <div className={`${styles.tickIcon}`}>
                                      <input
                                        type="password"
                                        name="password"
                                        className={`w-100 form-control ${styles.tickIcon} ${styles.input}`}
                                        value={input.password}
                                        onChange={onInputChange}
                                        onBlur={validateInput}
                                      />
                                      <span className={`${styles.tickIcon01}`}>
                                        <i className="fa-solid fa-check"></i>
                                      </span>
                                      {error.password && (
                                        <span className={styles.err}>
                                          {error.password}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`row ${styles.profile_row}`}>
                                <div className="col-lg-4 col-md-12 p-2">
                                  <div className={styles.label}>
                                    Confirm Password
                                  </div>
                                </div>
                                <div className="col-lg-8 col-md-12 p-2">
                                  <input
                                    type="password"
                                    name="confirmPassword"
                                    className={`w-100 ${styles.input}`}
                                    value={input.confirmPassword}
                                    onChange={onInputChange}
                                    onBlur={validateInput}
                                  />
                                  {error.confirmPassword && (
                                    <span className={styles.err}>
                                      {error.confirmPassword}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className={styles.btns_row}>
                        <button type="submit" className={styles.save_changes}>
                          save changes
                        </button>
                        <button className={styles.upload_pic02}>
                          Request Verification
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                <>
                  <div className={styles.following_section}>
                    <p>0 CONNECTIONS</p>
                    <p>0 FOLLOWING</p>
                    <p>0 FOLLOWERS</p>
                  </div>
                  <div className={styles.padding_view}>
                    <ViewProfile />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default withAuth(EditProfile);

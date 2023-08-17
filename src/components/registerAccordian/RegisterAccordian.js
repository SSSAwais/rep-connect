import React, { useEffect, useState } from "react";
import "./RegisterAccordian.css";
import tooltip from "../../assets/images/register/help.png";
import Image from "next/image";
import { CountyList } from "@/data/countylist/CountyList";
import Member from "../../assets/images/Profile/member.png";
import axios from "axios";
import WebCamera from "../webCam/WebCam";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RegisterAccordian = () => {
  const [errors, setErrors] = useState({});
  const [base64Image, setBase64Image] = useState("");
  const [getImage, setGetImage] = useState("");
  const [isRendered, setIsRendered] = useState(false);
  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });
  const [registerForm, setRegisterForm] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    position: "",
    distributionGroup: "",
    email: "",
    mobile: "",
    password: "",
    confrimPassword: "",
    profileName: "",
    gender: "",
    country: "",
    facebook: "",
    twitter: "",
    google: "",
    website: "",
  });
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    if (registerForm.userName.trim() === "") {
      newErrors.userName = "Name is required";
      isValid = false;
    }

    if (registerForm.firstName.trim() === "") {
      newErrors.firstName = "First Name is Reuqired";
      isValid = false;
    }
    if (registerForm.lastName.trim() === "") {
      newErrors.lastName = "Last Name is Required";
    }
    if (registerForm.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(registerForm.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    if (registerForm.password.trim() === "") {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (registerForm.password.length < 8) {
      newErrors.password = "Password should be at least 8 characters";
      isValid = false;
    }
    if (registerForm.confrimPassword.trim() === "") {
      newErrors.confrimPassword = "Comfirm password is required";
    }
    setErrors(newErrors);
    return isValid;
  };
  const data = {
    username: registerForm.userName,
    first_name: registerForm.firstName,
    last_name: registerForm.lastName,
    position: registerForm.position,
    email: registerForm.email,
    mobile: registerForm.mobile,
    password: registerForm.password,
    gender: registerForm.gender,
    country: registerForm.country,
    profile_picture: getImage ? getImage : base64Image,
    social_profiles: {
      facebook_page: registerForm.facebook,
      twitter: registerForm.twitter,
      google_plus: registerForm.google,
      websiteUrl: registerForm.website,
    },
  };
  const _handleRegistrationForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post(` ${process.env.NEXT_PUBLIC_URL}api/user/register`, data)
        .then((resp) => {
          if (resp.data.success === 1) {
            toast.success(resp.data.message, {
              position: "top-right",
              autoClose: 5000,
            });
            setRegisterForm({
              userName: "",
              firstName: "",
              lastName: "",
              position: "",
              distributionGroup: "",
              email: "",
              mobile: "",
              password: "",
              confrimPassword: "",
              profileName: "",
              gender: "",
              country: "",
              facebook: "",
              twitter: "",
              google: "",
              website: "",
            });
            setGetImage("");
          } else {
            toast.warning(resp.data.message, {
              position: "top-center",
              autoClose: 2000,
            });
          }
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
    }
  };
  const _handleChange = (e) => {
    console.log(e.target.value);
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };
  const _handleImage = (e) => {
    setIsRendered(true);
  };
  const _handleCaputeree = (e) => {
    setIsRendered(!isRendered);
    setGetImage(e);
  };
  const _handleDelteImage = () => {
    setGetImage("");
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
  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };
      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (
            registerForm.confrimPassword &&
            value !== registerForm.confrimPassword
          ) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = registerForm.confrimPassword
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
  return (
    <>
      <form
        onSubmit={_handleRegistrationForm}
        className="Form_register_section"
      >
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
                    Account Detail
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="row align-items-center userName_section">
                      <div className="col-lg-5 col-md-4 col-sm-12">
                        <div className="username_area">
                          <span className="iconss">
                            <i className="fa-solid fa-user"></i>
                          </span>
                          <h6>
                            UserName <span>*</span>
                          </h6>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-8 col-sm-12 has-validation">
                        <input
                          id="validationCustomUsername"
                          className="form-control"
                          value={registerForm.userName}
                          onChange={_handleChange}
                          name="userName"
                        />
                        {errors.userName && (
                          <span className="errorss">{errors.userName}</span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5 col-md-4 col-sm-12">
                        <h6 className="without_icon">
                          First Name <span>*</span>
                        </h6>
                      </div>
                      <div className="col-lg-7 col-md-8 col-sm-12">
                        <input
                          className="form-control"
                          onChange={_handleChange}
                          name="firstName"
                        />
                        {errors.firstName && (
                          <span className="errorss">{errors.firstName}</span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5 col-md-4 col-sm-12">
                        <h6 className="without_icon">
                          Last Name <span>*</span>
                        </h6>
                      </div>
                      <div className="col-lg-7 col-md-8 col-sm-12">
                        <input
                          className="form-control"
                          value={registerForm.lastName}
                          onChange={_handleChange}
                          name="lastName"
                        />
                        {errors.lastName && (
                          <span className="errorss">{errors.lastName}</span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5 col-md-4 col-sm-12">
                        <h6 className="without_icon">Title/Position</h6>
                      </div>
                      <div className="col-lg-7 col-md-8 col-sm-12">
                        <input
                          className="form-control"
                          value={registerForm.position}
                          onChange={_handleChange}
                          name="position"
                        />
                      </div>
                    </div>
                    <div className="row email_row">
                      <div className="col-lg-5 col-md-4 col-sm-12 d-flex align-items-center col-sm-4 col-sm-12">
                        <span className="iconss">
                          <i className="fa-regular fa-envelope-open"></i>
                        </span>
                        <h6>Email Address</h6>
                      </div>
                      <div className="col-lg-7 col-md-8 col-sm-12">
                        <input
                          className="form-control"
                          value={registerForm.email}
                          onChange={_handleChange}
                          name="email"
                        />
                        {errors.email && (
                          <span className="errorss">{errors.email}</span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5 col-md-4 col-sm-12">
                        <h6 className="without_icon">Mobile Number</h6>
                      </div>
                      <div className="col-lg-7 col-md-8 col-sm-12">
                        <input
                          className="form-control"
                          value={registerForm.mobile}
                          onChange={_handleChange}
                          name="mobile"
                        />
                      </div>
                    </div>
                    <div className="row password_row">
                      <div className="col-lg-5 col-md-4 col-sm-12 d-flex align-items-center">
                        <span
                          className="iconss"
                          type="button"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Your password must b 8 characters long atleast"
                        >
                          <i className="fa-solid fa-lock"></i>
                        </span>
                        <h6>
                          Password <span>*</span>
                        </h6>
                      </div>
                      <div className="col-lg-7 col-md-8 col-sm-12">
                        <input
                          className="form-control"
                          value={registerForm.password}
                          onChange={_handleChange}
                          onBlur={validateInput}
                          name="password"
                          type="password"
                        />
                        {error.password && (
                          <span className="err">{error.password}</span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5 col-md-4 col-sm-12">
                        <h6 className="without_icon">
                          Confirm Password <span>*</span>
                        </h6>
                      </div>
                      <div className="col-lg-7 col-md-8 col-sm-12">
                        <input
                          className="form-control"
                          value={registerForm.confrimPassword}
                          onChange={_handleChange}
                          name="confrimPassword"
                          type="password"
                          onBlur={validateInput}
                        />
                        {error.confirmPassword && (
                          <span className="err">{error.confirmPassword}</span>
                        )}
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
                    Profile Detail
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="row align-items-center">
                      <div className="col-lg-5 col-md-4 col-sm-12">
                        <div className="username_area">
                          <h6 className="without_icon">
                            Profile Display Name
                            <span
                              type="button"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Your profile name / nickname that will be displayed to public"
                            >
                              <Image src={tooltip} alt="" />
                            </span>
                          </h6>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-8 col-sm-12">
                        <input
                          className="form-control display_name"
                          value={registerForm.profileName}
                          onChange={_handleChange}
                          name="profileName"
                        />
                      </div>
                    </div>
                    <div className="row profile_picture_row">
                      <div className="col-lg-5 col-md-4 col-sm-12 d-flex align-items-center">
                        <span className="iconss">
                          <i className="fa-solid fa-camera"></i>
                        </span>
                        <h6 className="mb-0">
                          profile Picture
                          <span
                            type="button"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Upload a profile that represents you accross tha site "
                          >
                            <Image src={tooltip} alt="" />
                          </span>
                        </h6>
                      </div>
                      <div className="col-lg-7 col-md-8 col-sm-12">
                        <div className="image_section ">
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
                                className="logImg"
                                src={Member}
                                alt="logo"
                              />
                            ) && getImage ? (
                            <Image
                              src={getImage}
                              alt="img"
                              height={80}
                              width={80}
                              className="logImg"
                            />
                          ) : (
                            <Image
                              height={80}
                              className="logImg"
                              src={Member}
                              alt="logo"
                            />
                          )}
                          <div>
                            <label for="myfile" className="upload_pic">
                              Upload a profile picture
                            </label>
                            <input
                              type="file"
                              id="myfile"
                              name="myfile"
                              onChange={handleImageChange}
                              style={{ display: "none" }}
                            />
                            {base64Image ? (
                              <>
                                <button
                                  className="removeUpload"
                                  onClick={removeUpload}
                                >
                                  remove
                                </button>
                                <button
                                  className="click_photo"
                                  onClick={_handleImage}
                                >
                                  Take Photo
                                </button>
                              </>
                            ) : (
                                <button
                                  className="click_photo"
                                  onClick={_handleImage}
                                >
                                  Take Photo
                                </button>
                              ) && getImage ? (
                              <>
                                <button
                                  className="remove"
                                  onClick={_handleDelteImage}
                                >
                                  remove
                                </button>
                                <button
                                  className="click_photo"
                                  onClick={_handleImage}
                                >
                                  Take Photo
                                </button>
                              </>
                            ) : (
                              <button
                                className="click_photo"
                                onClick={_handleImage}
                              >
                                Take Photo
                              </button>
                            )}
                            <div className="photooo">
                              {isRendered ? (
                                <WebCamera
                                  rendered={isRendered}
                                  _handleCaputer={(e) => _handleCaputeree(e)}
                                />
                              ) : (
                                <button className="d-none"></button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5 col-md-4 col-sm-12">
                        <h6 className="without_icon">Gender</h6>
                      </div>
                      <div className="col-lg-7 col-md-8 col-sm-12">
                        <div className="d-flex">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="exampleRadios1"
                              value="Male"
                              onChange={_handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios1"
                            >
                              Male
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="exampleRadios1"
                              value="Female"
                              onChange={_handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios1"
                            >
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row country_row">
                      <div className="col-lg-5 col-md-4 col-sm-12 d-flex align-items-center">
                        <span className="iconss">
                          <i className="fa-solid fa-location-dot"></i>
                        </span>
                        <h6 className="mb-0">Country/Region</h6>
                      </div>
                      <div className="col-lg-7 col-md-8 col-sm-12">
                        <select
                          className="w-100"
                          onChange={_handleChange}
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
        <div className="row third_row fourth">
          <div className="col-lg-12 p-0">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button third_row_button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Social Details
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="row facebook_row">
                      <div className="col-lg-5 col-md-4 col-sm-12 align-items-center">
                        <div className="username_area">
                          <span className="iconss">
                            <i className="fa-brands fa-facebook-f"></i>
                          </span>
                          <h6>Facebook Page</h6>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-8 col-sm-12">
                        <input
                          className="form-control"
                          value={registerForm.facebook}
                          onChange={_handleChange}
                          name="facebook"
                        />
                      </div>
                    </div>
                    <div className="row twitter_row">
                      <div className="col-lg-5 col-md-4 col-sm-12 d-flex align-items-center">
                        <span className="iconss">
                          <i className="fa-brands fa-twitter"></i>
                        </span>
                        <h6 className="mb-0">Twitter</h6>
                      </div>
                      <div className="col-lg-7 col-md-8 col-sm-12">
                        <input
                          className="form-control"
                          value={registerForm.twitter}
                          onChange={_handleChange}
                          name="twitter"
                        />
                      </div>
                    </div>
                    <div className="row google_row">
                      <div className="col-lg-5 col-md-4 col-sm-12 d-flex align-items-center">
                        <span className="iconss">
                          <i className="fa-brands fa-google-plus-g"></i>
                        </span>
                        <h6 className="mb-0">Google+</h6>
                      </div>
                      <div className="col-lg-7 col-md-8 col-sm-12">
                        <input
                          className="form-control"
                          value={registerForm.google}
                          onChange={_handleChange}
                          name="google"
                        />
                      </div>
                    </div>
                    <div className="row website_row">
                      <div className="col-lg-5 col-md-4 col-sm-12 d-flex align-items-center">
                        <span className="iconss">
                          <i className="fa-solid fa-house"></i>
                        </span>
                        <h6 className="mb-0">Website (URL)</h6>
                      </div>
                      <div className="col-lg-7 col-md-8 col-sm-12">
                        <input
                          className="form-control"
                          value={registerForm.website}
                          onChange={_handleChange}
                          name="website"
                        />
                      </div>
                    </div>
                    <div className="row last_row">
                      <div className="col-lg-12 d-flex align-items-center">
                        <input
                          type="checkbox"
                          id="terms"
                          name="terms"
                          value="Bike"
                        />
                        <label for="terms" className="label_terms">
                          To complete registration, you must read and agree to
                          our terms and conditions.
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="buttonsss">
                          <button type="submit">Register</button>
                          <button>Login</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default RegisterAccordian;

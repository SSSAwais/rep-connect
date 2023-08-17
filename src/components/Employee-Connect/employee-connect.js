"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./employee-connect.css";
import logo from "../../assets/images/employee-connect/MicroGenDX-EC-Logo2.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const EmployeeConnect = () => {
  const [error, setError] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [login, setLogin] = useState({
    userName: "",
    password: "",
  });
  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const _handleLoginForm = (e) => {
    e.preventDefault();
    let password = login.password.trim();
    let err = [];
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(login.userName) ||
      password.length == 0
    ) {
      let err = [];
      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(login.userName)
      ) {
        err.push("Invalid Email Address !");

        setError(err);
        console.log(error);
      }
      if (password.length == 0) {
        err.push("Enter Valid Password !");
        setError(err);
      }
      // setError(err)
    } else {
      let err = [];
      setError(err);
      axios
        .post("https://anxious-foal-shift.cyclic.app/api/user/login", {
          email: login.userName,
          password: login.password,
        })
        .then((resp) => {
          console.log(resp.data.token);
          setIsLoggedIn(false);
          if (resp.data.success === 1) {
            localStorage.setItem("token", JSON.stringify(resp.data.token));
            setIsLoggedIn(false);
            toast.success(resp.data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setLogin({
              userName: "",
              password: "",
            });
          } else {
            toast.warn(resp.data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        })
        .catch((err) => {
          toast.warn(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLogin({
            userName: "",
            password: "",
          });
        });
    }
  };

  return (
    <>
      <div className="main">
        <div className="container-xxl">
          <form onSubmit={_handleLoginForm}>
            <div className="main-container">
              <div className="row">
                <Image src={logo} alt="logo" className="account_logo" />
              </div>
              <div className="row card_row">
                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                  <div className="card">
                    <div className="login_header">
                      <div>login</div>
                      <div>Forgot Your Passowrd?</div>
                    </div>

                    <div className="cred">
                      <div className="row text">
                        <div className="col-4">
                          <label className="lable">
                            <span className="icon">
                              <i className="fa-solid fa-user"></i>
                            </span>
                            username or E-mail
                          </label>
                        </div>
                        <div className="col-8">
                          <div className="input_area">
                            <input
                              className="input w-100"
                              value={login.userName}
                              name="userName"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row text">
                        <div className="col-4">
                          <label className="lable">
                            <span className="icon">
                              <i className="fa-solid fa-lock"></i>
                            </span>
                            password
                          </label>
                        </div>
                        <div className="col-8">
                          <div className="input_area">
                            <input
                              className="input w-100"
                              value={login.password}
                              name="password"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4"></div>
                        <div className="col-8">
                          <div>
                            {error.length > 0
                              ? error.map((err, index) => {
                                  return (
                                    <div className="errors" key={index}>
                                      <p className="error_msg"> {err}</p>
                                    </div>
                                  );
                                })
                              : ""}
                          </div>
                          <div className="text01">
                            <input type="checkbox" />
                            <label className="lable01" htmlFor="remember">
                              Remember Me
                            </label>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>

                    <div className="btn_area">
                      <button className="login_btn" typeof="submit">
                        Login
                      </button>
                      <button className="account_btn">create an Account</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default EmployeeConnect;

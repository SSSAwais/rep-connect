"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Logo from "../../assets/images/login/Rep-Connect-Logo-2021.png";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Page = () => {
  const [error, setError] = useState([]);
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState({
    userName: "",
    password: "",
  });
  const [seePassword, setSeepassword] = useState(false);
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      return location.replace("/");
    }
  }, []);

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
      setIsLoggedIn(true);
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
            setIsLoggedIn(false);
            router.push("/");
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
            setIsLoggedIn(false);
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
          setIsLoggedIn(false);
        });
    }
  };

  const onClickSeePassword = (e) => {
    e.preventDefault();
    setSeepassword(!seePassword);
  };

  return (
    <div>
      <div className={`${styles.main}`}>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6">
            <div className={`${styles.dp_flex} justify-content-center`}>
              <Image src={Logo} alt="logo" />
            </div>
            <div className={styles.form_container}>
              <form>
                <label> Username / Email </label>
                <div className={styles.input_container}>
                  <div>
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <input
                    value={login.userName}
                    name="userName"
                    onChange={handleChange}
                    placeholder="Enter your Email"
                  />
                </div>
                <label> Password </label>
                <div className={styles.input_container}>
                  <div>
                    <i className="fa-solid fa-key"></i>
                  </div>
                  <input
                    value={login.password}
                    name="password"
                    onChange={handleChange}
                    type={seePassword ? "text" : "password"}
                    placeholder="Type Password"
                  />
                  <div>
                    {seePassword ? (
                      <i
                        className="fa-solid fa-eye-slash"
                        onClick={(e) => onClickSeePassword(e)}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-eye"
                        onClick={(e) => onClickSeePassword(e)}
                      ></i>
                    )}
                  </div>
                </div>
                <div>
                  {error.length > 0 ? (
                    <div className="errors">
                      <p className={`${styles.error_msg} `}> {error[0]}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="remember_me"
                    name="remember_me"
                    value="remember_me"
                  />
                  <span> Remember Me </span>
                </div>
                <div className={styles.button_container}>
                  <button type="submit" onClick={(e) => _handleLoginForm(e)}>
                    {isLoggedIn ? "Loading..." : "Log In"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className={styles.register_area}>
                <Link href="/register"> Register </Link>
                <div className={styles.line}> </div>
                <div> Lost your password? </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className={styles.language_area}>
                <div>
                  <i className="fa-solid fa-language"></i>
                </div>
                <select name="language" id="language">
                  <option value="English">English (United Stated)</option>
                  <option value="Espanol">Espanol</option>
                </select>
                <button> change </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Page;

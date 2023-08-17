"use client";
import React, { useState } from "react";
import "./myaccount.css";
const MyAccount = () => {
  const [currentPassword, setCurrentPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirmNewPassword, setConfirmNewPassword] = useState(false);
  const [message, setMessage] = useState(
    "Weak - Please enter a stronger password."
  );
  const [validationMessage, setValidationMessage] = useState("");
  const [messageShow, setMessageShow] = useState(false);

  const [submitForm, setSubmitForm] = useState({
    firstname: "",
    lastname: "",
    displayname: "",
    emailaddress: "",
    currentpassword: "",
    newpassword: "",
    confirmpassword: "",
  });
  const hanldeChange = (e) => {
    setSubmitForm({ ...submitForm, [e.target.name]: e.target.value });
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const number = /[0-9]/;
    const pattren = /[A-Za-z]/;
    if (e.target.value.length >= 1) {
      setMessageShow(true);
      if (
        e.target.value.match(pattren) &&
        e.target.value.match(number) &&
        e.target.value.match(specialChars)
      ) {
        if (e.target.value.length >= 8) {
          setMessage("Medium");
          setValidationMessage("medium");
        } else {
          setMessage("Weak - Please enter a stronger password.");
          setValidationMessage("short");
        }
        if (e.target.value.length >= 16) {
          setMessage("Strong");
          setValidationMessage("strong");
        } else {
          setMessage("Medium");
          setValidationMessage("medium");
        }
      } else {
        setMessage("Weak - Please enter a stronger password.");
        if (e.target.value.length >= 1) {
        }
        setValidationMessage("short");
      }
    } else {
      setMessageShow(false);
    }
  };
  const hanldeChangeFileds = (e) => {
    setSubmitForm({ ...submitForm, [e.target.name]: e.target.value });
  };

  const hanldesubmit = (e) => {
    e.preventDefault();
    console.log("submit form", submitForm);
  };

  return (
    <div className="edit-account">
      <form onSubmit={hanldesubmit} className="form-edit-content">
        <div className="d-md-flex justify-content-md-between ">
          <div className="name-width">
            <label className="form-label" htmlFor="firstname">
              First name <span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              value={submitForm.firstname}
              onChange={hanldeChangeFileds}
            />
          </div>
          <div className="name-width">
            <label className="form-label" htmlFor="lastname">
              Last name <span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              id="lastname"
              value={submitForm.lastname}
              onChange={hanldeChangeFileds}
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="mb-1">
          <label htmlFor="displayname" className="form-label">
            Display name <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="displayname"
            value={submitForm.displayname}
            onChange={hanldeChangeFileds}
            name="displayname"
          />
          <span className="fst-italic">
            This will be how your name will be displayed in the account section
            and in reviews
          </span>
        </div>
        <div className="mb-1 display-name">
          <label htmlFor="emailaddress" className="form-label">
            Email address <span className="required">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="emailaddress"
            name="emailaddress"
            value={submitForm.emailaddress}
            onChange={hanldeChangeFileds}
          />
        </div>

        <h4 className="pass-changed-title">Password change</h4>
        <div className="mb-1">
          <label htmlFor="currentpassword" className="form-label">
            Current password (leave blank to leave unchanged)
            <span className="required">*</span>
          </label>

          <div className="position-relative current-password">
            <input
              type={currentPassword ? "text" : "password"}
              className="form-control"
              id="currentpassword"
              name="currentpassword"
              placeholder="***********"
              value={submitForm.currentpassword}
              onChange={hanldeChangeFileds}
            />
            {currentPassword ? (
              <span
                className="hideed"
                id="currentpassword"
                onClick={(e) => setCurrentPassword(false)}
              >
                <i className="fa-regular fa-eye-slash"></i>
              </span>
            ) : (
              <span
                className="showed"
                onClick={(e) => setCurrentPassword(true)}
                id="currentpassword"
              >
                <i className="fa-regular fa-eye"></i>
              </span>
            )}
          </div>
        </div>
        <div className="new-pass-sec">
          <label htmlFor="newpassword" className="form-label">
            New password (leave blank to leave unchanged)
            <span className="required">*</span>
          </label>
          <div className="position-relative new-password">
            <input
              type={newPassword ? "text" : "password"}
              className="form-control"
              id="newpassword"
              name="newpassword"
              value={submitForm.newpassword}
              onChange={hanldeChange}
            />
            {newPassword ? (
              <span
                className="hideed"
                id="newPassword"
                onClick={(e) => setNewPassword(false)}
              >
                <i className="fa-regular fa-eye-slash"></i>
              </span>
            ) : (
              <span
                className="showed"
                onClick={(e) => setNewPassword(true)}
                id="newPassword"
              >
                <i className="fa-regular fa-eye"></i>
              </span>
            )}
          </div>
          <div className="mb-0">
            {messageShow ? (
              <div className={`password-strength ${validationMessage}`}>
                {message}
              </div>
            ) : null}
            <small className="mb-0">
              Hint: The password should be at least twelve characters long. To
              make it stronger, use upper and lower case letters, numbers, and
              symbols like ! " ? $ % ^ & ).
            </small>
          </div>
        </div>
        <div className="mb-1">
          <label htmlFor="confirmpassword" className="form-label">
            Confirm new password
            <span className="required">*</span>
          </label>
          <div className="position-relative confirm-password">
            <input
              type={confirmNewPassword ? "text" : "password"}
              className="form-control"
              id="confirmpassword"
              name="confirmpassword"
              placeholder="***********"
              value={submitForm.confirmpassword}
              onChange={hanldeChangeFileds}
            />
            {confirmNewPassword ? (
              <span
                className="hideed"
                id="confirmNewPassword"
                onClick={(e) => setConfirmNewPassword(false)}
              >
                <i className="fa-regular fa-eye-slash"></i>
              </span>
            ) : (
              <span
                className="showed"
                onClick={(e) => setConfirmNewPassword(true)}
                id="confirmNewPassword"
              >
                <i className="fa-regular fa-eye"></i>
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={
            submitForm.newpassword === submitForm.confirmpassword ? false : true
          }
        >
          save changes
        </button>
      </form>
    </div>
  );
};

export default MyAccount;

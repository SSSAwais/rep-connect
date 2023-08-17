"use client";
import React, { useState } from "react";
import "./shipping.css";
import { CountyList } from "@/data/countylist/CountyList";
const AddShipping = () => {
  const [shippingForm, setshippingForm] = useState({
    firstname: "",
    lastname: "",
    // compnayname: "",
    countryregion: "",
    towncity: "",
    streetaddres: "",
    state: "",
    zipcode: "",
  });

  const hanldeChanged = (e) => {
    setshippingForm({ ...shippingForm, [e.target.name]: e.target.value });
    // setValidated({ ...validated, [e.target.name]: true });
  };
  const [err, setErr] = useState([]);
  const hanldesubmit = (e) => {
    e.preventDefault();
    let error = [];
    for (let key in shippingForm) {
      if (!shippingForm[key]) {
        if (
          key === "firstname" ||
          key === "lastname" ||
          key === "countryregion" ||
          key === "towncity" ||
          key === "streetaddres" ||
          key === "state" ||
          key === "zipcode"
        ) {
          error.push(`${key} is a required field.`);
        }
      }
    }

    if (
      shippingForm.firstname &&
      shippingForm.lastname &&
      shippingForm.countryregion &&
      shippingForm.towncity &&
      shippingForm.streetaddres &&
      shippingForm.state &&
      shippingForm.zipcode
    ) {
      window.location.assign("/my-account/edit-address/");
    }
    setErr(error);
  };

  return (
    <aside className="add-shipping">
      <>
        {err.length > 0 ? (
          <div className="errors-dev d-flex justify-content-between align-items-center">
            <>
              <div className="error d-flex align-items-center">
                <div className="icon">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
                <ul>
                  {err.map((err, index) => {
                    return <li key={index}>{err}</li>;
                  })}
                </ul>
              </div>
              <div className="closed" onClick={() => setErr([])}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </>
          </div>
        ) : null}
      </>
      <h2 className="title">Shipping Address</h2>
      <form onSubmit={hanldesubmit}>
        <div className="fullname d-flex justify-content-between flex-column flex-md-row">
          <div className="form-row fullname-children">
            <label htmlFor="firstname" className="form-label">
              First Name <span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-control "
              id="firstname"
              name="firstname"
              placeholder="John"
              value={shippingForm.firstname}
              onChange={hanldeChanged}
            />
          </div>
          <div className="form-row fullname-children ">
            <label htmlFor="lastname" className="form-label">
              Last Name <span className="required">*</span>
            </label>
            <input
              type="text"
              className="form-control "
              id="lastname"
              name="lastname"
              placeholder="Doe"
              value={shippingForm.lastname}
              onChange={hanldeChanged}
            />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="compnayname" className="form-label">
            Company name (optional)
          </label>
          <input
            type="text"
            className="form-control "
            id="compnayname"
            name="compnayname"
            placeholder="John"
            value={shippingForm.compnayname}
            onChange={hanldeChanged}
          />
        </div>
        <div className="form-row">
          <label htmlFor="countryregion" className="form-label">
            Country / Region <span className="required">*</span>
          </label>
          <select
            name="countryregion"
            id="countryregion"
            className="form-select "
            value={shippingForm.countryregion}
            onChange={hanldeChanged}
          >
            {CountyList.map((e, index) => {
              return <option key={index}>{e}</option>;
            })}
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="towncity">
            Town / City <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-control "
            name="towncity"
            id="towncity"
            placeholder="Town City"
            value={shippingForm.towncity}
            onChange={hanldeChanged}
          />
        </div>
        <div className="form-row">
          <label htmlFor="streetaddres">
            Street Address <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-control "
            name="streetaddres"
            id="streetaddres"
            placeholder="House number and street name"
            value={shippingForm.streetaddres}
            onChange={hanldeChanged}
          />
        </div>
        <div className="form-row">
          <label htmlFor="state">
            State <span className="required">*</span>
          </label>
          <select
            name="state"
            id="state"
            className="form-select "
            value={shippingForm.state}
            onChange={hanldeChanged}
          >
            <option value="AGN">Agusan del Norte</option>
            <option value="AGS">Agusan del Sur</option>
            <option value="AKL">Aklan</option>
            <option value="ALB">Albay</option>
            <option value="ANT">Antique</option>
            <option value="APA">Apayao</option>
            <option value="AUR">Aurora</option>
            <option value="BAS">Basilan</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="towncity">
            Zip Code <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-control "
            name="zipcode"
            id="zipcode"
            placeholder="Zip Code"
            value={shippingForm.zipcode}
            onChange={hanldeChanged}
          />
        </div>
        <div className="form-row">
          <button className="place-order" type="submit">
            Place order
          </button>
        </div>
      </form>
    </aside>
  );
};

export default AddShipping;

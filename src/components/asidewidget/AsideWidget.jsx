"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./AsideWidget.css";
import img1 from "../../assets/images/download-category/ABD-Labs-General-0131-Icon.png";
const AsideWidget = () => {
  const [suggestList, setSuggestList] = useState([
    {
      name: "Candida Auris MicroGenDX Can Help – 0391",
      link: "candida-auris-microgendx-can-help-0391",
    },
    {
      name: "MicroGenDX Medicare Approved PLA Code – 0195",
      link: "microgendx-medicare-approved-pla-code-0195/",
    },
    {
      name: "ID Osteodiscitis MicroGenDX Can Help – 0390",
      link: "id-osteodiscitis-microgendx-can-help-0390/",
    },
    {
      name: "PCR is Not NGS – 0190",
      link: "pcr-is-not-ngs-0190/",
    },
    {
      name: "Now is the Time for NGS – 0193",
      link: "now-is-the-time-for-ngs-0193/",
    },
  ]);
  return (
    <aside className="AsideWidget">
      <div className="cart--section">
        <h3 className="widget--title">Cart</h3>
        <ul className="cart--listing">
          <li>
            <a
              href="/product-detail/testingid"
              target="_blank"
              className="link--cart--item"
            >
              ID Osteodiscitis MicroGenDX Can Help – 0390
            </a>
            <div className="img--cart--item">
              <Image src={img1} className="img-fluid" alt="d" />
              <span className="close--icon--cart">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>
          </li>
          <li>
            <a
              href="/product-detail/testingid"
              target="_blank"
              className="link--cart--item"
            >
              ID Osteodiscitis MicroGenDX Can Help – 0390
            </a>
            <div className="img--cart--item">
              <Image src={img1} className="img-fluid" alt="d" />
              <span className="close--icon--cart">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>
          </li>
          <li>
            <a
              href="/product-detail/testingid"
              target="_blank"
              className="link--cart--item"
            >
              ID Osteodiscitis MicroGenDX Can Help – 0390
            </a>
            <div className="img--cart--item">
              <Image src={img1} className="img-fluid" alt="d" />
              <span className="close--icon--cart">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>
          </li>
          <li>
            <a
              href="/product-detail/testingid"
              target="_blank"
              className="link--cart--item"
            >
              ID Osteodiscitis MicroGenDX Can Help – 0390
            </a>
            <div className="img--cart--item">
              <Image src={img1} className="img-fluid" alt="d" />
              <span className="close--icon--cart">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>
          </li>
          <li>
            <a
              href="/product-detail/testingid"
              target="_blank"
              className="link--cart--item"
            >
              ID Osteodiscitis MicroGenDX Can Help – 0390
            </a>
            <div className="img--cart--item">
              <Image src={img1} className="img-fluid" alt="d" />
              <span className="close--icon--cart">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>
          </li>
          <li>
            <a
              href="/product-detail/testingid"
              target="_blank"
              className="link--cart--item"
            >
              ID Osteodiscitis MicroGenDX Can Help – 0390
            </a>
            <div className="img--cart--item">
              <Image src={img1} className="img-fluid" alt="d" />
              <span className="close--icon--cart">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>
          </li>
        </ul>
        <div className="cart--view--detail">
          <strong>Subtotal : </strong>
          <a className="view-transaction" target="_blank" href="/cart">
            <span>&#11820;</span> View Transaction
          </a>
          <a className="cart-check-out-btn" target="_blank" href="/checkout">
            <span>&#11820;</span>
            Checkout
          </a>
        </div>
      </div>
      <div className="continue--shopping--section">
        <h3 className="widget--title"> contineu shopping</h3>
        <ul>
          <li>
            <a
              href="/product-category/request-office-hospital-kits/"
              target="_blank"
            >
              <span> standard kits</span>
            </a>
          </li>
          <li>
            <a
              href="/product-category/request-office-hospital-kits/"
              target="_blank"
            >
              <span> Individual Supplies</span>
            </a>
          </li>
          <li>
            <a
              href="/product-category/request-office-hospital-kits/"
              target="_blank"
            >
              <span> Pre-Filled Lab Req</span>
            </a>
          </li>
          <li>
            <a
              href="/product-category/request-office-hospital-kits/"
              target="_blank"
            >
              <span> Sales Materials</span>
            </a>
          </li>
          <li>
            <a
              href="/product-category/request-office-hospital-kits/"
              target="_blank"
            >
              <span>Branded Merchandise</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="other--suggestion--section">
        <h3 className="widget--title">Other Suggestions</h3>
        <ul>
          {suggestList.map((element, index) => {
            return (
              <li key={index}>
                <a href={`/product-detail/${element.link}`} className="list">
                  <Image src={img1} alt="demo" className="img-fluid" />
                  <h4 className="list--title">{element.name}</h4>
                </a>
              </li>
            );
          })}
          {/* <li>
            <a href="" className="list">
              <Image src={img1} alt="demo" className="img-fluid" />
              <h4 className="list--title">
                Candida Auris MicroGenDX Can Help – 0391
              </h4>
            </a>
          </li>
          <li>
            <a href="" className="list">
              <Image src={img1} alt="demo" className="img-fluid" />
              <h4 className="list--title">
                MicroGenDX Medicare Approved PLA Code – 0195
              </h4>
            </a>
          </li>
          <li>
            <a href="" className="list">
              <Image src={img1} alt="demo" className="img-fluid" />
              <h4 className="list--title">
                ID Osteodiscitis MicroGenDX Can Help – 0390
              </h4>
            </a>
          </li>
          <li>
            <a href="" className="list">
              <Image src={img1} alt="demo" className="img-fluid" />
              <h4 className="list--title">PCR is Not NGS – 0190</h4>
            </a>
          </li>
          <li>
            <a href="" className="list">
              <Image src={img1} alt="demo" className="img-fluid" />
              <h4 className="list--title">Now is the Time for NGS – 0193</h4>
            </a>
          </li> */}
        </ul>
      </div>
    </aside>
  );
};

export default AsideWidget;

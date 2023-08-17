"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import repconnect from "../../assets/images/logo/Rep-Connect-Logo-2021-2.svg";
import myacount from "../../assets/images/side-bar-my-account-img.png";
import "./Header.css";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../redux/slices/toggleSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
const Header = () => {
  const [collapse, setCollapse] = useState(true);
  const [collapse01, setCollapse01] = useState(true);

  const { toggle } = useSelector((redux) => redux.menuReducer);
  const dispatch = useDispatch();
  const hanldeCollapse = () => {
    setCollapse(!collapse);
  }
  const hanldeCollapse01 = () => {
    setCollapse01(!collapse01);
  }
  return (
    <header className="clinet-header">
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
      <div className="container-fluid">
        <div className="row align-items-center" style={{ padding: '15px' }}>
          <div className="col-md-5 col-sm-6 col-6 text-start">
            <div className="header--logo">
              <Link href="/">
                <Image
                  src={repconnect}
                  alt="repconnect logo"
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
          <div className="col-md-7 col-sm-6 col-6">
            <div className="header--right">
              <div
                className="header--burgur--icon desktop"
                onClick={() => {
                  dispatch(toggleMenu());
                }}
              >
                <i className="fa-solid fa-bars"></i>
              </div>
              <div className="bottom--cart">
                <div className="bottom--myaccount">
                  <Link href="/my-account">
                    <Image
                      src={myacount}
                      alt="my-account"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <Link href="/cart" className="bottom--cart">
                  <div className="bottom--cart--icon">
                    <i className="fa-solid fa-basket-shopping"></i>
                    <span> 2</span>
                  </div>
                  <div className="bottom--cart--price">$0.00</div>
                </Link>
              </div>
              <div
                className="header--burgur--icon responsive navbar-toggler"
                type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"
                onClick={() => {
                  dispatch(toggleMenu());
                }}
              >
                <i className="fa-solid fa-bars"></i>
              </div>


              <div className="bottom--search">
                <input
                  type="text"
                  placeholder="Enter your search"
                  className="form-control"
                />
                <span>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <div className="menu-items">
            <ul>
              <li> Rep Connect Home </li>
              <li onClick={hanldeCollapse} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup01" aria-controls="navbarNavAltMarkup01" aria-expanded="false" aria-label="Toggle navigation">
                <div className="header-collapse">
                  <div> Sales Representative <span> <i className="fa-solid fa-caret-right"></i> </span> </div>
                  <div>
                    {
                      collapse ? <i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>
                    }
                  </div>
                </div>
              </li>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup01">
                <div className="material-list">
                  <ul>
                    <li><Link href="/product-category/sales-material/" > <span> Order Printed Sales Meterails </span> </Link>  </li>
                    <li> <Link href="/downloadable-sales-material/"> <span> Downloadable Sales Material </span> </Link> </li>
                    <li> <Link href="/product-category/branded-merchandise/"><span> Order Branded Merchandise </span></Link></li>
                    <li> <Link href="/business-card-order-form/"><span> order Personalized Business Cards</span></Link> </li>
                    <li> <Link href="/name-tag-order-form/"><span> Order Personalized Name Tag </span></Link></li>
                    <li> <Link href="/downloadable-sales-material/orthopedic-sales-material-2/"><span> Orthopedic Sales Material </span></Link></li>
                    <li onClick={hanldeCollapse01} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup02" aria-controls="navbarNavAltMarkup02" aria-expanded="false" aria-label="Toggle navigation">
                      <div className="header-collapse">
                        <div>
                          Working with Hospitals
                        </div>
                        <div className="collapse-icon">
                          {collapse01 ? <i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}
                        </div>
                      </div>
                    </li>
                    <div className="collapse navbar-collapse second-list" id="navbarNavAltMarkup02">
                      <ul>
                        <li><Link href="/hospital-contracting"><span> Hospital Contracting </span></Link></li>
                        <li><Link href="/how-to-bill-a-hospital"><span> How to Bill a Hospital </span></Link></li>
                        <li><Link href="/how-to-set-up-a-va-hospital"><span> How to Set UP a VA Hospital </span></Link></li>
                      </ul>
                    </div>
                    <li> Conference Material </li>
                  </ul>
                </div>
              </div>
              <li> <Link href="/request-kits-and-supplies/"><span> Order Kits & Supplies </span></Link></li>
              <li> <Link href="/setting-up-an-office-in-service"><span> In-Service Checklist</span> </Link> </li>
              <li> <Link target="blank" href="https://microgendx.quickbase.com/db/main?a=SignIn&_c=wbzquy"><span> Quickbase CRM</span></Link> </li>
              <li>  <Link target="blank" href="https://www.concursolutions.com/nui/signin?targetURL=%2FExpense%2FClient%2Fdefault.asp%3F"><span> SAP Concur </span></Link> </li>
              <li> <Link href="/microgen-dx-university" ><span> MicroGenDX University </span></Link></li>
              <li> <Link href="/mdx-podcasts"><span> Podcasts </span> </Link> </li>
              <li> <Link href="/" ><span> Caroline Fife's BLOG </span> </Link> </li>
            </ul>
            <hr/>
            <ul>
              <li> <Link href="/profile"><span> My Profile</span> </Link> </li>
              <li> <Link href="/microgendex-insider/"><span> MicrogenDX Insider </span> </Link></li>
              <li> <Link  href="/compliance"><span>Compliance </span> </Link></li>
              <li> <Link href="/"><span> Company Org Chart </span> </Link></li>
              <li> <Link href="/"><span> EmployeeConnect</span> </Link> </li>
              <li>  Logout</li>
            </ul>
          </div>
        </div>
      </div>
      {/* </nav> */}

    </header>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect } from "react";
import "./sidebar.css";
import mircogendx from "../../assets/images/logo/MicroGenDX-2020-logo.svg";
import myacount from "../../assets/images/side-bar-my-account-img.png";
import repconnect from "../../assets/images/logo/Rep-Connect-Logo-2021-2.svg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { product } from "@/redux/slices/productSlice";
import { cartItem } from "@/redux/slices/cartItem";
import { useMemo } from "react";
const Sidebar = () => {
  const { toggle } = useSelector((redux) => redux.menuReducer);
  const [DropDown, setDropDown] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const updating = useSelector((state) => state.updatingCart);

  useEffect(() => {
    dispatch(product());
    dispatch(cartItem());
  }, []);

  useMemo(() => {
    dispatch(cartItem());
  }, [updating.updating]);

  const state = useSelector((state) => state.cartItem.data);
  // const state = useSelector((state) => state.cartItem);
  const qty = state.reduce((t, c, i, ar) => t + c.quantity, 0);
  // TOTAL PRICE
  const totalprice = state.reduce((total, curValue, i, arr) => {
    return (total += curValue.sub_total);
  }, 0);

  const TotalPrice = () => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(totalprice);
  };

  const handleDropDown = (event) => {
    event.preventDefault();
    setDropDown(!DropDown);
  };

  const onClickLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    router.push("/login");
  };

  // useMemo(() => {}, [updating.updating]);
  // TOTAL QTY CHECK

  // console.log(state);

  return (
    <>
      <aside className={toggle ? "side--bar" : "side--bar hide"}>
        <div
          onClick={handleDropDown}
          className="layout"
          style={DropDown ? { display: "block" } : { display: "none" }}
        ></div>
        <div>
          <div className="sidebar--top">
            <div className="top--section--top">
              <Link href="/">
                <Image
                  src={repconnect}
                  alt="rep-connect"
                  className="img-fluid"
                />
              </Link>
            </div>
            <div className="sidebar--navigation">
              <nav>
                <ul>
                  <li>
                    <Link href="/" className="active">
                      <span>Rep Connect Home</span>
                    </Link>
                  </li>
                  <li className="drop-menu--side--bar">
                    <div className="sales" onClick={handleDropDown}>
                      Sales Resources
                      <i className="fa-solid fa-caret-right"></i>
                    </div>
                  </li>
                  <li>
                    <Link href="/request-kits-and-supplies/">
                      <span>Order Kits & Supplies</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/setting-up-an-office-in-service">
                      <span>In-Service Checklist</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="blank"
                      href="https://microgendx.quickbase.com/db/main?a=SignIn&_c=wbzquy"
                    >
                      <span>Quickbase CRM</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.concursolutions.com/nui/signin?targetURL=%2FExpense%2FClient%2Fdefault.asp%3F"
                      target="blank"
                    >
                      <span>SAP Concur</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/microgen-dx-university">
                      <span>MicroGenDX University</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/mdx-podcasts">
                      <span>Podcasts</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://carolinefifemd.com/?src=mgdx"
                      target="blank"
                    >
                      <span>Caroline Fife’s BLOG</span>
                    </Link>
                  </li>
                  <li className="profil--nav">
                    <Link href="/profile">
                      <span>My Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/microgendex-insider/">
                      <span>MicroGenDX Insider</span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/compliance">
                      <span>Compliance</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://employees.microgendx.com/profile/login/?redirect_to=https://employees.microgendx.com/download/company-org-chart/"
                      target="blank"
                    >
                      <span>Company Org Chart</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://employees.microgendx.com/profile/login/"
                      target="blank"
                    >
                      <span>Company Directory</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://employees.microgendx.com/profile/login/?redirect_to=https://employees.microgendx.com/"
                      target="blank"
                    >
                      <span>EmployeeConnect</span>
                    </Link>
                  </li>

                  <li onClick={(e) => onClickLogout(e)}>
                    <Link href="#">
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="top--section--bottom">
              <Link href="/">
                <Image
                  src={mircogendx}
                  alt="MicroGenDX"
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
          <div className="sidebar--bottom">
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
                  <span> {qty}</span>
                </div>
                <div className="bottom--cart--price">{TotalPrice()}</div>
              </Link>
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

        <div
          className="drop--down--menu"
          style={DropDown ? { display: "block" } : { display: "none" }}
        >
          <ul>
            <li>
              <Link href="/product-category/sales-material-680623061/">
                <span>Order Printed Sales Materials</span>
              </Link>
            </li>
            <li>
              <Link href="/downloadable-sales-material/">
                <span>Downloadable Sales Material</span>
              </Link>
            </li>
            <li>
              <Link href="/product-category/branded-merchandise-364989543/">
                <span>Order Branded Merchandise</span>
              </Link>
            </li>
            <li>
              <Link href="/business-card-order-form/">
                <span>Order Personalized Business Cards</span>
              </Link>
            </li>{" "}
            <li>
              <Link href="/name-tag-order-form/">
                <span>Order Personalized Name Tag</span>
              </Link>
            </li>
            <li>
              <Link href="/downloadable-sales-material/orthopedic-sales-material/">
                <span>Orthopedic Sales Material</span>
              </Link>
            </li>
            <li className="working--more--drop-down">
              <span className="working--more--icon">
                Working with Hospitals
              </span>
              <ul className="working--more--menu">
                <li>
                  <Link href="/hospital-contracting">
                    <span>Hospital Contracting</span>
                  </Link>
                </li>
                <li>
                  <Link href="/how-to-bill-a-hospital">
                    <span>How to Bill a Hospital</span>
                  </Link>
                </li>
                <li>
                  <Link href="/how-to-set-up-a-va-hospital">
                    <span>How to Set Up a VA Hospital</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="https://www.dropbox.com/sh/rpxdpwlvoa0xd0f/AAB9oL3kI1eVe4wuJuwuG9Vfa?dl=0"
                target="_blank"
              >
                <span>Conference Material</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import "./admin_sidebar.css";
import logo from "../../../assets/images/logo/Rep-Connect-Logo-2021-02-admin.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { adminSideBarOpned } from "@/redux/slices/adminSidebar";
import { productCategoy } from "@/redux/slices/productCategory";
const Admin_sidebar = ({ opend }) => {
  const pathname = usePathname();
  const [postMenu, setPostMenu] = useState([
    {
      name: "add new",
      link: "post-addnew",
    },
    {
      name: "category",
      link: "post-categories",
    },
    {
      name: "tags",
      link: "post-tags",
    },
    {
      name: "all",
      link: "/",
    },
  ]);
  const [productMenu, setProductMenu] = useState([
    {
      name: "add new",
      link: "product-addnew",
    },
    {
      name: "category",
      link: "product-categories",
    },
    {
      name: "tags",
      link: "product-tags",
    },
    {
      name: "all",
      link: "",
    },
  ]);

  const path = pathname.split("/")[3];
  const dashboardActive =
    pathname.split("/").length <= 2 && pathname.split("/")[1] === "admin"
      ? "active"
      : null;

  const [dropdown1, setDropDown1] = useState(false);
  const [dropdown2, setDropDown2] = useState(false);
  const [dropdown3, setDropDowm3] = useState(false);
  const [dropdown4, setDropDowm4] = useState(false);
  const [dropdown5, setDropDowm5] = useState(false);
  const hanldeDropwDown1 = () => {
    setDropDown1(!dropdown1);
    setDropDown2(false);
    setDropDowm3(false);
    setDropDowm4(false);
    setDropDowm5(false);
  };
  const hanldeDropwDown2 = () => {
    setDropDown1(false);
    setDropDown2(!dropdown2);
    setDropDowm3(false);
    setDropDowm4(false);
    setDropDowm5(false);
  };
  const handleDropDown3 = () => {
    setDropDown1(false);
    setDropDown2(false);
    setDropDowm3(!dropdown3);
    setDropDowm4(false);
    setDropDowm5(false);
  };
  const handleDropDown4 = () => {
    setDropDown1(false);
    setDropDown2(false);
    setDropDowm3(false);
    setDropDowm4(!dropdown4);
    setDropDowm5(false);
  };
  const handleDropDown5 = () => {
    setDropDown1(false);
    setDropDown2(false);
    setDropDowm3(false);
    setDropDowm4(false);
    setDropDowm5(!dropdown5);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productCategoy());
  }, []);
  return (
    <>
      <div
        className={`side-bar-overlay-admin ${
          opend ? "overlay-open" : "overlay-close"
        }`}
        onClick={() => dispatch(adminSideBarOpned())}
      ></div>
      <aside className={`admin-sidebar ${opend ? "closed" : "opend"}`}>
        <div className="logoo">
          <Image src={logo} alt="rep-coonect" className="img-fluid" />
        </div>
        <div className="menu-list">
          <ul>
            <li className="short-head">
              <span>Main</span>
            </li>
            <li>
              <Link href="/admin" className={dashboardActive}>
                <span className="d-icon">
                  <i className="fa-solid fa-gauge"></i>
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="short-head">
              <span>Pages</span>
            </li>
            <li className="list-menu">
              <span
                className={`title-name ${dropdown3 ? "active" : null}`}
                onClick={handleDropDown3}
              >
                <span className="d-icon">
                  <i className="fa-solid fa-camera"></i>
                </span>
                <span>Media</span>
                {dropdown3 ? (
                  <span className=" right-side-icon w-100 text-end">
                    <i className="fa-solid fa-angle-up"></i>
                  </span>
                ) : (
                  <span className=" right-side-icon w-100 text-end">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                )}
              </span>
              {dropdown3 && (
                <ol className="more-list ">
                  <li>
                    <Link
                      href={`/admin/media/liberay`}
                      className={`${
                        path === "product-addnew" ? "active" : null
                      }`}
                    >
                      Liberay
                    </Link>
                  </li>
                </ol>
              )}
            </li>
            <li className="list-menu">
              <span
                className={`title-name ${dropdown1 ? "active" : null}`}
                onClick={hanldeDropwDown1}
              >
                <span className="d-icon">
                  <i className="fa-solid fa-eye-dropper"></i>
                </span>
                <span> post</span>
                {dropdown1 ? (
                  <span className=" right-side-icon w-100 text-end">
                    <i className="fa-solid fa-angle-up"></i>
                  </span>
                ) : (
                  <span className=" right-side-icon w-100 text-end">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                )}
              </span>
              {dropdown1 && (
                <ol className="more-list ">
                  <li>
                    <Link
                      href={`/admin/post/post-addnew`}
                      className={`${path === "post-addnew" ? "active" : null}`}
                    >
                      add new
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/admin/post/post-categories`}
                      className={`${
                        path === "post-categories" ? "active" : null
                      }`}
                    >
                      category
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/admin/post/tags`}
                      className={`${path === "post-tags" ? "active" : null}`}
                    >
                      tags
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`/admin/post/`}
                      className={`${
                        pathname.split("/")[2] === "post" && path === undefined
                          ? "active"
                          : null
                      }`}
                    >
                      all post
                    </Link>
                  </li>
                </ol>
              )}
            </li>
            <li className="list-menu">
              <span
                className={`title-name ${dropdown2 ? "active" : null}`}
                onClick={hanldeDropwDown2}
              >
                <span className="d-icon">
                  <i className="fa-brands fa-product-hunt"></i>
                </span>
                <span>product</span>
                {dropdown2 ? (
                  <span className=" right-side-icon w-100 text-end">
                    <i className="fa-solid fa-angle-up"></i>
                  </span>
                ) : (
                  <span className=" right-side-icon w-100 text-end">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                )}
              </span>
              {dropdown2 && (
                <ol className="more-list ">
                  <li>
                    <Link
                      href={`/admin/product/product-addnew`}
                      className={`${
                        path === "product-addnew" ? "active" : null
                      }`}
                    >
                      add new
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/admin/product/product-categories`}
                      className={`${
                        path === "product-categories" ? "active" : null
                      }`}
                    >
                      category
                    </Link>
                  </li>

                  <li>
                    <Link
                      href={`/admin/product/`}
                      className={`${
                        pathname.split("/")[2] === "product" &&
                        path === undefined
                          ? "active"
                          : null
                      }`}
                    >
                      all Product
                    </Link>
                  </li>
                </ol>
              )}
            </li>

            <li className="list-menu">
              <span
                className={`title-name ${dropdown4 ? "active" : null}`}
                onClick={handleDropDown4}
              >
                <span className="d-icon">
                  <i className="fa-solid fa-briefcase"></i>
                </span>
                <span>Order</span>
                {dropdown4 ? (
                  <span className=" right-side-icon w-100 text-end">
                    <i className="fa-solid fa-angle-up"></i>
                  </span>
                ) : (
                  <span className=" right-side-icon w-100 text-end">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                )}
              </span>
              {dropdown4 && (
                <ol className="more-list ">
                  <li>
                    <Link
                      href={`/admin/order`}
                      className={`${path === "order" ? "active" : null}`}
                    >
                      Order
                    </Link>
                  </li>
                </ol>
              )}
            </li>
            <li className="list-menu">
              <span
                className={`title-name ${dropdown5 ? "active" : null}`}
                onClick={handleDropDown5}
              >
                <span className="d-icon">
                  <i className="fa-solid fa-briefcase"></i>
                </span>
                <span>Comments</span>
                {dropdown5 ? (
                  <span className=" right-side-icon w-100 text-end">
                    <i className="fa-solid fa-angle-up"></i>
                  </span>
                ) : (
                  <span className=" right-side-icon w-100 text-end">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                )}
              </span>
              {dropdown5 && (
                <ol className="more-list ">
                  <li>
                    <Link
                      href={`/admin/comments`}
                      className={`${path === "comments" ? "active" : null}`}
                    >
                      Comments
                    </Link>
                  </li>
                </ol>
              )}
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Admin_sidebar;

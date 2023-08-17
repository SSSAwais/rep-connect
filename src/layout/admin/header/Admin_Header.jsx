import React from "react";
import user_placeholder from "../../../assets/images/admin/user-default.jpg";
import Image from "next/image";
import "./admin-header.css";
import { useDispatch, useSelector } from "react-redux";
import { adminSideBarOpned } from "@/redux/slices/adminSidebar";
import Link from "next/link";
const Admin_Header = () => {
  const dispatch = useDispatch();
  const { opend } = useSelector((state) => state.adminSideBarOpned);
  const hanldeCloseSidrbar = () => {
    dispatch(adminSideBarOpned());
  };
  const hanldeOpendSidrbar = () => {
    dispatch(adminSideBarOpned());
  };
  return (
    <header className="admin-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-4 col-4 admin-left-side">
            {opend ? (
              <span className="head-icon" onClick={hanldeOpendSidrbar}>
                <i className="fa-solid fa-xmark"></i>
              </span>
            ) : (
              <span className="head-icon" onClick={hanldeCloseSidrbar}>
                <i className="fa-solid fa-list-ul"></i>
              </span>
            )}
          </div>
          <div className="col-md-8 col-8 text-md-end admin-right-side">
            <ul className="d-flex justify-content-end align-items-center">
              <li>
                <h4 className="title">Ghulam Rasool</h4>
              </li>
              <li>
                <span
                  className="user-icon"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Image
                    src={user_placeholder}
                    alt="admin"
                    width={35}
                    height={35}
                    className="img-fluid"
                  />
                </span>
                <ul className="dropdown-menu profile-drop-down-menu">
                  <li>
                    <Link href="/admin/profile" className="menu-list">
                      <span className="icon">
                        <i className="fa-regular fa-circle-user"></i>
                      </span>
                      <span className="text">Profie</span>
                    </Link>
                  </li>

                  <li>
                    <a className="menu-list">
                      <span className="icon">
                        <i className="fa-solid fa-right-from-bracket"></i>
                      </span>
                      <span className="text">Logout</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Admin_Header;

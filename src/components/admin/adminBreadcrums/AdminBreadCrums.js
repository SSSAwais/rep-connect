import React from "react";
import "./AdminBreadCrums.css";
const AdminBreadCrums = (props) => {
  const { mainTitle, linksTitle, mainMiniTitle } = props;
  return (
    <>
      <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
        <h1 className="page_title fw-semibold fs-18 mb-0">{mainTitle}</h1>
        <div className="ms-md-1 ms-0">
          <nav>
            <ol className="breadcrumb mb-0 align-items-center">
              <li className="breadcrumb-item">
                <a href="#" className="linkTitle">
                  {linksTitle}
                </a>
              </li>
              <li
                className="breadcrumb-item active mini_title"
                aria-current="page"
              >
                {mainMiniTitle}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
};

export default AdminBreadCrums;

import React, { useEffect } from "react";
import "./navtabs.css";
const NavTabs = (props) => {
  const { tabName, _handletagsName, id } = props;

  return (
    <>
      <button
        className={` ${id === id ? "nav-link" : "active"}`}
        id="pills-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-home"
        type="button"
        role="tab"
        aria-controls="pills-home"
        aria-selected="true"
        onClick={() => _handletagsName(id)}
      >
        {tabName}
      </button>
    </>
  );
};

export default NavTabs;

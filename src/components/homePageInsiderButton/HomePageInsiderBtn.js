import React from "react";
import "./HomePageInsiderBtn.css";
const HomePageInsiderBtn = (props) => {
  const { title, link } = props;
  return (
    <>
      <a href={link} type="button" className="surver_btn">
        {title}
      </a>
    </>
  );
};

export default HomePageInsiderBtn;

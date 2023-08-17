import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="client-side-footer">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-8">
            <div className="copyright">
              <p>© 2023 MicroGenDX Rep Connect. All Rights Reserved.</p>
            </div>
          </div>
          <div className="col-4 text-end">
            <a className="down-arrow" href="#">
              <i className="fa-solid fa-angle-up"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

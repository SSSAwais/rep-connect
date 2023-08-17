import React from "react";
import "./complianceAsideWidget.css";
import complianceMic from "../../assets/images/global/HIPAA-Compliance-Badge.png";
import Image from "next/image";
const ComplianceAsideWidget = () => {
  return (
    <aside className="ComplianceAsideWidget">
      <div className="compliance__badge">
        <Image src={complianceMic} className="img-fluid" alt="complanice" />
      </div>
      <div className="compliance__event_link">
        <ul>
          <li>
            <a href="" className="read___btn">
              <span>READ: MicroGenDX Compliance Program</span>
            </a>
          </li>
          <li>
            <a href="" className="read___test">
              <span>TEST: MicroGenDX Compliance Program</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>
                Guide to Clinical Lab Sales & Marketing Compliance 2021
              </span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Sales Compliance Training 2020</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Sales Compliance Training Assessment</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Master Guide to Clinical Lab Compliance 2021</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>
                Master Guide to Clinical Lab Compliance 2019-2020 Edition
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default ComplianceAsideWidget;

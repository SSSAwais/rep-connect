import Image from "next/image";
import React from "react";
import './DashBoardCustomer.css'
const DashboardCustomer = (props) => {
  const { customerName, username, time, icon } = props;
  return (
    <>
      <a href="#" className="border-0 mail_anchor">
        <div className="d-flex align-items-top">
          <Image
            className="avatar icon_size avatar-md me-3 my-auto"
            src={icon}
            alt="Image description"
          />
          <div className="mt-0">
            <p className="mb-1 fw-semibold customerNAmeee">{customerName}</p>
            <p className="mb-0 fs-11 text-success userNamee">{username}</p>
          </div>
          <span className="ms-auto fs-12">
            <span className="float-end text-muted fw-semibold userTimee">{time}</span>
          </span>
        </div>
      </a>
    </>
  );
};

export default DashboardCustomer;

import React, { useState } from "react";
import "./Revenue.css";
const RevenueList = (props) => {
  const { process, invoice, date } = props;
  return (
    <>
      <div className="revenue_wrapper d-flex justify-content-between">
        <div className="revenue_left_wrapper">
          <div className="process">
            <p
              className={
                process === "Processing"
                  ? "blue"
                  : process === "Sent"
                  ? "green"
                  : process === "Pending"
                  ? "yellow"
                  : ""
              }
            >
              {process}
            </p>
          </div>
        </div>
        <div className="revenue_right_wrapper">
          <div>
            <h6>Invoice #{invoice}</h6>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RevenueList;

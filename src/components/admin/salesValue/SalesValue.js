import React from "react";
import "./SalesValue.css";
import CircleChart from "../circleChart/CircleChart";
const SalesValue = () => {
  return (
    <>
      <div className="card custom-card">
        <div className="card_header justify-content-between">
          <div className="card-title">
            <h4>Sale Value</h4>
          </div>
        </div>
        <div className="card-body pb-0 px-2">
          <div id="sale-value" className="p-3">
            <CircleChart />
          </div>
          <div className="row pt-4">
            <div className="col-xl-12 border-bottom pb-3 text-center d-flex flex-wrap justify-content-center">
              <span className="fw-semibold ms-2 text-primary px-4 increase_per">
                60% Increase in sale value since last week
              </span>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 border-end p-3 text-center">
              <p className="mb-1 increased__">Sale Items</p>
              <h5 className="mb-1 fw-semibold">567</h5>
              <p className="fs-11 text-muted mb-0 sales_items_increease">
                Increased
                <span className="text-success ms-2">
                  <i className="ri-arrow-up-s-line me-2 fw-bold align-middle d-inline-block"></i>
                  <span className="badge bg-success-transparent text-success fs-11">
                    0.9%
                  </span>
                </span>
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 p-3 text-center">
              <p className="mb-1 increased__">Sale Revenue</p>
              <h5 className="mb-1 fw-semibold">$11,197</h5>
              <p className="fs-11 text-muted mb-0 sales_items_increease">
                Profit
                <span className="text-success ms-2">
                  <i className="ri-arrow-down-s-line me-2 fw-bold align-middle d-inline-block"></i>
                  <span className="badge bg-success-transparent text-success fs-11">
                    0.15%
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesValue;

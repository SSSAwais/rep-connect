import React from "react";
import "./RecentTransections.css";
const RecentTransection = (props) => {
  const { transectionCategoryTitle, miniTransTitle, amount, date } = props;
  return (
    <>
      <div className="card-body p-0 cards_bodyes">
        <div className="list-group">
          <a href="#" className="border-0 main__links">
            <div className="list-group-item border-0">
              <div className="d-flex align-items-start">
                <div className="w-100">
                  <div className="d-flex align-items-top justify-content-between">
                    <div className="mt-0">
                      <p className="mb-0 fw-semibold trasns_heading">
                        <span className="me-3">{transectionCategoryTitle}</span>
                      </p>
                      <span className="mb-0 fs-12 text-muted mini_texyted">
                        {miniTransTitle}
                      </span>
                    </div>
                    <div className="text-muted fs-12 text-center"></div>
                    <span className="ms-auto amount">
                      <span className="text-end text-danger d-block">
                        {amount}
                      </span>
                      <span className="text-end text-muted d-block fs-12 date">
                        {date}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default RecentTransection;

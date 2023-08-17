import React from "react";
import "./ProfitableCat.css";
const ProfitableCat = (props) => {
  const { numbering, categiryName, profits } = props;
  return (
    <>
      <div className="d-flex align-items-center profite_wrapper">
        <div className="me-2">
          <span className=" listing_number">{numbering}</span>
        </div>
        <div className="flex-fill">
          <p className="mb-0 fw-semibold cateeegoryName">{categiryName}</p>
        </div>
        <div>
          <span className="text-success">{profits}</span>
        </div>
      </div>
    </>
  );
};

export default ProfitableCat;

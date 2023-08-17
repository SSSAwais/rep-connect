import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./BillingDetail.css";
const BillingDetail = (props) => {
  const { titleInvoice, grossIcon, grossRate, amount, days } = props;
  return (
    <>
      <Link href="#" className="invoiceListing_anchor">
        <div className="invoices_main_wrapper d-flex justify-content-between">
          <div className="invoice_left_wrapper ">
            <h4>{titleInvoice}</h4>
            <p>
              <span>
                <i className="fa-solid fa-arrow-up"></i>
                {/* <Image src={grossIcon} alt="" /> */}
              </span>
              {grossRate}
            </p>
          </div>
          <div className="invoice_right_wrapper">
            <h4>+ {amount}</h4>
            <p>{days}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BillingDetail;

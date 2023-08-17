import React from "react";
import "./edit-address.css";
import Link from "next/link";
const MyAddress = () => {
  return (
    <div className="edit-addresses">
      <p className="mb-3">
        The following addresses will be used on the checkout page by default.
      </p>
      <div className="billing-address">
        <div className="header-address d-flex justify-content-between align-items-center">
          <h2 className="title"> billing address</h2>
          <Link href="/my-account/edit-address/billing" className="edit-add">
            Edit
          </Link>
        </div>
        <div className="forms">
          <p className="not-set">
            <span>
              <i className="fa-solid fa-book"></i>
            </span>
            You have not set up this type of address yet.
          </p>
          <div className="bill-more-address">
            <p>Shpping Address</p>
          </div>
        </div>
      </div>
      <div className="shipping-address">
        <div className="header-address d-flex justify-content-between align-items-center">
          <h2 className="title"> Shipping address</h2>
          <Link href="/my-account/edit-address/shipping" className="edit-add">
            Add
          </Link>
        </div>
        <div className="forms">
          <p className="not-set">
            <span>
              <i className="fa-solid fa-book"></i>
            </span>
            You have not set up this type of address yet.
          </p>
          <div className="ship-more-address">
            <p>Shpping Address</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAddress;

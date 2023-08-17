import React from "react";
import "./myorder.css";
import Link from "next/link";
const MyOrders = () => {
  return (
    <div className="orders">
      <div className="d-flex justify-content-between align-items-center flex-md-row flex-column ">
        <p>No order has been made yet</p>
        <Link href="/shop" className="browse-product">
          browse product
        </Link>
      </div>
    </div>
  );
};

export default MyOrders;

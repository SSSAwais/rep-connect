"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import BreadCrumCart from "@/components/cart/CartBreakCrum/BreadCrumCart";
import CheckoutBillingDetail from "@/components/checkout/checkoutBillingDetail/CheckoutBillingDetail";
import React from "react";
import style from "./style.module.css";
import withAuth from "@/utils/auth";
const page = () => {
  return (
    <>
      <BreadCrum
        breadHeading="Checkout"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "Checkout",
            link: "/",
          },
        ]}
      />
      <section className={style.checkout_page}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <BreadCrumCart />
            </div>
          </div>
          <div className={"row mt-5"}>
            <div className="col-12 p-0">
              <CheckoutBillingDetail />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);

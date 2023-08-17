"use client";

import BreadCrum from "@/components/breadCrum/BreadCrum";
import BreadCrumCart from "@/components/cart/CartBreakCrum/BreadCrumCart";
import React, { useEffect } from "react";
import style from "./style.module.css";
import withAuth from "@/utils/auth";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3500);
  }, []);
  return (
    <>
      <BreadCrum
        breadHeading="Order Received"
        subPage="Order Received"
        pageName="Home"
      />
      <section className={style.order_recived}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <BreadCrumCart />
            </div>
          </div>
        </div>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p>
                Hi, we have received your order. We will validate the order and
                will take necessary steps to move forward.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(page);

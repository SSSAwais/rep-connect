"use client";
import ViewOrder from "@/components/admin/orders/view/ViewOrder";
import { token } from "@/hooks/token";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import loader from "../../../../../assets/images/admin/product-loader.gif";
import Image from "next/image";
import Spinner from "@/components/spinner/Spinner";

const page = ({ params }) => {
  const { id } = params;

  const [viewOrder, setViewOrder] = useState(null);

  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  const [isErrorMessage, setIsErrorMessage] = useState(null);
  const singleOrderGet = () => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/order/${id}`, {
      method: "GET",
      headers: {
        "x-auth-token": token(),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === 1) {
          setViewOrder(data.order.order);
          setIsLoading(false);
          setIsError(false);
        } else {
          setIsLoading(false);
          setIsErrorMessage(data.error.message);
        }
      });
  };
  useEffect(() => {
    singleOrderGet();
  }, []);

  return (
    <div className="order-view pb-4">
      <div className="container-fluid">
        <div className={`row row-title-equal-spacing`}>
          <div className="col-6">
            <div className="left">
              <h4 className="product-title">Order Detail</h4>
            </div>
          </div>
          <div className="col-6 text-end">
            <div className="right">
              <Link className="back-to-product" href="/admin/order">
                <span>
                  <i className="fa-solid fa-arrow-left-long"></i>
                </span>
                back to orders
              </Link>
            </div>
          </div>
        </div>
        <div className="row position-relative">
          {isloading ? (
            <Spinner />
          ) : // <div className="">
          //   <Image src={loader} width={50} height={50} alt="loader" />
          // </div>
          isError ? (
            <p>{isErrorMessage}</p>
          ) : (
            <ViewOrder data={viewOrder} />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;

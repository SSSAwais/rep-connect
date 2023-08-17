"use client";
import ViewProduct from "@/components/admin/products/ViewProduct/ViewProduct";
import { product_api } from "@/redux/slices/singleProduct";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const page = ({ params }) => {
  const { id } = params;

  const disptch = useDispatch();
  useEffect(() => {
    disptch(product_api(id));
  }, []);
  return (
    <section className="add-product">
      <div className="container-fluid">
        <div className={`row row-title-equal-spacing`}>
          <div className="col-6">
            <div className="left">
              <h4 className="product-title">View Product</h4>
            </div>
          </div>
          <div className="col-6 text-end">
            <div className="right">
              <Link className="back-to-product" href="/admin/product">
                <span>
                  <i className="fa-solid fa-arrow-left-long"></i>
                </span>
                back to products
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ViewProduct />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

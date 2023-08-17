"use client";
import AddProductForm from "@/components/admin/products/addProductForm/AddProductForm";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const state = useSelector((state) => state.productCategory);

  return (
    <section className="add-product">
      <div className="container-fluid">
        <div className={`row row-title-equal-spacing`}>
          <div className="col-6">
            <div className="left">
              <h4 className="product-title">Add New Product</h4>
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
            <AddProductForm data={state} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

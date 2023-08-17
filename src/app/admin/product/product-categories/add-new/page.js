"use client";

import AddProductCategory from "@/components/admin/product-categories/AddProductCategory";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="product-categories">
      <div className="container-fluid">
        <div className={`row row-title-equal-spacing`}>
          <div className="col-6">
            <div className="left">
              <h4 className="product-title">Add new Category </h4>
            </div>
          </div>
          <div className="col-6 text-end">
            <div className="right">
              <Link
                className="back-to-product"
                href="/admin/product/product-categories"
              >
                <span>
                  <i className="fa-solid fa-arrow-left-long"></i>
                </span>
                back to list
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <AddProductCategory />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

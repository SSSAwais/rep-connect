"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const ProductCategory = dynamic(
  () => import("@/components/admin/product-categories/ProductCategory"),
  { ssr: false }
);

const page = () => {
  return (
    <section className="product-categories">
      <div className="container-fluid">
        <div className={`row row-title-equal-spacing`}>
          <div className="col-6">
            <div className="left">
              <h4 className="product-title">Product Categories</h4>
            </div>
          </div>
          <div className="col-6 text-end">
            <div className="right">
              <Link
                className="back-to-product"
                href="/admin/product/product-categories/add-new"
              >
                <span>
                  <i className="fa-solid fa-plus"></i>
                </span>
                Add new category
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ProductCategory />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

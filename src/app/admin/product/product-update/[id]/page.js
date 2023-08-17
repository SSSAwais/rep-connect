"use client";
import UpdateProduct from "@/components/admin/products/updateProduct/UpdateProduct";
import { product_api } from "@/redux/slices/singleProduct";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import loader from "../../../../../assets/images/admin/product-loader.gif";
import Image from "next/image";
import Spinner from "@/components/spinner/Spinner";
const page = ({ params }) => {
  const { id } = params;
  const disptch = useDispatch();
  useEffect(() => {
    disptch(product_api(id));
  }, []);
  const state = useSelector((state) => state);

  return (
    <section className="add-product">
      <div className="container-fluid">
        <div className={`row row-title-equal-spacing`}>
          <div className="col-6">
            <div className="left">
              <h4 className="product-title">Update Product</h4>
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
            {state.singleproduct.loading ? (
              <Spinner />
            ) : state.singleproduct.data.length !== undefined ? (
              <h4>Invalid Id {id}</h4>
            ) : (
              <UpdateProduct
                allCategory={state.productCategory}
                product={state.singleproduct}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

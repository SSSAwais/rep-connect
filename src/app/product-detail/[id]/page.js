"use client";

import AsideWidget from "@/components/asidewidget/AsideWidget";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import ProductDetail from "@/components/product_detail/ProductDetail";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import withAuth from "@/utils/auth";
import { product_api } from "@/redux/slices/singleProduct";
import { useDispatch, useSelector } from "react-redux";
const page = ({ params }) => {
  const { id } = params;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.singleproduct);

  useEffect(() => {
    dispatch(product_api(id));
  }, []);

  return (
    <>
      {state.data.length < 1 ? (
        <BreadCrum breadHeading="Shop" pagess={[{ page: "Home", link: "/" }]} />
      ) : (
        <BreadCrum
          breadHeading="Shop"
          pagess={[
            { page: "Home", link: "/" },
            {
              page: state.loading ? null : state.data?.category.name,
              link: state.loading
                ? null
                : `/product-category/${state.data?.category.slug}`,
            },
            { page: state.loading ? null : state.data?.name, link: "/" },
          ]}
        />
      )}

      <section className={style.product_deail_page}>
        {/* <div className="container-xxl">
          <div className="row">
            <div className="col-12 p-0">
              <div className={style.product_deail_wrapper}> */}
        <ProductDetail item={state} />
        {/* <AsideWidget /> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </section>
    </>
  );
};

export default withAuth(page);

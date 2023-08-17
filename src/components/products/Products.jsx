"use client";
import React, { useEffect, useState } from "react";
import ProductItem from "../categoryproducts/ProductItem/ProductItem";
import ml90 from "../../assets/images/products/90mL-Urine-Collection-Cup-800x800.png";
import afb from "../../assets/images/products/afb-sputum-4.jpg";
import basic from "../../assets/images/products/basicSTI-provider-22.jpg";
import blood from "../../assets/images/products/blood.jpg";
import covid from "../../assets/images/products/covid-flu-22.jpg";
import explant from "../../assets/images/products/explant-breast.jpg";
import gitest from "../../assets/images/products/gi-pcr.jpg";
import hpv from "../../assets/images/products/mensKEY-provider-22.jpg";
import marsa from "../../assets/images/products/mrsa-test-service.jpg";
import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import { product } from "@/redux/slices/productSlice";
import Spinner from "../spinner/Spinner";

const Products = () => {
  // const [productItems, setProductItems] = useState([
  //   {
  //     name: "90mL Urine Collection Cup",
  //     img: ml90,
  //   },
  //   {
  //     name: "AFB Test Service",
  //     img: afb,
  //   },
  //   {
  //     name: "Basic STI Panel",
  //     img: basic,
  //   },
  //   {
  //     name: "Blood Test Service",
  //     img: blood,
  //   },
  //   {
  //     name: "COVID+FLU Test Service",
  //     img: covid,
  //   },
  //   {
  //     name: "Explant Breast Evaluation Test Service",
  //     img: explant,
  //   },
  //   {
  //     name: "Full STI Panel",
  //     img: afb,
  //   },
  //   {
  //     name: "GI Test Service",
  //     img: gitest,
  //   },
  //   {
  //     name: "HPV Panel",
  //     img: hpv,
  //   },
  //   {
  //     name: "HSV Panel",
  //     img: afb,
  //   },
  //   {
  //     name: "MensKEY Complete (Urine + Semen)",
  //     img: afb,
  //   },
  //   {
  //     name: "MRSA | PCR Only",
  //     img: marsa,
  //   },
  // ]);
  const state = useSelector((state) => {
    return state.product;
  });

  return (
    <div className="products-shop">
      <div className="container-xxl">
        <div className="row">
          {state.loading ? (
            <Spinner />
          ) : (
            state.data.map((item, index) => {
              return <ProductItem item={item} key={index} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

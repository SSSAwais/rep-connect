"use client";
import React, { useState } from "react";
import "./categoryproduct.css";
import img1 from "../../assets/images/download-category/ABD-Labs-General-0131-Icon.png";
import img2 from "../../assets/images/download-category/ABD-Labs-Urology-0132-Icon.png";
import img3 from "../../assets/images/download-category/COVIDFLURSV-Pediatrics-0177-Icon.png";
import img4 from "../../assets/images/download-category/COVIDFLURSV-qPCR-Testing-Icon.png";
import img6 from "../../assets/images/download-category/Healthcare-COVID-19-Testing-Icon.png";
import img7 from "../../assets/images/download-category/Patient-COVID-Portal-Instructions-Tear-Off-0144.png";
import ProductItem from "./ProductItem/ProductItem";
import Image from "next/image";
import { useSelector } from "react-redux";
import Loading from "../cart/CartItems/Loading/Loading";
import NoProduct from "./norpoduct/NoProduct";

const CategoryProducts = () => {
  const [productList, setProductList] = useState([
    {
      img: img1,
      name: "AFB DNA Testing – 0006",
    },
    {
      img: img2,
      name: "Application of Topical Antibiotic Gels – 0118",
    },
    {
      img: img3,
      name: "Are Cultures Reliable Card – 0066",
    },
    {
      img: img4,
      name: "Be Wary of Unscrupulous PCR Labs – 0154",
    },
    {
      img: img2,
      name: "Benefits of NGS in Primary Care – 0047",
    },
    {
      img: img6,
      name: "Candida Auris MicroGenDX Can Help – 0391",
    },
    {
      img: img7,
      name: "CAP Scorecard with Competitor Comparison – 0055",
    },
    {
      img: img2,
      name: "CAP Scorecard with Process Mapping – 0056",
    },
    {
      img: img3,
      name: "Culture PCR NGS Comparison – 0050",
    },
    {
      img: img6,
      name: "Diagnostic Report Comparison – 0052",
    },
    {
      img: img1,
      name: "Endocarditis NGS Supplement – 0042",
    },
    {
      img: img4,
      name: "ENT CRS NGS vs Culture Study – 0093",
    },
  ]);

  const state = useSelector((state) => state.categoryWisePro);
  return (
    <div className="product_listing">
      <div className="container-xxl">
        <div className="row product--items--wrapper">
          {state.loading ? (
            <div className="col text-center">
              <Loading />
            </div>
          ) : state.data.length >= 1 ? (
            state.data.map((item, index) => {
              return <ProductItem item={item} key={index} />;
            })
          ) : (
            <NoProduct />
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;

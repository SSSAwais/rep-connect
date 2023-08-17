"use client";
import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import img1 from "../../assets/images/download-category/MicroGenDX-COVID-19-Testing-Icon.png";
import Image from "next/image";
import ProductItem from "../categoryproducts/ProductItem/ProductItem";
import img4 from "../../assets/images/download-category/ABD-Labs-General-0131-Icon.png";
import img2 from "../../assets/images/download-category/ABD-Labs-Urology-0132-Icon.png";
import img3 from "../../assets/images/download-category/COVIDFLURSV-Pediatrics-0177-Icon.png";

import { useProduct } from "@/hooks/product";
import { ToastContainer } from "react-toastify";
import { updatingState } from "@/redux/slices/updateCart";
import { useDispatch } from "react-redux";
import { cartItem } from "@/redux/slices/cartItem";
import Loading from "../cart/CartItems/Loading/Loading";
import ImageGallary from "./images/ImageGallary";
import Link from "next/link";
import Spinner from "../spinner/Spinner";

const ProductDetail = (props) => {
  const item = props.item;
  const [qty, setQty] = useState(1);
  const [defalutLoading, setDefaultLoading] = useState(false);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([
    {
      img: img4,
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
  ]);
  const incrementQty = () => {
    setQty(qty + 1);
  };
  const decrementQty = () => {
    setQty(qty > 1 ? qty - 1 : 1);
  };

  const hanldeAddToCart = () => {
    useProduct(qty, item.data);
    setDefaultLoading(true);
    setloading(true);
    dispatch(updatingState());
    dispatch(cartItem());
  };

  const [loadging, setLoaging] = useState(false);
  // SETIME OUT FUNCTION LOADING FALSE
  setTimeout(() => {
    setloading(false);
  }, [3000]);
  const [coverImage, setCoverImage] = useState(null);

  const TotalPrice = (total) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(total);
  };

  return (
    <>
      {item.loading ? (
        <Spinner />
      ) : item.data.length < 1 ? (
        <h2>Worng product id </h2>
      ) : (
        <div className="container-xxl">
          <div className="row">
            <div className="col-xl-3 col-md-4 col-12">
              <ImageGallary item={item.data} />
            </div>
            <div className="col-xl-9 col-md-8 col-12">
              <div className="deail--product--desc">
                <h4 className="title--clas">{item.data.name}</h4>
                <div className="pricing-check">
                  <h5 className="price regular">
                    Price :
                    <span>
                      {TotalPrice(item.data.sale_price) === 0
                        ? TotalPrice(item.data.regular_price)
                        : TotalPrice(item.data.sale_price)}
                    </span>
                  </h5>
                  {/* <h5 className="price sale">
                        Sale Price :{" "}
                        <span>{TotalPrice(item.data.sale_price)}</span>
                      </h5> */}
                </div>
                <p>
                  {item.data.short_disc}
                  {/* This test service is available to United States residents
                      only. All submitted lab requisition forms must have a
                      qualified* physician’s signature on the lab requisition
                      form or the submitted sample will not be run/processed at
                      the MicroGenDX Laboratory. To learn more
                      <a href="#">CLICK HERE</a> */}
                </p>
                {/* <p className="stock out-of-stock">
                    This product is currently out of stock and unavailable.
                  </p> */}

                <div className="product--add--cart d-flex align-items-center">
                  <div className="quanitiy--detail">
                    <span
                      className="quantitay-change minus"
                      onClick={decrementQty}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </span>
                    <input
                      type="text"
                      value={qty}
                      className="product-qantity"
                      onChange={(e) => setQty(e.target.value)}
                    />
                    <span
                      className="quantitay-change minus"
                      onClick={incrementQty}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </div>
                  <div className="quanity-btn">
                    <button
                      className={`add--to--cart`}
                      onClick={hanldeAddToCart}
                      style={{
                        opacity: loading ? "0.5" : 1,
                      }}
                      disabled={loading ? true : false}
                    >
                      Add to cart
                      {defalutLoading ? (
                        <>
                          {loading ? (
                            <span className="loader"></span>
                          ) : (
                            <span className="btn--icon">
                              <i className="fa-solid fa-check"></i>
                            </span>
                          )}
                        </>
                      ) : null}
                    </button>
                    <ToastContainer
                      style={{
                        fontSize: "15px",
                      }}
                    />
                  </div>
                </div>
                <div className="single--product--detail--tabs">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item sss--gr--single--deail">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Description
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <ul
                            className="nav nav-pills discription--tabs--product--detail justify-content-start"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                                tabIndex={0}
                              >
                                What does this test look for?
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                                tabIndex={0}
                              >
                                Test Type
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="pills-contact-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-contact"
                                type="button"
                                role="tab"
                                aria-controls="pills-contact"
                                aria-selected="false"
                                tabIndex={0}
                              >
                                Main infections
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="pills-sample-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-sample"
                                type="button"
                                role="tab"
                                aria-controls="pills-sample"
                                aria-selected="false"
                                tabIndex={0}
                              >
                                Sample type
                              </button>
                            </li>
                          </ul>
                          <div className="tab-content" id="pills-tabContent">
                            <div
                              className="tab-pane fade show active"
                              id="pills-home"
                              role="tabpanel"
                              aria-labelledby="pills-home-tab"
                              tabIndex="0"
                            >
                              <h5>Gastrointestinal qPCR Panel (PCR Only)</h5>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-profile"
                              role="tabpanel"
                              aria-labelledby="pills-profile-tab"
                              tabIndex="0"
                            >
                              Test Type
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-contact"
                              role="tabpanel"
                              aria-labelledby="pills-contact-tab"
                              tabIndex="0"
                            >
                              Main infections
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-sample"
                              role="tabpanel"
                              aria-labelledby="pills-sample-tab"
                              tabIndex="0"
                            >
                              sample
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item sss--gr--single--deail">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Additional information
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <table>
                            <tbody>
                              <tr>
                                <th className="woocommerce---label">
                                  <span>Weight</span>
                                </th>

                                <td className="woocommerce---value">
                                  <span> 1 lbs</span>
                                </td>
                              </tr>
                              <tr>
                                <th className="woocommerce---label">
                                  <span>Weight</span>
                                </th>
                                <td className="woocommerce---value">
                                  <span>12.25 × 10.9 × 1.5 in</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-12">
                  <div className="related-product-single-page">
                    <h3 className="title">Related products</h3>
                  </div>
                </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;

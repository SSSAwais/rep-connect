import React from "react";
import "./view.css";
import Gallarys from "./Gallary/Gallarys";
import { useSelector } from "react-redux";
import Spinner from "@/components/spinner/Spinner";
const ViewProduct = () => {
  const state = useSelector((state) => state.singleproduct);

  return (
    <div className="view-product-admin">
      {state.loading ? (
        <Spinner />
      ) : state.data.length !== undefined ? (
        <h2>Invalid Id</h2>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-4 col-12">
              <Gallarys data={state.data} />
            </div>
            <div className="col-xl-9 col-md-8 col-12">
              <div className="view-right">
                <div className="view-product-admin">
                  <h4 className="title">{state.data.name}</h4>

                  <div className="detail">
                    <p className="price">
                      <span className="ttt">Price :</span>{" "}
                      <span className="q">${state.data.regular_price}</span>
                    </p>
                    <p className="price">
                      <span className="ttt">Sale Price :</span>{" "}
                      <span className="q">${state.data.sale_price}</span>
                    </p>

                    <p className="price">
                      <span className="ttt">stock Quantity :</span>{" "}
                      <span className="q">{state.data.stock_quantity}</span>
                    </p>

                    <p className="price">
                      <span className="ttt">Category :</span>{" "}
                      <span className="q">{state.data.category.name}</span>
                    </p>
                  </div>
                  <p className="short-discription">{state.data.short_disc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row admin-view-disc">
            <div className="col">
              <div className="product-view-description-admin">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item admin-description-item">
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
                      className="accordion-collapse collapse admin-descri-body"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <ul
                          className="nav nav-pills admin-disc-btns justify-content-start"
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
                        <div
                          className="tab-content admin-disc-content"
                          id="pills-tabContent"
                        >
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
                  <div className="accordion-item admin-description-item">
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
                      className="accordion-collapse collapse admin-descri-body"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <table>
                          <tbody>
                            <tr>
                              <th className="woocommerce---label">
                                <span>Weight </span>
                              </th>

                              <td className="woocommerce---value">
                                <span> 1 lbs</span>
                              </td>
                            </tr>
                            <tr>
                              <th className="woocommerce---label">
                                {" "}
                                <span>Weight </span>
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
        </div>
      )}
    </div>
  );
};

export default ViewProduct;

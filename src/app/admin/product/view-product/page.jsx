import Link from "next/link";
import React from "react";

const page = () => {
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
          <div className="col"></div>
        </div>
      </div>
    </section>
  );
};

export default page;

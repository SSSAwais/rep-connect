"use client";
import UpdateProCategory from "@/components/admin/product-categories/updateProductCategory";
import Spinner from "@/components/spinner/Spinner";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const { id } = params;
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const hanldeGetCategoryApi = () => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/product-category/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        if (data.success === 1) {
          setData(data.data.category);
        }
        if (data.success === 0) {
          setIsError(true);
          setErrorMessage(data.error.message);
        }
      });
  };
  useEffect(() => {
    hanldeGetCategoryApi();
  }, []);

  return (
    <section className="product-categories">
      <div className="container-fluid">
        <div className={`row row-title-equal-spacing`}>
          <div className="col-6">
            <div className="left">
              <h4 className="product-title">Product Update</h4>
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
            {isLoading ? (
              <Spinner />
            ) : isError ? (
              <p className="error-message">{errorMessage}</p>
            ) : (
              <UpdateProCategory data={data} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

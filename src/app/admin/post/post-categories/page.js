"use client";
import React, { useState } from "react";
import style from "./PostCategory.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";

const PostCategoryList = dynamic(
  () => import("@/components/admin/postCategoryList/PostCategoryList"),
  {
    ssr: false,
  }
);
const Page = () => {
  return (
    <>
      <section className={style.postTags_wrapper}>
        <div className="container-fluid">
          <div className={`row ${style.title_row} my-4`}>
            <div className="col-6">
              <div className="left">
                <h4 className="product-title">Post Categories</h4>
              </div>
            </div>
            <div className="col-6">
              <div className=" text-end d-block">
                <Link
                  href="/admin/post/add-category-list"
                  className={`add_new_btn`}
                >
                  <span>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                  Add Category
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <PostCategoryList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

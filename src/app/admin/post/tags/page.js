"use client";
import React, { useState } from "react";
import style from "./Tags.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";

const PostTagsList = dynamic(
  () => import("@/components/admin/postTagsList/PostTagsList"),
  {
    ssr: false,
  }
);
const Page = () => {
  return (
    <>
      <section className={style.tagsWrapper}>
        <div className="container-fluid">
          <div className={`row ${style.title_row} my-4`}>
            <div className="col-6">
              <div className="left">
                <h4 className="product-title">Post Tags</h4>
              </div>
            </div>
            <div className="col-6">
              <div className=" text-end d-block">
                <Link href="/admin/post/add-tag-list" className={`add_new_btn`}>
                  <span>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                  Add New Tag
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <PostTagsList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

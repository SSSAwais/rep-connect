"use client";
import React, { useEffect } from "react";
import style from "./AllPost.module.css";
import { useDispatch } from "react-redux";
import dynamic from "next/dynamic";
import Link from "next/link";
import AdminBreadCrums from "@/components/admin/adminBreadcrums/AdminBreadCrums";
const PostTableList = dynamic(
  () => import("@/components/admin/postListTable/PostTableList"),
  {
    ssr: false,
  }
);
const Page = () => {
  const dispatch = useDispatch();
  return (
    <>
      <section className={style.allPostWrapper}>
        <div className="container-fluid">
          <div className={`row ${style.title_row} `}>
            <div className="col-6">
              <div className="left">
                <h4 className="product-title">Post List</h4>
              </div>
            </div>
            <div className="col-6">
              <div className=" text-end d-block">
                <Link href="/admin/post/post-addnew/" className={`add_new_btn`}>
                  <span>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                  Add New Post
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <PostTableList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

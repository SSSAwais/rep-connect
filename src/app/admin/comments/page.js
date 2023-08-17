"use client";
import AdminBreadCrums from "@/components/admin/adminBreadcrums/AdminBreadCrums";
import React, { useState, Suspense } from "react";
import style from "./Comments.module.css";
import dynamic from "next/dynamic";

const CommentsTable = dynamic(
  () => import("@/components/admin/commentsTable/CommentsTable"),
  {
    ssr: false,
  }
);
const page = () => {
  const [selectedOptions, setSelectedOptions] = useState("");
  const _handleSelectOption = (e) => {
    console.log(e.target.value, "selected Values");
    setSelectedOptions({
      ...selectedOptions,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      {/* <Suspense fallback={<Loading />}> */}
      <div className={style.comments_wrapper}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <AdminBreadCrums
                mainTitle="Comments"
                linksTitle="Dashboard"
                mainMiniTitle="Comments"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-4">
              <div className={style.selectBox}>
                <select
                  className={`form-select ${style.selectB}`}
                  aria-label="Default select example"
                  onChange={_handleSelectOption}
                  name="filters"
                >
                  <option value="all">All</option>
                  <option value="mine">Mine</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="spam">Spam</option>
                  <option value="trash">Trash</option>
                </select>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-3">
              <button className={style.filterButton}>Filter</button>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <CommentsTable />
            </div>
          </div>
        </div>
      </div>
      {/* </Suspense> */}
    </>
  );
};

export default page;

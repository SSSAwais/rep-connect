"use client";
import Link from "next/link";
import React from "react";
import style from "./postUpdateTag.module.css";
import { useRouter } from "next/navigation";
const page = () => {

  const _handleTagForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row my-4">
            <div className="col-6">
              <div className="left">
                <h4 className="product-title">Tags</h4>
              </div>
            </div>
            <div className="col-6">
              <div className="text-end d-block">
                <Link
                  href="/admin/post/post-tags"
                  className="add_new_btn border-none tagSubmit"
                  type="submit"
                >
                  <span>
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                  Back to Tag list
                </Link>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={_handleTagForm}>
          <div className="row">
            <div className="col-12">
              <div className={style.tagssName}>
                <label>Tag Name</label>
                <input className="form-control" name="tagName" />
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-12">
              <div className={style.tagDispp}>
                <label>Discription</label>
                <textarea
                  className="form-control"
                  name="tagDisp"
                  rows="4"
                ></textarea>
              </div>
            </div>
          </div>
          <div className={`row ${style.tagRow}`}>
            <div className="col-12 ">
              <div className="text-end d-block">
                <button
                  className={`add_new_btn border-none ${style.tagSubmit}`}
                  type="submit"
                >
                  <span>
                    <i className="fa-sharp fa-solid fa-sd-card"></i>
                  </span>
                  Update Tag
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default page;

"use client";
import React, { useState } from "react";
import style from "./AddTagList.module.css";
import axios from "axios";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const page = () => {
  const [tagData, setTagData] = useState({
    tagName: "",
    tagDisp: "",
  });
  const [error, setError] = useState(false);
  const _handleChange = (e) => {
    setTagData({
      ...tagData,
      [e.target.name]: e.target.value,
    });
  };

  const _handleTagForm = (e) => {
    e.preventDefault();
    if (tagData.tagName.length == 0 && tagData.tagDisp.length == 0) {
      setError(true);
    } else {
      axios
        .post("https://anxious-foal-shift.cyclic.app/api/tag", {
          name: tagData.tagName,
          description: tagData.tagDisp,
        })
        .then((resp) => {
          console.log(resp.data);
          if (resp.data.success == 1) {
            setError(false);
            toast.success(resp.data.message);
            setTagData(resp.data.data);
            setTagData({
              tagName: "",
              tagDisp: "",
            });
          } else {
            toast.error(resp.data.message);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <section className={style.tag_wrapper}>
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
                  href="/admin/post/tags"
                  className={`add_new_btn border-none ${style.tagSubmit}`}
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
          <form onSubmit={_handleTagForm}>
            <div className="row">
              <div className="col-12">
                <div className={style.tagssName}>
                  <label>Tag Name</label>
                  <input
                    className="form-control"
                    value={tagData.tagName}
                    onChange={_handleChange}
                    name="tagName"
                  />
                  {error && tagData.tagName.length <= 0 ? (
                    <p className={style.errorMsg}>Please Enter Name</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12">
                <div className={style.tagDispp}>
                  <label>Discription</label>
                  <textarea
                    className="form-control"
                    value={tagData.tagDisp}
                    onChange={_handleChange}
                    name="tagDisp"
                    rows="4"
                  ></textarea>
                  {error && tagData.tagDisp.length <= 0 ? (
                    <p className={style.errorMsg}>Please Enter Description</p>
                  ) : (
                    ""
                  )}
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
                      <i className="fa-solid fa-plus"></i>
                    </span>
                    Add Tag
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default page;

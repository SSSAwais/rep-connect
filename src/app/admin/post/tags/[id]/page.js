"use client";
import Link from "next/link";
import style from "../Tags.module.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const page = ({ params }) => {
  const { id } = params;

  const [getSingleData, setGetSingleData] = useState({
    name: "",
    description: "",
  });
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");

  const _handleChange = (e) => {
    setGetSingleData({
      ...getSingleData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    axios
      .get(`https://anxious-foal-shift.cyclic.app/api/tag/${id}`)
      .then((resp) => {
        setGetSingleData({
          name: resp.data.data.tag.name,
          description: resp.data.data.tag.description,
        });
        console.log(resp.data.data.tag);
      })
      .catch((err) => console.log(err));
  }, []);

  const _handleTagForm = (e) => {
    e.preventDefault();
    const body = {
      name: getSingleData.name,
      description: getSingleData.description,
    };
    if (getSingleData.name.trim() == "") {
      setError("Please Enter Name of tag");

      // toast.error(`Input can never be empty`);
    } else {
      axios
        .put(`https://anxious-foal-shift.cyclic.app/api/tag/${id}`, body)
        .then((resp) => {
          toast.success(`Tag Updated`);
          setError("");
          console.log(resp);
        })
        .catch((err) => console.log(err));
    }
  };
  console.log(getSingleData, "<=/////////////");
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row my-4">
            <div className="col-6">
              <div className="left">
                <h4 className="product-title">Update Post Tag</h4>
              </div>
            </div>
            <div className="col-6">
              <div className="text-end d-block">
                <Link
                  href="/admin/post/tags"
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
                <label>
                  Tag Name <span className={style.mandatory}>*</span>
                </label>
                <input
                  className="form-control"
                  name="name"
                  value={getSingleData.name}
                  onChange={_handleChange}
                />
                {error && (
                  <p className={style.errorMessage}>Please Enter the name</p>
                )}
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-12">
              <div className={style.tagDispp}>
                <label>Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  rows="4"
                  value={getSingleData.description}
                  onChange={_handleChange}
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
                  Update Tag
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
      <ToastContainer />
    </>
  );
};
export default page;

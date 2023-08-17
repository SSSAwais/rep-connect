"use client";
import { useEffect, useState } from "react";
import style from "../../Tags.module.css";
import Link from "next/link";
import axios from "axios";
const page = ({ params }) => {
  const { id } = params;
  const [getSingleData, setGetSingleData] = useState({
    name: "",
    description: "",
  });
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
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row my-4">
            <div className="col-6">
              <div className="left">
                <h4 className="product-title">View Post Tag</h4>
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

        <div className="row">
          <div className="col-12">
            <div className={style.tagssName}>
              <label>Tag Name</label>
              <input
                className="form-control"
                name="name"
                value={getSingleData.name}
                disabled
              />
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
                disabled
              ></textarea>
            </div>
          </div>
        </div>
        {/* <div className={`row ${style.tagRow}`}>
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
          </div> */}
      </section>
    </>
  );
};
export default page;

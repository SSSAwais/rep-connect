"use client";
import Image from "next/image";
import style from "./postViewDetail.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Spinner from "@/components/spinner/Spinner";
const page = ({ params }) => {
  const [singleCategory, setSingleCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = params;
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://anxious-foal-shift.cyclic.app/api/post-category/${id}`)
      .then((resp) => {
        setLoading(false);
        setSingleCategory(resp.data.data.category);
        console.log(resp.data.data.category.cover_image.image.url);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(singleCategory, "<===============");
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section>
          <div className="container-fluid">
            <div className={`row ${style.title_row} my-4`}>
              <div className="col-6">
                <div className="left">
                  <h4 className="product-title">View Categories</h4>
                </div>
              </div>
              <div className="col-6">
                <div className="text-end d-block">
                  <Link
                    href="/admin/post/post-categories"
                    className={`add_new_btn border-none ${style.submit_}`}
                    type="submit"
                  >
                    <span>
                      <i className="fa-solid fa-arrow-left"></i>
                    </span>
                    Back to Category List
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className={style.form_category}>
                  <div className="row">
                    <div className="col-lg-12">
                      <label>Name of Category</label>
                      <input
                        className="form-control"
                        type="text"
                        name="catTitle"
                        value={singleCategory.name}
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className={style.image_}>
                  <label>Image</label>
                  <div>
                    <Image
                      src={singleCategory?.cover_image?.image.url}
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default page;

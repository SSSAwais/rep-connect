"use client";
import Link from "next/link";

import { DownAbleMaterial } from "@/data/downables/DownableMaterial";
import { useState } from "react";
import testing from "../../../assets/images/download-category/Patient-COVID-Portal-Instructions-Tear-Off-0144.png";
import style from "./style.module.css";
import Image from "next/image";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth";
const Page = ({ params }) => {
  const { slug } = params;

  const [downloadAbleMaterial, setDownloadAbleMaterial] = useState(
    DownAbleMaterial.filter((item) => item.category === slug)
  );
  let headingname = slug.split("-").join(" ");
  const [filtering, setFiltering] = useState({
    seachKeyword: "",
    orderBy: "",
    order: "",
  });
  const applyFilter = (e) => {
    setFiltering({ ...filtering, [e.target.name]: e.target.value });
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
    console.log(filtering);
  };
  return (
    <>
      <BreadCrum
        breadHeading={headingname}
        pagess={[
          { page: "Home", link: "/" },
          { page: slug, link: "/" },
        ]}
      />
      <section className={style.download_wrapper}>
        <div className="container-xxl">
          <form className={style.form_fitler} onSubmit={hanldeSubmit}>
            <div className="row">
              <div className="col-xxl-6 col-lg-5 col-12">
                <input
                  placeholder="Search Keyword"
                  value={filtering.seachKeyword}
                  className="form-control"
                  name="seachKeyword"
                  onChange={applyFilter}
                />
              </div>
              <div className="col-xxl-2 col-lg-2 col-md-4 col-sm-4">
                <select
                  name="orderBy"
                  value={filtering.orderBy}
                  className="custom-select form-select"
                  onChange={applyFilter}
                >
                  <option value="date" disabled="disabled">
                    Order By:
                  </option>
                  <option value="date">Publish Date</option>
                  <option value="title">Title</option>
                  <option value="update_date">Update Date</option>
                  <option value="downloads">Downloads</option>
                  <option value="views">Views</option>
                </select>
              </div>
              <div className="col-xxl-2 col-lg-2 col-md-4 col-sm-4">
                <select
                  name="order"
                  className="custom-select form-select"
                  onChange={applyFilter}
                  value={filtering.order}
                >
                  <option value="desc" disabled="disabled">
                    Order:
                  </option>
                  <option value="desc">Descending</option>
                  <option value="asc">Ascending</option>
                </select>
              </div>
              <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-4">
                <button className={style.filter_bttn}>Apply Filter</button>
              </div>
            </div>
          </form>
          <div className="row">
            {downloadAbleMaterial.length >= 1 ? (
              downloadAbleMaterial.map((item, index) => {
                return (
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    key={index}
                  >
                    <div className={style.down_cart_wrapp}>
                      <div className={style.down_cart_img_wrap}>
                        <Image
                          src={item.img}
                          alt="demo name"
                          className="img-fluid"
                        />
                      </div>
                      <div className={style.down_cart_content_wrap}>
                        <div className={style.title_cart}>
                          <Link href={`/downloads/${item.productLink}`}>
                            <h3> {item.name}</h3>
                          </Link>
                        </div>
                        <div className={style.body_cart}>
                          <span>
                            <i className="fa-solid fa-hard-drive"></i>
                            3.91 MB
                          </span>
                          <span>
                            <i className="fa-solid fa-clone"></i>1 file(s)
                          </span>
                        </div>
                        <div className={style.downloadBtn}>
                          <a href="" download={true}>
                            download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-lg-4 col-md-6 col-12">
                <div className={style.down_cart_wrapp}>
                  <div className={style.down_cart_img_wrap}>
                    <Image
                      src={testing}
                      alt="demo name"
                      className="img-fluid"
                    />
                  </div>
                  <div className={style.down_cart_content_wrap}>
                    <div className={style.title_cart}>
                      <Link href="/downloads/covid-we-detect-omicron-0202">
                        <h3> abd-labs-general-0131 for testing mern stack </h3>
                      </Link>
                    </div>
                    <div className={style.body_cart}>
                      <span>
                        <i className="fa-solid fa-hard-drive"></i>
                        3.91 MB
                      </span>
                      <span>
                        <i className="fa-solid fa-clone"></i>1 file(s)
                      </span>
                    </div>
                    <div className={style.downloadBtn}>
                      <a
                        href="https://repconnect.blaksheepdev.com/download/covid-we-detect-omicron-0202/?wpdmdl=19555&refresh=6405bb7baf0be1678097275"
                        download={true}
                      >
                        download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(Page);

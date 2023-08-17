"use client";
import React, { useEffect, useState } from "react";
import "./blogfilter.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import axios from "axios";
import CategoryItem from "../categories/Categoriesitem/CategoryItem";
import Spinner from "@/components/spinner/Spinner";
const BlogFilters = () => {
  const [dynamicName, setDynamicName] = useState([]);
  const [dynamicTags, setDynamicTags] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [all, setAll] = useState([]);

  useEffect(() => {
    //////////category get api
    setLoading(true);

    axios
      .get(`${process.env.NEXT_PUBLIC_URL}api/post-category/`)
      .then((resp) => {
        setDynamicName(resp.data.data.category);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    //////////tag get api

    axios
      .get(`${process.env.NEXT_PUBLIC_URL}api/tag`)
      .then((resp) => {
        setDynamicTags(resp.data.data.tag);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    //////////filter get api

    axios
      .post(`${process.env.NEXT_PUBLIC_URL}api/post/filter`, {
        name: "all",
      })
      .then((resp) => {
        setAll(resp.data.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    //////////author get api

    axios
      .get(`${process.env.NEXT_PUBLIC_URL}api/author`)
      .then((resp) => {
        setAuthors(resp.data.data.author);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [tabs, setTab] = useState(0);
  const pathname = usePathname();
  const activePath = pathname.split("/");
  const [filterTabs, setFilterTabs] = useState([
    {
      name: (
        <React.Fragment>
          <i className="fa-regular fa-paste" />
          <span>Categories </span>
          <i className="fa-solid fa-caret-down" />
        </React.Fragment>
      ),
      // data: dynamicName?.map((e) => {
      data: [
        "AAHKS COMMITTEE",
        "AMERICAN ASSOCIATION OF HIP AND KNEE SURGEONS",
        "AUA NEWS",
        "bacteria",
        "Consensus Guidelines Book",
        "Curtis Nickels",
        "Dr. Nickels",
        "hear from your peers",
        "orthopedics",
        "Outages",
        "Parvizi",
        "Pugliese",
        "quorum sensing",
        "sales",
        "sales materials",
        "sample goals",
        "trifolds",
        "urology",
        "urology journals",
      ].map((e) => {
        let nameOfCategegory = e;
        return (
          <li
            key={e}
            className={nameOfCategegory === activePath[2] ? "active" : null}
          >
            <Link href={`/category/${nameOfCategegory}`}>{e}</Link>
          </li>
        );
      }),
    },
    {
      name: (
        <React.Fragment>
          <i className="fa-solid fa-tag" /> <span>Tags</span>
          <i className="fa-solid fa-caret-down" />
        </React.Fragment>
      ),
      data: [
        "AAHKS COMMITTEE",
        "AMERICAN ASSOCIATION OF HIP AND KNEE SURGEONS",
        "AUA NEWS",
        "bacteria",
        "Consensus Guidelines Book",
        "Curtis Nickels",
        "Dr. Nickels",
        "hear from your peers",
        "orthopedics",
        "Outages",
        "Parvizi",
        "Pugliese",
        "quorum sensing",
        "sales",
        "sales materials",
        "sample goals",
        "trifolds",
        "urology",
        "urology journals",
      ].map((e) => {
        let nameOfTags = `${e.toLowerCase().split(" ").join("-")}`;
        return (
          <li
            key={e}
            className={nameOfTags === activePath[2] ? "active" : null}
          >
            <Link href={`/tag/${e.toLowerCase().split(" ").join("-")}`}>
              {e}
            </Link>
          </li>
        );
      }),
    },
    {
      name: (
        <React.Fragment>
          <i className="fa-solid fa-user" /> <span>Authors</span>
          <i className="fa-solid fa-caret-down" />
        </React.Fragment>
      ),
      data: [
        "John-Paul White",
        "jrcompagno",
        "MicroGenDX Admin",
        "Niccole Diaz",
      ].map((e) => {
        let nameOfAuthor = `${e.toLowerCase().split(" ").join("-")}`;
        return (
          <li
            key={e}
            className={nameOfAuthor === activePath[2] ? "active" : null}
          >
            <Link href={`/author/${e.toLowerCase().split(" ").join("-")}`}>
              {e}
            </Link>
          </li>
        );
      }),
    },
  ]);
  console.log(pathname, "<===========");

  return (
    <section className="custom-filters-tab">
      <div className="container-xxl">
        <div className="row">
          <div className="col filter-column">
            <div className="main-filter d-flex justify-content-between flex-column  flex-sm-row  ">
              <ul className="m-0 filter-list d-flex ">
                <li className="filtername">Filter by</li>
                {filterTabs.map((elem, ind) => {
                  return (
                    <li
                      key={ind}
                      onClick={() => setTab(ind + 1)}
                      className={`${tabs === ind + 1 ? "active" : "list"}`}
                    >
                      {elem.name}
                    </li>
                  );
                })}
              </ul>
              <div className="reset">
                <ul className="p-0 m-0">
                  <li>
                    <i className="fa-solid fa-xmark" />
                    <span>show all </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between">
              <div className="filter-tabs">
                {tabs === 1 ? (
                  <ul className="align-items-center filter-listeed">
                    {dynamicName?.map((item, index) => (
                      <li
                        key={index}
                        className={item.slug === activePath[2] ? "active" : ""}
                      >
                        <Link
                          href={`/category/${item.slug
                            .toLowerCase()
                            .split(" ")
                            .join("-")}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : tabs === 2 ? (
                  <ul className="align-items-center filter-listeed">
                    {dynamicTags?.map((e, idx) => {
                      return (
                        <li
                          key={idx}
                          className={e.slug === activePath[2] ? "active" : null}
                        >
                          <Link
                            href={`/tag/${e.slug
                              .toLowerCase()
                              .split(" ")
                              .join("-")}`}
                          >
                            {e.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : tabs === 3 ? (
                  <ul className="align-items-center filter-listeed">
                    {authors.map((e, idx) => {
                      return (
                        <li
                          key={idx}
                          className={e.slug === activePath[2] ? "active" : null}
                        >
                          {/* <Link href={`/author/${e.slug}`}>{e.name}</Link> */}
                          <Link
                            href={`/author/${e.slug
                              .toLowerCase()
                              .split(" ")
                              .join("-")}`}
                          >
                            {e.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </div>
              {tabs === 0 ? null : (
                <div className="close-colum-filter" onClick={() => setTab(0)}>
                  <div className="close-filter-btn">
                    <i className="fa-solid fa-xmark" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="row">
              <div className="col">
                {pathname === "/category"
                  ? all.map((e, idx) => {
                      return <CategoryItem key={idx} item={e} />;
                    })
                  : null}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BlogFilters;

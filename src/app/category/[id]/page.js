"use client";
import BlogFilters from "@/components/blogs/Filter/BlogFilters";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import React, { useEffect, useState } from "react";
import blog1 from "../../../assets/images/blogs/blog-2.png";
import blo2 from "../../../assets/images/blogs/JBJS-Folder.jpg";
import CategoryItem from "@/components/blogs/categories/Categoriesitem/CategoryItem";
import withAuth from "@/utils/auth";
import axios from "axios";
import Spinner from "@/components/spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import categoryFilter from "@/redux/slices/categoryFilter";

const page = ({ params }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.categoryFilter);
  const [loading, setLoading] = useState(true);
  const { id } = params;
  // const withoutdash = id.split("-").join(" ");
  const [blog, setBlogs] = useState([]);
  useEffect(() => {
    setLoading(true);
    // dispatch(categoryFilter);
    axios
      .post(`${process.env.NEXT_PUBLIC_URL}api/post/filter`, {
        name: "category",
        slug: id,
      })
      .then((resp) => {
        setBlogs(resp.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <BreadCrum
        breadHeading={id}
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: id,
            link: "/",
          },
        ]}
      />

      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="category-page global-width-res">
            <BlogFilters />
            <div className="container-xxl">
              <div className="row">
                <div className="col">
                  <div className="categores-blog-wrapper">
                    {blog.length > 0 ? (
                      blog.map((e, i) => {
                        return <CategoryItem key={i} item={e} />;
                      })
                    ) : (
                      <p>Nothing to Show</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default withAuth(page);

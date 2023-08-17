"use client";
import BlogFilters from "@/components/blogs/Filter/BlogFilters";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth";
import React, { useEffect, useState } from "react";
import blog1 from "../../../assets/images/blogs/blog-2.png";
import blo2 from "../../../assets/images/blogs/JBJS-Folder.jpg";
import AuthorsItem from "@/components/blogs/Authors/Authorsitem/AuthorsItem";
import axios from "axios";
import Spinner from "@/components/spinner/Spinner";

const page = ({ params }) => {
  const { id } = params;
  // const withoutdash = id.split("-").join(" ");
  const [loading, setLoading] = useState(true);
  const [blog, setBlogs] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_URL}api/post/filter`, {
        name: "author",
        slug: id,
      })
      .then((resp) => {
        setBlogs(resp.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <BreadCrum
        breadHeading={"anncouncement"}
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "anncouncement",
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
                      blog?.map((e, i) => {
                        return <AuthorsItem key={i} item={e} />;
                      })
                    ) : (
                      <p>Nothing to show</p>
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

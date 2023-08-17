"use client";
import React from "react";
import withAuth from "@/utils/auth";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import BlogFilters from "@/components/blogs/Filter/BlogFilters";
const page = () => {
  return (
    <>
      <BreadCrum
        breadHeading="Categories"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "Categories",
            link: "/",
          },
        ]}
      />
      <BlogFilters />
    </>
  );
};

export default withAuth(page);

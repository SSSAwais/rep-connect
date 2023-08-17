"use client";
import React from "react";
import withAuth from "@/utils/auth";
import BreadCrum from "@/components/breadCrum/BreadCrum";
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
      page
    </>
  );
};

export default withAuth(page);

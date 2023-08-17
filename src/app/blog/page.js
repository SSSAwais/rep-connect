"use client";
import React from "react";
import withAuth from "@/utils/auth";
const page = () => {
  return (
    <div>
      <h4>Blog Page</h4>
    </div>
  );
};

export default withAuth(page);

"use client";

import React from "react";
import withAuth from "@/utils/auth";
const page = () => {
  return (
    <div>
      <h2>Product Catgroy </h2>
    </div>
  );
};

export default withAuth(page);

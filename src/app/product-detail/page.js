"use client";
import React from "react";
import withAuth from "@/utils/auth";
const page = () => {
  return <h5>this is product page</h5>;
};

export default withAuth(page);

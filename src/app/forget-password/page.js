"use client";

import React from "react";
import Forget_password from "@/components/forgetPassword/forget_password";
import withAuth from "@/utils/auth";
const porget_password = () => {
  return (
    <>
      <Forget_password />
    </>
  );
};

export default withAuth(porget_password);

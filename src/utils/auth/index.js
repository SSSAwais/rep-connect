"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from '../../assets/images/loader.gif';
const withAuth = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    useEffect(() => {
      let token = JSON.parse(localStorage.getItem("token"));
      if (!token) {
        return router.push("/login");
      }
    }, []);

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;

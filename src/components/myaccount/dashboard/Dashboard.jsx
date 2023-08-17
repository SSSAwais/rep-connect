"use client";
import Link from "next/link";
import React from "react";
import "./dashboard.css";
const Dashboard = () => {
  const hanldeLogout = () => {
    console.log("logout");
  };
  return (
    <div className="dashboard-content">
      <p>
        Hello <strong>grtesting</strong> (not <strong>grtesting</strong>?&nbsp;
        <span className="logoutbtn" onClick={hanldeLogout}>
          Log out
        </span>
        )
      </p>
      <p>
        From your account dashboard you can view your{" "}
        <Link href="/my-account/orders/">recent orders</Link>, manage your{" "}
        <Link href="/my-account/edit-address/">
          shipping and billing addresses
        </Link>
        , and &nbsp;
        <Link href="/my-account/edit-account/">
          edit your password and account details{" "}
        </Link>
        .
      </p>
    </div>
  );
};

export default Dashboard;

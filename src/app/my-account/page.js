import BreadCrum from "@/components/breadCrum/BreadCrum";
import Dashboard from "@/components/myaccount/dashboard/Dashboard";
import AccountNavigation from "@/components/myaccount/navigation/AccountNavigation";
import React from "react";

const Page = () => {
  return (
    <>
      <BreadCrum
        breadHeading="My Account"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "my account",
            link: "/",
          },
        ]}
      />
      <section className="my-account dashboard">
        <div className="container-xxl">
          <div className="row">
            <AccountNavigation />
            <div className="col-md-8">
              <Dashboard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

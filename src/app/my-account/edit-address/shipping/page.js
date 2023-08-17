import BreadCrum from "@/components/breadCrum/BreadCrum";
import AddShipping from "@/components/myaccount/edit-address/shipping/shipping";
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
      <section className="my-address my-account">
        <div className="container-xxl">
          <div className="row">
            <AccountNavigation />
            <div className="col-md-8">
              <AddShipping />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

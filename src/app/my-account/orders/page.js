import BreadCrum from "@/components/breadCrum/BreadCrum";
import AccountNavigation from "@/components/myaccount/navigation/AccountNavigation";
import MyOrders from "@/components/myaccount/orders/MyOrders";
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
      <section className="order my-account">
        <div className="container-xxl">
          <div className="row">
            <AccountNavigation />
            <div className="col-md-8">
              <MyOrders />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

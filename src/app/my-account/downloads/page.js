import BreadCrum from "@/components/breadCrum/BreadCrum";
import MyDownloads from "@/components/myaccount/downloads/MyDownloads";
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
      <section className="downloads my-account">
        <div className="container-xxl">
          <div className="row">
            <AccountNavigation />
            <div className="col-md-8">
              <MyDownloads />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

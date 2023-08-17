"use client";
import React, { Suspense, useEffect, useState } from "react";
import style from "./dashboard.module.css";
import AdminBreadCrums from "@/components/admin/adminBreadcrums/AdminBreadCrums";
import RecentTransection from "@/components/admin/recentTransection/RecentTransection";
import BarChart from "@/components/admin/barChart/BarChart";
import customer1 from "../../assets/images/admindashboard/customer1.jpg";
import customer2 from "../../assets/images/admindashboard/customer2.jpg";
import customer3 from "../../assets/images/admindashboard/customer3.jpg";
import customer4 from "../../assets/images/admindashboard/customer4.jpg";
import customer5 from "../../assets/images/admindashboard/customer5.jpg";
import customer6 from "../../assets/images/admindashboard/customer6.jpg";
import DashboardCustomer from "@/components/admin/dashBoardCustomer/DashboardCustomer";
import DashBoardBilling from "@/components/admin/dashBoardBilling/DashBoardBilling";
import SalesValue from "@/components/admin/salesValue/SalesValue";
import ProfitableCat from "@/components/admin/profitableCat/ProfitableCat";
import dynamic from "next/dynamic";
// import Loading from "./loading/Loading";

const DashBoardTable = dynamic(
  () => import("@/components/admin/dashBoardTable/DashBoardTable"),
  {
    ssr: false,
  }
);
const Page = () => {
  const [transection, setTranestion] = useState([
    {
      transectionCategoryTitle: "Shopping",
      miniTransTitle: "card",
      amount: "26.99",
      date: "Mar 12,2022",
    },
    {
      transectionCategoryTitle: "Stock Market",
      miniTransTitle: "Transfer",
      amount: "26.99",
      date: "Mar 12,2022",
    },
    {
      transectionCategoryTitle: "Grocery",
      miniTransTitle: "card",
      amount: "256.99",
      date: "Apr 12,2022",
    },
    {
      transectionCategoryTitle: "Business",
      miniTransTitle: "transfer",
      amount: "256.99",
      date: "May 18,2022",
    },
    {
      transectionCategoryTitle: "Business",
      miniTransTitle: "transfer",
      amount: "256.99",
      date: "May 18,2022",
    },
    {
      transectionCategoryTitle: "Business",
      miniTransTitle: "transfer",
      amount: "256.99",
      date: "May 18,2022",
    },
  ]);
  const [customers, setCustomer] = useState([
    {
      icon: customer1,
      customerName: "Samantha Melon",
      username: "User ID:1234",
      time: "11.43am",
    },
    {
      icon: customer2,
      customerName: "Alloe Grater",
      username: "User ID:1234",
      time: "12.35pm",
    },
    {
      icon: customer3,
      customerName: "Gabe Lackmen",
      username: "User ID:1234",
      time: "Yesterday",
    },
    {
      icon: customer4,
      customerName: "Manuel Laber",
      username: "User ID:1234",
      time: "24 Mar 2022",
    },
    {
      icon: customer5,
      customerName: "Hercules Bing",
      username: "User ID:1234",
      time: "18 Mar 2022",
    },
    {
      icon: customer6,
      customerName: "Manuel Labor",
      username: "User ID:1234",
      time: "15 Mar 2022",
    },
  ]);
  const [profit, setProfit] = useState([
    {
      numbering: 1,
      categiryName: "Clothing",
      profits: "$123.45M",
    },
    {
      numbering: 2,
      categiryName: "Electronics",
      profits: "$765.45M",
    },
    {
      numbering: 3,
      categiryName: "Grocery",
      profits: "$765.45M",
    },
    {
      numbering: 4,
      categiryName: "Mobiles",
      profits: "$765.45M",
    },
    {
      numbering: 5,
      categiryName: "Kitchen Appliences",
      profits: "$765.45M",
    },
    {
      numbering: 6,
      categiryName: "Automobiles",
      profits: "$765.45M",
    },
  ]);

  // const dispatch = useDispatch();

  return (
    // <Suspense fallback={<Loading />}>
    <div className={style.dashboard_wrapper}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadCrum">
              <AdminBreadCrums
                mainTitle="Sales"
                linksTitle="DashBoard"
                mainMiniTitle="Sales"
              />
            </div>
          </div>
        </div>
        {/* one row starts here */}

        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className={` ${style.custom_card}  card `}>
              <div className="card-body">
                <div className="row">
                  <div className="col-8 pe-0">
                    <p className="mb-2">
                      <span className={`fs-16   ${style.card_heading}`}>
                        Sales Statistics
                      </span>
                    </p>
                    <p className="mb-2 fs-12">
                      <span
                        className={`fs-25 fw-semibold lh-1 vertical-bottom mb-0 ${style.numbers}`}
                      >
                        153
                      </span>
                      <span
                        className={`d-block fs-10 fw-semibold ${style.text_muted}`}
                      >
                        THIS MONTH
                      </span>
                    </p>
                    <a href="#" className={style.stats}>
                      Show full stats
                      <i className="ti ti-chevron-right ms-1"></i>
                    </a>
                  </div>
                  <div className="col-4 d-flex align-items-end justify-content-end">
                    <p className="badge bg-success-transparent float-end d-inline-flex">
                      <i className="ti ti-caret-up me-1"></i>42%
                    </p>
                    <p className={`mb-0  ${style.main_card_icon}`}>
                      <i className="fa-solid fa-print"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className={` ${style.custom_card}  card `}>
              <div className="card-body">
                <div className="row">
                  <div className="col-8 pe-0">
                    <p className="mb-2">
                      <span className={`fs-16   ${style.card_heading}`}>
                        Total Revenue
                      </span>
                    </p>
                    <p className="mb-2 fs-12">
                      <span
                        className={`fs-25 fw-semibold lh-1 vertical-bottom mb-0 ${style.numbers}`}
                      >
                        $4,32,474
                      </span>
                      <span
                        className={`d-block fs-10 fw-semibold ${style.text_muted}`}
                      >
                        THIS MONTH
                      </span>
                    </p>
                    <a href="#" className={style.stats}>
                      Show full stats
                      <i className="ti ti-chevron-right ms-1"></i>
                    </a>
                  </div>
                  <div className="col-4 d-flex align-items-end justify-content-end">
                    <p className="badge bg-danger-transparent float-end d-inline-flex">
                      <i className="ti ti-caret-down me-1"></i>12%
                    </p>
                    <p className={`mb-0  ${style.main_card_icon}`}>
                      <i className="fa-solid fa-clock"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className={` ${style.custom_card}  card `}>
              <div className="card-body">
                <div className="row">
                  <div className="col-8 pe-0">
                    <p className="mb-2">
                      <span className={`fs-16   ${style.card_heading}`}>
                        Page Views
                      </span>
                    </p>
                    <p className="mb-2 fs-12">
                      <span
                        className={`fs-25 fw-semibold lh-1 vertical-bottom mb-0 ${style.numbers}`}
                      >
                        27,146
                      </span>
                      <span
                        className={`d-block fs-10 fw-semibold ${style.text_muted}`}
                      >
                        THIS MONTH
                      </span>
                    </p>
                    <a href="#" className={style.stats}>
                      Show full stats
                      <i className="ti ti-chevron-right ms-1"></i>
                    </a>
                  </div>
                  <div className="col-4 d-flex align-items-end justify-content-end">
                    <p className="badge bg-success-transparent float-end d-inline-flex">
                      <i className="ti ti-caret-up me-1"></i>27%
                    </p>
                    <p className={`mb-0  ${style.main_card_icon}`}>
                      <i className="fa-solid fa-file-lines"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
            <div className={` ${style.custom_card}  card `}>
              <div className="card-body">
                <div className="row">
                  <div className="col-8 pe-0">
                    <p className="mb-2">
                      <span className={`fs-16   ${style.card_heading}`}>
                        Profit By Sale
                      </span>
                    </p>
                    <p className="mb-2 fs-12">
                      <span
                        className={`fs-25 fw-semibold lh-1 vertical-bottom mb-0 ${style.numbers}`}
                      >
                        $563
                      </span>
                      <span
                        className={`d-block fs-10 fw-semibold ${style.text_muted}`}
                      >
                        THIS MONTH
                      </span>
                    </p>
                    <a href="#" className={style.stats}>
                      Show full stats
                      <i className="ti ti-chevron-right ms-1"></i>
                    </a>
                  </div>
                  <div className="col-4 d-flex align-items-end justify-content-end">
                    <p className="badge bg-success-transparent float-end d-inline-flex">
                      <i className="ti ti-caret-up me-1"></i>32.5%
                    </p>
                    <p className={`mb-0  ${style.main_card_icon}`}>
                      <i className="fa-solid fa-dollar-sign"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* one row ends here */}

        {/* second row starts here */}
        <div className={`row ${style.row_spacing}`}>
          <div className="col-xl-6 col-lg-12 col-md-12">
            <div
              className={`${style.transectionCardWrapper}  card custom-card recent-transactions-card overflow-hidden`}
            >
              <div className={`${style.card_header} justify-content-between`}>
                <div className={style.card_title}>Recent Transactions</div>
              </div>

              {transection.map((e, idx) => {
                return (
                  <div key={idx}>
                    <RecentTransection
                      transectionCategoryTitle={e.transectionCategoryTitle}
                      miniTransTitle={e.miniTransTitle}
                      amount={e.amount}
                      date={e.date}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12  ">
            <BarChart />
          </div>
        </div>

        {/* second row ends here */}

        {/* third row starts here */}
        <div className={`row `}>
          <div className={`col-lg-6 col-md-6 col-sm-12 ${style.custoner_left}`}>
            <div className="card custom-card border-none">
              <div
                className={`${style.card_header} d-flex justify-content-between align-items-center`}
              >
                <div className="card-title m-0">
                  <h4 className={style.customer_heading}>Customers</h4>
                </div>
                <div className="dropdown">
                  <a
                    href="#"
                    className={`p-2 fs-12 text-muted ${style.viewAll}`}
                    data-bs-toggle="dropdown"
                  >
                    View All
                    <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Download
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Import
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Export
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${style.customersss}  card-body  p-0 `}>
                <ul className="list-group my-2">
                  {customers.map((e, idx) => {
                    return (
                      <li
                        className={` ${style.list_group_item} border-0`}
                        key={idx}
                      >
                        <DashboardCustomer
                          icon={e.icon}
                          customerName={e.customerName}
                          username={e.username}
                          time={e.time}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <DashBoardBilling />
          </div>
        </div>
        <div className={`row ${style.row_mar}`}>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <SalesValue />
            </div>
          </div>
          <div className={`col-lg-6 col-md-6 col-sm-12  ${style.profit_mar}`}>
            <div className="card custom-card">
              <div
                className={`card-header justify-content-between ${style.card_header}`}
              >
                <div className="card-title">Profitable Categories</div>
              </div>
              <div className="card-body">
                <ul className="list-group mb-0">
                  {profit.map((e, idx) => {
                    return (
                      <li
                        className={`list-group-item ${style.list_group_item}`}
                        key={idx}
                      >
                        <ProfitableCat
                          numbering={e.numbering}
                          categiryName={e.categiryName}
                          profits={e.profits}
                        />
                      </li>
                    );
                  })}
                  <li className={`list-group-item ${style.list____}`}>
                    <button className={` ${style.activity_button}`}>
                      See All Activity
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* third row ends here */}

        {/* fourth row starts here */}
        <div className={`row ${style.row_mar}`}>
          <div className="col-lg-12">
            <DashBoardTable />
          </div>
        </div>
        {/* fourth row ends here */}
      </div>
    </div>
    // </Suspense>
  );
};

export default Page;

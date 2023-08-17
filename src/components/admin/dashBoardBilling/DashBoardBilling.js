import React, { useState } from "react";
import "./DashBoardBilling.css";
import BillingDetail from "../billingDetail/BillingDetail";
import RevenueList from "../revenue/RevenueList";
const DashBoardBilling = () => {
  const [billingDetails, setBillingDetails] = useState([
    {
      titleInvoice: "Order Picking",
      grossRate: "0.3%",
      amount: "3876",
      days: "5 Days ago",
    },
    {
      titleInvoice: "Storage",
      grossRate: "16%",
      amount: "2178",
      days: "2 days ago",
    },
    {
      titleInvoice: "Shipping",
      grossRate: "25%",
      amount: "678",
      days: "1 days ago",
    },
    {
      titleInvoice: "Receiving",
      grossRate: "25%",
      amount: "1697",
      days: "10 days ago",
    },
    {
      titleInvoice: "Review",
      grossRate: "55%",
      amount: "1697",
      days: "11 days ago",
    },
    {
      titleInvoice: "Profit",
      grossRate: "32%",
      amount: "1697",
      days: "11 days ago",
    },
  ]);
  const [revenueDetails, setRevenueDetails] = useState([
    {
      process: "Processing",
      invoice: "A12-005",
      date: "Nov 24,2022",
    },
    {
      process: "Sent",
      invoice: "A12-005",
      date: "Nov 28,2022",
    },
    {
      process: "Pending",
      invoice: "A12-005",
      date: "Nov 10,2022",
    },
    {
      process: "Processing",
      invoice: "A12-005",
      date: "Nov 28,2022",
    },
    {
      process: "Sent",
      invoice: "A12-005",
      date: "Nov 10,2022",
    },
    {
      process: "Sent",
      invoice: "A12-005",
      date: "Nov 10,2022",
    },
  ]);
  return (
    <>
      <div className="card custom-card billing_wrapper">
        <div className="card_header">
          <div className="card-title m-0">
            <h4 className="customer_heading">Billing</h4>
          </div>
          <div className="tab-menu-heading border-0 p-0 ms-auto">
            <div className="tabs-menu-billing my-1">
              <ul
                className="nav nav-pills mb-3tabs_wrapper"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Invoices
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link`}
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Revenue
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-body p-0 my-2">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="revenve_wrapper">
                <ul className="revenue_">
                  {revenueDetails.map((e, idx) => {
                    return (
                      <li key={idx} className="invoice_listing_items">
                        <RevenueList
                          process={e.process}
                          invoice={e.invoice}
                          date={e.date}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="invoice_list">
                <ul className="billing_listing">
                  {billingDetails.map((e, idx) => {
                    return (
                      <li key={idx} className="invoice_listing_items">
                        <BillingDetail
                          titleInvoice={e.titleInvoice}
                          grossRate={e.grossRate}
                          amount={e.amount}
                          days={e.days}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardBilling;

"use client";

import dynamic from "next/dynamic";

const OrderCart = dynamic(
  () => import("@/components/admin/orders/orderCart/OrderCart"),
  {
    ssr: false,
  }
);
const Page = () => {
  return (
    <>
      <div className="admin-order-page">
        <div className="container-fluid">
          <div className={`row row-title-equal-spacing`}>
            <div className="col-12">
              <div className="left">
                <h4 className="product-title">Order</h4>
              </div>
            </div>
          </div>
        </div>
        <OrderCart />
      </div>
    </>
  );
};

export default Page;

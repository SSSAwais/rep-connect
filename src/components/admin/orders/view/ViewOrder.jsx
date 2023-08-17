import React from "react";
import "./vieworder.css";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
const ViewOrder = ({ data }) => {
  const {
    first_name,
    last_name,
    country_region,
    company_name,
    address,
    city_town,
    state_country,
    post_zip_code,
    phone_no,
    email,
  } = data.billing_address;

  const currenyConvert = (e) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(e);
  };
  return (
    <>
      <div className="col-lg-6">
        <div className="order">
          <div className="a-view-product-detail">
            <div className="view-titles d-flex justify-content-between">
              <h4 className="order-no">
                Order No - <span>{data.order_id}</span>{" "}
              </h4>
              <h4 className="order-date">
                Order Date - <span>{moment(data.createdAt).format("LL")}</span>{" "}
              </h4>
            </div>
            <table className="items-view-pro w-100">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {data.products.product_items.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <div className="d-flex w-100 align-items-center">
                          <span className="d-inline pe-2">{i + 1}</span>
                          <div className="imgss-box position-relative d-inline-block me-3 ">
                            <Image
                              src={e.image.image.url}
                              alt="ad"
                              className="img-fluid"
                              fill
                            />
                          </div>
                          <Link
                            href={`/admin/product/view-product/${e.product_id}`}
                            className="imgss-title d-inline-block"
                          >
                            <h2 className="title">{e.name} </h2>
                          </Link>
                        </div>
                      </td>
                      <td>{currenyConvert(e.price)}</td>
                      <td>{e.quantity}</td>
                      <td>{currenyConvert(e.price * e.quantity)}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                {/* <tr>
                  <td colSpan={2}></td>
                  <td>items</td>
                  <td>780</td>
                </tr> */}
                <tr>
                  <td colSpan={2}></td>
                  <td>Total Price</td>
                  <td>{currenyConvert(data.products.total)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        {data.order_notes ? (
          <div className="order mt-3 special-notes">
            <h2 className="title">Specail notes</h2>

            <p className="paraga">{data.order_notes}</p>
          </div>
        ) : null}
      </div>
      <div className="col-lg-6">
        <div className="user-detail">
          <div className="user-detail-view">
            <h4 className="user-name">user detail</h4>

            <div className="user-info">
              <h3>{data.order_by_user.username}</h3>
            </div>
            <div className="ordr-detail">
              <h4>
                Order status :{" "}
                <strong className={`status ${data.order_status}`}>
                  {" "}
                  {data.order_status}
                </strong>
              </h4>
              <h4>
                Payment method{" "}
                <strong>
                  {data.payment_method === "COD"
                    ? "Cash on Delivery"
                    : data.payment_method}
                </strong>{" "}
              </h4>
            </div>

            <div className="address billing-address">
              <h3 className="add-title">billing address</h3>

              <p className="col-row">
                <strong>Name : </strong>
                <label>{first_name + " " + last_name}</label>
              </p>
              <p className="col-row">
                <strong>Email : </strong>
                <label> {email} </label>
              </p>
              <p className="col-row">
                <strong>phone_no : </strong>
                <label> {phone_no} </label>
              </p>
              <p className="col-row">
                <strong>Country / Region : </strong>
                <label> {country_region} </label>
              </p>
              <p className="col-row">
                <strong>Company Name : </strong>
                <label> {company_name} </label>
              </p>
              <p className="col-row">
                <strong>Address: </strong>
                <label>{address}</label>
              </p>
              <p className="col-row">
                <strong>City / Town : </strong>
                <label> {city_town} </label>
              </p>
              <p className="col-row">
                <strong>State / Country : </strong>
                <label> {state_country} </label>
              </p>
              <p className="col-row">
                <strong>Post Code / Zip: </strong>
                <label> {post_zip_code} </label>
              </p>
            </div>
            {data.shipping_address ? (
              <div className="address shipping-address">
                <h3 className="add-title">shipping address</h3>
                <p className="col-row">
                  <strong>Name : </strong>
                  <label>
                    {data.shipping_address.first_name +
                      " " +
                      data.shipping_address.last_name}
                  </label>
                </p>
                <p className="col-row">
                  <strong>Email : </strong>
                  <label> {data.shipping_address.email} </label>
                </p>
                <p className="col-row">
                  <strong>phone_no : </strong>
                  <label> {data.shipping_address.phone_no} </label>
                </p>
                <p className="col-row">
                  <strong>Country / Region : </strong>
                  <label> {data.shipping_address.country_region} </label>
                </p>
                <p className="col-row">
                  <strong>Company Name : </strong>
                  <label> {data.shipping_address.company_name} </label>
                </p>
                <p className="col-row">
                  <strong>Address: </strong>
                  <label>{data.shipping_address.address}</label>
                </p>
                <p className="col-row">
                  <strong>City / Town : </strong>
                  <label> {data.shipping_address.city_town} </label>
                </p>
                <p className="col-row">
                  <strong>State / Country : </strong>
                  <label> {data.shipping_address.state_country} </label>
                </p>
                <p className="col-row">
                  <strong>Post Code / Zip: </strong>
                  <label> {data.shipping_address.post_zip_code} </label>
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOrder;

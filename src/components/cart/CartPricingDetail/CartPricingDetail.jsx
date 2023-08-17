"use client";
import React, { useState } from "react";
import "./CartPricingDetail.css";
import Link from "next/link";
import { useSelector } from "react-redux";
const CartPricingDetail = () => {
  const [shippingAddress, setShippingAddres] = useState(false);
  const [updateShipping, setUpdateShipping] = useState({
    shipping_county: "",
    shipping_state: "",
    shipping_city: "",
    shipping_zip_code: "",
  });
  const hanldAddShpping = () => {
    setShippingAddres(!shippingAddress);
  };

  const hanldeUpdateShipping = () => {
    console.log("shippign updateedd", updateShipping);
  };
  const hanldeChanged = (event) => {
    setUpdateShipping({
      ...updateShipping,
      [event.target.name]: event.target.value,
    });
  };

  const state = useSelector((state) => state.cartItem.data);

  const totalprice = state?.reduce((total, curValue, curIndex, arr) => {
    return (total += curValue.sub_total);
  }, 0);
  const TotalPrice = () => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(totalprice);
  };
  return (
    <aside className="cart-sidebar">
      <div className="cart--pricing--detail">
        <h3 className="title">Cart totals</h3>

        <div className="subt--total d-flex justify-content-between align-items-center">
          <h5 className="sub-title">Subtotal</h5>
          <h5 className="sub-title">
            <span>
              <bdi>{TotalPrice()}</bdi>
            </span>
          </h5>
        </div>
        <div className="cart-shpping d-flex justify-content-between align-items-center">
          <h5 className="sub-title">Shipping</h5>
          <h5 className="sub-title">Free shipping</h5>
        </div>
        <div className="change-address">
          <h4 className="sub-title shipping-to">
            Shipping to <strong>FL.</strong>
          </h4>
          <h4 className="sub-title" onClick={hanldAddShpping}>
            Change Address <i className="fa-solid fa-truck"></i>
          </h4>

          <div className={`change-wrapp ${shippingAddress ? "show" : "hide"}`}>
            <select
              name="shipping_county"
              className="form-control"
              value={updateShipping.shipping_county}
              onChange={hanldeChanged}
            >
              <option value="US">United State</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
            </select>
            <select
              name="shipping_state"
              className=" form-control"
              value={updateShipping.shipping_state}
              onChange={hanldeChanged}
            >
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
            </select>
            <input
              className=" form-control"
              value={updateShipping.shipping_city}
              name="shipping_city"
              onChange={hanldeChanged}
              placeholder="City"
            />
            <input
              className=" form-control"
              placeholder="Postcode / Zip"
              name="shipping_zip_code"
              value={updateShipping.shipping_zip_code}
              onChange={hanldeChanged}
            />
            <button type="submit" onClick={hanldeUpdateShipping}>
              Update
            </button>
          </div>
        </div>
        <div className="total-price d-flex justify-content-between align-items-center">
          <h4 className="sub-title">Total</h4>
          <h5 className="amount">
            <span>
              <bdi>{TotalPrice()}</bdi>
            </span>
          </h5>
        </div>
        <div className="shipping_proceed_btns">
          <Link href="/checkout" className="processed_btn">
            Proceed to checkout
          </Link>
          <Link href="/shop" className="continue_shopping">
            Continue shopping
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default CartPricingDetail;

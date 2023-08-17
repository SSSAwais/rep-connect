"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import CartItems from "@/components/cart/CartItems/CartItems";
import CartPricingDetail from "@/components/cart/CartPricingDetail/CartPricingDetail";
import React, { useEffect } from "react";
import style from "./cart.module.css";
import BreadCrumCart from "@/components/cart/CartBreakCrum/BreadCrumCart";
import Image from "next/image";
import emptyshoppingcart from "../../assets/images/empty-shopping-cart.png";
import withAuth from "@/utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { cartItem } from "@/redux/slices/cartItem";
import Link from "next/link";
import Loading from "@/components/cart/CartItems/Loading/Loading";
import Spinner from "@/components/spinner/Spinner";
const Page = () => {
  const state = useSelector((data) => data.cartItem);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartItem());
  }, []);
  return (
    <>
      <BreadCrum
        breadHeading="Cart"
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: "Cart",
            link: "/",
          },
        ]}
      />

      <section className={style.cart__page}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 p-0">
              <BreadCrumCart />
            </div>
          </div>
          <div
            className={`row  justify-content-between ${style.cart_items__wrapper}`}
          >
            {state.loading ? (
              <Spinner />
            ) : state.data?.length >= 1 ? (
              <>
                <CartItems item={state.data} />
                <CartPricingDetail />
              </>
            ) : (
              <div className="col-12 p-0">
                <div className={style.empty_cart}>
                  <Image src={emptyshoppingcart} alt="Empty Shopping Cart" />
                  <p>Your cart is currently empty.</p>
                  <Link href="/shop" className={style.returntoshop}>
                    Return to shop
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default withAuth(Page);

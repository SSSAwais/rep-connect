"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import img1 from "../../../assets/images/products/afb-sputum-4.jpg";
// import img2 from "../../../assets/images/products/basicSTI-provider-22.jpg";
// import img3 from "../../../assets/images/products//covid-flu-22.jpg";
import "./CartItems.css";
import CartDe from "./singlCart/CartDe";
import { useDispatch, useSelector } from "react-redux";
import { cartItem } from "@/redux/slices/cartItem";
import { token } from "@/hooks/token";
import { ToastContainer, toast } from "react-toastify";
const CartItems = (props) => {
  const state = useSelector((state) => state.cartItem);
  const [upadateItem, setUpdateItem] = useState(state.data);
  const dispatch = useDispatch();
  const hanldeSubmit = async (event) => {
    event.preventDefault();
    let arr = [];
    let update = [...upadateItem];
    update.forEach((e) => {
      arr.push({
        productid: e.product_detail._id,
        quantity: e.quantity,
        sale_price: e.sale_price,
        price: e.price,
      });
    });

    const resp = await fetch(`${process.env.NEXT_PUBLIC_URL}api/cart`, {
      method: "PUT",
      headers: {
        "x-auth-token": token(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products_list: arr,
      }),
    });
    const result = await resp.json();
    if (result.success === 1) {
      toast(`${result.message}`);
      dispatch(cartItem());
    }
  };

  const hanldeIncreasedQty = (id) => {
    let arr = [...upadateItem];
    let changedProcduct = arr.filter((item) => item._id === id);
    let obj = {
      ...changedProcduct[0],
      quantity: changedProcduct[0].quantity + 1,
    };

    let index = arr.findIndex(function (i) {
      return i._id === id;
    });
    let addAndRemoveCurrenProduct = [...arr];
    addAndRemoveCurrenProduct[index] = obj;
    setUpdateItem(addAndRemoveCurrenProduct);
  };
  const hanldeDecreasedQty = (id) => {
    let arr = [...upadateItem];
    let changedProcduct = arr.filter((item) => item._id === id);
    let obj = {
      ...changedProcduct[0],
      quantity:
        changedProcduct[0].quantity > 1 ? changedProcduct[0].quantity - 1 : 1,
    };

    let index = arr.findIndex(function (i) {
      return i._id === id;
    });
    let addAndRemoveCurrenProduct = [...arr];
    addAndRemoveCurrenProduct[index] = obj;
    setUpdateItem(addAndRemoveCurrenProduct);
  };
  const hanldeDeleted = (id) => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/cart/${id}`, {
      headers: {
        "x-auth-token": token(),
      },
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.success === 1) {
          dispatch(cartItem());
          let updateproduct = upadateItem.filter(
            (e) => e.product_detail._id !== id
          );
          setUpdateItem(updateproduct);
        }
      });
  };

  const hanldeChanged = (id, event) => {
    let arr = [...upadateItem];
    let changedProcduct = arr.filter((item) => item._id === id);
    let obj = {
      ...changedProcduct[0],
      quantity: event.target.value,
    };

    let index = arr.findIndex(function (i) {
      return i._id === id;
    });
    let addAndRemoveCurrenProduct = [...arr];
    addAndRemoveCurrenProduct[index] = obj;
    setUpdateItem(addAndRemoveCurrenProduct);
  };
  return (
    <div className="cart-items">
      <form onSubmit={hanldeSubmit}>
        <table className="w-100">
          <thead className="cart--item--head">
            <tr>
              <th className="product-thumbnail">&nbsp; </th>
              <th className="product-name">product</th>
              <th className="product-price">price</th>
              <th className="product-quantity">qyantity</th>
              <th className="product-subtotal">subtotal</th>
              <th className="product-remove">&nbsp;</th>
            </tr>
          </thead>
          <tbody className="cart--item--body">
            {upadateItem.map((element, index) => {
              return (
                <CartDe
                  key={index}
                  item={element}
                  hanldeDeleted={hanldeDeleted}
                  hanldeIncreasedQty={hanldeIncreasedQty}
                  hanldeChanged={hanldeChanged}
                  hanldeDecreasedQty={hanldeDecreasedQty}
                />
              );
            })}
          </tbody>
          <tfoot className="cart--item--foot">
            <tr>
              <td colSpan={6}>
                <button> Update cart</button>
              </td>
            </tr>
          </tfoot>
        </table>
        <ToastContainer />
      </form>
    </div>
  );
};

export default CartItems;

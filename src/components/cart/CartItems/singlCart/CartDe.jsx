import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const CartDe = ({
  item,
  hanldeDeleted,
  hanldeIncreasedQty,
  hanldeDecreasedQty,
  hanldeChanged,
}) => {
  const TotalPrice = (total) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(total);
  };

  return (
    <>
      <tr className="cart--item--row">
        <td className="product-thumbnail">
          <Image
            src={item.product_detail.cover_image.image.url}
            alt="thumbnail"
            className="img-fluid"
            width={100}
            height={70}
          />
        </td>
        <td className="product-name" data-title="Product">
          <Link href={`/product-detail/${item.product_detail._id}`}>
            {item.product_detail.name}
          </Link>
        </td>
        <td className="product-price" data-title="Price">
          <span className="amount">
            {TotalPrice(item.sale_price) === 0
              ? TotalPrice(item.price)
              : TotalPrice(item.sale_price)}
          </span>
        </td>
        <td className="product-quantity" data-title="Quantity">
          <div className="quantity">
            <span
              className="quantity-minus"
              onClick={() => hanldeDecreasedQty(item._id)}
            >
              <i className="fa-solid fa-minus" />
            </span>
            <input
              type="text"
              value={item.quantity}
              onChange={(event) => hanldeChanged(item._id, event)}
            />
            <span
              className="quantity-plus"
              onClick={() => hanldeIncreasedQty(item._id)}
            >
              <i className="fa-solid fa-plus" />
            </span>
          </div>
        </td>
        <td className="product-subtotal" data-title="Total">
          <span className="amount">
            {item.sale_price === 0
              ? TotalPrice(item.price * item.quantity)
              : TotalPrice(item.sale_price * item.quantity)}
          </span>
        </td>
        <td
          className="product-remove"
          onClick={() => hanldeDeleted(item.product_detail._id)}
        >
          <span>
            <i className="fa-solid fa-xmark" />
          </span>
        </td>
      </tr>
    </>
  );
};

export default CartDe;

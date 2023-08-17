import React from "react";
import emptyshoppingcart from "../../../assets/images/empty-shopping-cart.png";
import Image from "next/image";
import Link from "next/link";
import "./no-product.css";
const NoProduct = () => {
  return (
    <div className="col text-center">
      <div className="NoProduct">
        <Image src={emptyshoppingcart} alt="no product" />
        <p>No Product of this Category</p>
        <Link href="/shop" className="return-shop-btn">
          Return to shop
        </Link>
      </div>
    </div>
  );
};

export default NoProduct;

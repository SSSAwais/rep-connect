import React, { useState } from "react";

import "./viewProCate.css";
import Image from "next/image";
import moment from "moment";

const ViewProCategory = ({ data }) => {
  console.log(data);
  return (
    <div className="add-pro-cate-view">
      <div className="pro-cate-form-row-view">
        <div className="form-col">
          <label htmlFor="CategoryName" className="form-label">
            Name
          </label>
          <div className="disc">
            <p>{data.name}</p>
          </div>
        </div>

        <div className="form-col">
          <label htmlFor="parent" className="form-label">
            Parent
          </label>
          <div className="disc">
            <p>
              {data.parent_cat_id === null
                ? "No Parent"
                : data.parent_cat_id.name}
            </p>
          </div>
        </div>
      </div>
      <div className="pro-cate-form-row-view">
        <div className="form-col">
          <label htmlFor="sale_price" className="form-label">
            CreatedAt Date
          </label>
          <div className="disc">
            <p> {moment(data.createdAt).format("LL")}</p>
          </div>
        </div>
      </div>
      <div className="pro-cate-form-row-view">
        <div className="form-col">
          <label htmlFor="sale_price" className="form-label">
            Image
          </label>
          <div className="upload-iconss ">
            <Image
              alt={data.name}
              src={data.image.image.url}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProCategory;

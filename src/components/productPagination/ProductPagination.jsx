"use client";
import React, { useState } from "react";
import "./ProductPagination.css";
import { useSearchParams } from "next/navigation";
const ProductPagination = () => {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const query = useSearchParams();
  // const [current, setCurrent] = useState(Number(query.get("page")) || 1);
  const [current, setCurrent] = useState(1);
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col text-center">
          <div className="pagination-pagess">
            {list.map((e) => {
              return e === current ? (
                <span className="page-numbers current" key={e}>
                  {e}
                </span>
              ) : (
                <a
                  key={e}
                  className="page-numbers"
                  onClick={() => setCurrent(e)}
                >
                  {e}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPagination;

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { token } from "./token";

export function useProduct(qty, para) {
  const { _id, sale_price, regular_price } = para;
  fetch(`${process.env.NEXT_PUBLIC_URL}api/cart`, {
    headers: {
      "x-auth-token": token(),
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      productid: _id,
      quantity: qty,
      price: regular_price,
      sale_price: sale_price,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success === 1) {
        toast.success(`Add to Cart 👌🏻`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    });

  return;
}

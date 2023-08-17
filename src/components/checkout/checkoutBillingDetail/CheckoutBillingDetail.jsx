"use client";
import React, { useEffect, useState } from "react";
import "./checkout.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Loading from "@/components/cart/CartItems/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import { token } from "@/hooks/token";
import { cartItem } from "@/redux/slices/cartItem";
import Spinner from "@/components/spinner/Spinner";

const CheckoutBillingDetail = () => {
  const router = useRouter();
  const [err, setErr] = useState([]);
  const [address, setAddress] = useState(false);
  const [orderNotes, setOrderNotes] = useState(null);
  const [orderCompleteLoading, setOrderCompleteLoading] = useState(false);
  const state = useSelector((state) => state.cartItem);
  const [counties, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [otherBillingState, setOrtherBillingState] = useState(true);
  const [otherShippinedState, setOtherShippiedState] = useState(true);

  const [billingValidated, setBillingValidated] = useState({
    firstname: false,
    lastname: false,
    company_name: false,
    countryregion: false,
    towncity: false,
    statecountry: false,
    postcode: false,
    phone: false,
    email: false,
    address: false,

    // ordernotes: false,
  });

  const [billignAddress, setBillingAddress] = useState({
    firstname: "",
    lastname: "",
    company_name: "",
    countryregion: "",
    towncity: "",
    statecountry: "",
    postcode: "",
    phone: "",
    email: "",
    address: "",
  });
  const [shippingValidated, setShippingValidated] = useState({
    ship_firstname: false,
    ship_lastname: false,
    ship_company_name: false,
    ship_countryregion: false,
    ship_towncity: false,
    ship_statecountry: false,
    ship_postcode: false,
    ship_phone: false,
    ship_email: false,
    ship_address: false,

    // ordernotes: false,
  });
  const [shippingAddress, setShippingAddress] = useState({
    ship_firstname: "",
    ship_lastname: "",
    ship_company_name: "",
    ship_countryregion: "",
    ship_towncity: "",
    ship_statecountry: "",
    ship_postcode: "",
    ship_phone: "",
    ship_email: "",
    // ship_ordernotes: "",
    ship_address: "",
  });
  const [ship_states, ship_setStates] = useState([]);
  const dispatch = useDispatch();

  const deletProduct = () => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/cart/orderd`, {
      headers: {
        "x-auth-token": token(),
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(cartItem());
        router.push("/order-received");
      });
  };

  const hanldeBillingChange = (event) => {
    const { name, value } = event.target;

    // setBillingAddress({ ...billignAddress, [name]: value });
    if (value.trim().length === 0) {
      setBillingValidated({ ...billingValidated, [name]: true });
    } else if (value.trim().length > 0) {
      setBillingValidated({ ...billingValidated, [name]: false });
    }

    if (name === "countryregion") {
      if (value !== "selectcounty") {
        counties.filter((el) => {
          if (el.country === value) {
            setStates(el.states);
            if (el.states.length > 0) {
              setOrtherBillingState(false);
            } else {
              setOrtherBillingState(true);
            }
          }

          // if (el) {
          //   setOrtherBillingState(false);
          // } else {
          //   setOrtherBillingState(true);
          // }
        });
      }
      if (value === "selectcounty") {
        setBillingValidated({ ...billingValidated, statecountry: true });
        setStates([]);
      }
      let obj = {
        ...billignAddress,
        statecountry: "",
      };

      setBillingAddress({ ...obj, [name]: value });

      // if (name === "statecountry") {
      //   setOrtherBillingState(true);
      // } else {
      //   if (value === "other") {
      //     setOrtherBillingState(true);
      //   }

      // }
      // } else if (name === "statecountry") {
      //   if (value === "other") {
      //     setOrtherBillingState(true);
      //   }
    } else {
      //   else if (name === "statecountry") {
      //   // if (value === "other") {
      //   //   setOrtherBillingState(false);
      //   // } else {
      //   //   setOrtherBillingState(true);
      //   // }
      //   // setBillingAddress({ ...billignAddress, [name]: value });
      // }

      if (name === "statecountry") {
        if (value === "other") {
          setOrtherBillingState(true);
          // setOrtherBillingStateDisabled(true);
        } else {
          setOrtherBillingState(false);
          // setOrtherBillingStateDisabled(false);
        }
        // } else {
        //   // setOrtherBillingState(false);
        // }

        //  else {
        //   setOrtherBillingState(false);
        // }
        // if (el.states.length > 0) {
        // } else {
        //   setOrtherBillingState(true);
        // }
      }
      setBillingAddress({ ...billignAddress, [name]: value });
    }
    // setBillingAddress({ ...billignAddress, [name]: value });
    // if (name === "countryregion") {
    //   if ("selectcounty" === value) {
    //     setBillingValidated({ ...billingValidated, [name]: true });
    //     setStates([]);
    //     setBillingAddress({ ...billignAddress, [name]: value });
    //   }
    //   setBillingAddress({ ...billignAddress, statecountry: "" });

    //   counties.filter((el) => {
    //     if (el.country === value) {
    //       setStates(el.states);
    //     }
    //   });
    // }

    // if (name === "statecountry") {
    //   if ("selectstate" === value) {
    //     setBillingValidated({ ...billingValidated, [name]: true });
    //     // setStates([]);
    //     setBillingAddress({ ...billignAddress, [name]: value });
    //   }
    // }
    // if (name === "statecountry") {
    //   setBillingValidated({ ...billingValidated, [name]: true });
    //   // setStates([]);
    //   setBillingAddress({ ...billignAddress, [name]: value });
    // }
  };
  const hanldeBillingChangeInput = (e) => {
    const { name, value } = e.target;
    setBillingAddress({ ...billignAddress, [name]: value });
  };
  const hanldeShippedChangeInput = (e) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };
  const hanldeShippingChange = (event) => {
    const { name, value } = event.target;
    // setShippingAddress({ ...shippingAddress, [name]: value });
    if (value.trim().length == 0) {
      setShippingValidated({ ...shippingValidated, [name]: true });
    } else if (value.trim().length > 0) {
      setShippingValidated({ ...shippingValidated, [name]: false });
    }

    if (name === "ship_countryregion") {
      if (value !== "ship_county") {
        counties.filter((el) => {
          if (el.country === value) {
            ship_setStates(el.states);
            if (el.states.length > 0) {
              setOtherShippiedState(false);
            } else {
              setOtherShippiedState(true);
            }
          }
        });
        // counties.filter((el) => {
        //   if (el.country === value) {
        //     setStates(el.states);
        //     if (el.states.length > 0) {
        //       setOrtherBillingState(false);
        //     } else {
        //       setOrtherBillingState(true);
        //     }
        //   })        // if (value === "other") {
        //   setOrtherBillingState(true);
        //   // setOrtherBillingStateDisabled(true);
        // } else {
        //   setOrtherBillingState(false);
        //   // setOrtherBillingStateDisabled(false);
        // }
      }
      if (value === "ship_state") {
        setShippingValidated({ ...shippingValidated, ship_statecountry: true });
        ship_setStates([]);
      }
      let obj = {
        ...shippingAddress,
        ship_statecountry: "",
      };

      setShippingAddress({ ...obj, [name]: value });
    } else {
      if (name === "ship_statecountry") {
        if (value === "other") {
          setOtherShippiedState(true);
          // setOrtherBillingStateDisabled(true);
        } else {
          setOtherShippiedState(false);
          // setOrtherBillingStateDisabled(false);
        }
      }
      setShippingAddress({ ...shippingAddress, [name]: value });
    }
  };
  const hanldesubmitorder = (e) => {
    e.preventDefault();
    let error = [];
    // STEP 1 : ERROR IS FILED IS EMPTY THEN SHOW ERROR MESSAGE
    let objeError = { ...billingValidated };

    for (const key in billignAddress) {
      if (!billignAddress[key]) {
        objeError[key] = true;
        error.push(key);
      }
      setErr(error);
      setBillingValidated(objeError);
    }

    // if (billignAddress.countryregion === "selectcounty") {
    //   error.push(billignAddress.countryregion);
    //   setBillingValidated({ ...objeError, countryregion: true });
    //   setErr(error);
    // } else if (billignAddress.statecountry === "selectstate") {
    //   error.push(billignAddress.statecountry);
    //   setBillingValidated({ ...objeError, statecountry: true });
    //   setErr(error);
    // } else {

    // }

    // if (!billingValidated.countryregion) {
    //   setBillingValidated({ ...objeError, countryregion: true });
    // } else if (!billingValidated.statecountry) {
    //   setBillingValidated({ ...objeError, statecountry: true });
    // }

    //// STEP 2 : IS SHIIPING ADDRESS IS TRUE THEN SHOW SHIPPING ADDRESS ERROR
    if (address) {
      let objeErrorShipp = { ...shippingValidated };
      for (const key in shippingAddress) {
        if (!shippingAddress[key]) {
          objeErrorShipp[key] = true;
          error.push(key);
        }
        setErr(error);
        setShippingValidated(objeErrorShipp);
      }
    }
    // STEP 3 : THIS IS OBJECT TO SEND BACKNED
    let billing_address = {
      first_name: billignAddress.firstname,
      last_name: billignAddress.lastname,
      country_region: billignAddress.countryregion,
      company_name: billignAddress.company_name,
      address: billignAddress.address,
      city_town: billignAddress.towncity,
      state_country: billignAddress.statecountry,
      post_zip_code: billignAddress.postcode,
      phone_no: billignAddress.phone,
      email: billignAddress.email,
    };
    let shipping_address = {
      first_name: shippingAddress.ship_firstname,
      last_name: shippingAddress.ship_lastname,
      country_region: shippingAddress.ship_countryregion,
      company_name: shippingAddress.ship_company_name,
      address: shippingAddress.ship_address,
      city_town: shippingAddress.ship_towncity,
      state_country: shippingAddress.ship_statecountry,
      post_zip_code: shippingAddress.ship_postcode,
      phone_no: shippingAddress.ship_phone,
      email: shippingAddress.ship_email,
    };

    /// STEP 4 : IF SHIPING ADDRESS IS NOT THEN SEND ONLY BILLING ADDRESS
    if (!address) {
      if (
        billignAddress.firstname &&
        billignAddress.lastname &&
        billignAddress.company_name &&
        billignAddress.countryregion &&
        billignAddress.towncity &&
        billignAddress.statecountry &&
        billignAddress.postcode &&
        billignAddress.phone &&
        billignAddress.email &&
        billignAddress.address
      ) {
        if (!billingValidated.countryregion || !billingValidated.statecountry) {
          hanldeOrdedConfrim({ shipping: 0, billing_address });
          console.log(
            billingValidated.countryregion,
            billingValidated.statecountry
          );
        }
      }
    } else {
      // STEP4 : IF SHIIPING ADDRES HAS THEN SEND BILLING AND SHIPPING BOTH ADDRESS
      if (
        shippingAddress.ship_firstname &&
        shippingAddress.ship_lastname &&
        shippingAddress.ship_company_name &&
        shippingAddress.ship_countryregion &&
        shippingAddress.ship_towncity &&
        shippingAddress.ship_statecountry &&
        shippingAddress.ship_postcode &&
        shippingAddress.ship_phone &&
        shippingAddress.ship_email &&
        shippingAddress.ship_address
      ) {
        /// IS FUNCTION TO SEND DETAIL TO ADDRESS
        hanldeOrdedConfrim({ shipping: 1, billing_address, shipping_address });
      }
    }
    if (error.length >= 1) window.scrollTo(0, 150);

    //////
  };

  const handleCheckboxChange = (event) => {
    setAddress(event.target.checked);
  };

  const totalprice = state?.data.reduce((total, curValue, curIndex, arr) => {
    return (total += curValue.sub_total);
  }, 0);
  const TotalPrice = () => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(totalprice);
  };

  // ORDER API DELETE FETCH FUNCTION
  const orderPostAPI = (body) => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token(),
      },
      body: JSON.stringify(body),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        if (data.success === 1) {
          toast.success("Order Placed", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setOrderCompleteLoading(false);
          deletProduct();
        } else {
          toast.error("Something went Wrong Please try again 🔥", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };
  const hanldeOrdedConfrim = (order) => {
    setOrderCompleteLoading(true);
    // / CHECK SHIPPING ADDRESS IS EXISTED OR NOT
    let address;
    if (order.shipping === 1) {
      address = {
        billing_address: order.billing_address,
        shipping_address: order.shipping_address,
      };
    } else {
      address = {
        billing_address: order.billing_address,
        shipping_address: order.billing_address,
      };
    }
    let prod = [];
    state.data.forEach((element) => {
      prod.push({
        name: element.product_detail.name,
        image: element.product_detail.cover_image._id,
        quantity: element.quantity,
        sub_total: element.sub_total,
        price: element.price,
        product_id: element.product_detail._id,
      });
    });
    // CREATE ORDER OBJECT TO SENT THE ORDER
    let orders = {
      ...address,
      products: {
        product_items: prod,
        total: totalprice,
      },
      payment_method: "COD",
      order_notes: orderNotes,
    };
    // console.log(address);
    // ORDER CREATED FETACH FUCTION
    orderPostAPI(orders);
  };

  const hanldeGETALLCountry = () => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/country`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === 1) {
          setCountries(data.data.country);
          // ship_setStates(data.data.country);
        }
      });
  };
  useEffect(() => {
    hanldeGETALLCountry();
  }, []);

  return (
    <>
      {orderCompleteLoading && <Spinner />}
      <form onSubmit={hanldesubmitorder} className="checkout--details">
        <div className="row main-row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            {err.length > 0 ? (
              <div className="error-details">
                <div className="icon">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
                <ul className="error-list">
                  {err.map((err, index) => {
                    return (
                      <React.Fragment key={index}>
                        <li key={index}>
                          <span className="text-capitalize">{err}</span>
                          <span className="pl-1"> is a required field</span>
                        </li>
                      </React.Fragment>
                    );
                  })}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
          {state.loading ? (
            <Spinner />
          ) : (
            <>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <aside className="billing-detail">
                  <div className="fullname d-flex justify-content-between">
                    <div className={`form-row fullname-children`}>
                      <label htmlFor="firstname" className="form-label">
                        First Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          billingValidated.firstname ? "invalid" : ""
                        }`}
                        id="firstname"
                        name="firstname"
                        placeholder="John"
                        value={billignAddress.firstname}
                        onChange={hanldeBillingChange}
                      />
                      {billingValidated.firstname ? (
                        <div style={{ color: "red" }}>
                          First Name can not be empty
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      className={`form-row fullname-children ${billingValidated}`}
                    >
                      <label htmlFor="lastname" className="form-label">
                        {" "}
                        Last Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          billingValidated.lastname ? "invalid" : ""
                        }`}
                        id="lastname"
                        name="lastname"
                        placeholder="Doe"
                        value={billignAddress.lastname}
                        onChange={hanldeBillingChange}
                      />
                      {billingValidated.lastname ? (
                        <div style={{ color: "red" }}>
                          Last Name can not be empty
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="form-row">
                    <label htmlFor="company_name" className="form-label">
                      Company name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        billingValidated.company_name ? "invalid" : ""
                      }`}
                      id="company_name"
                      name="company_name"
                      placeholder="John"
                      value={billignAddress.company_name}
                      onChange={hanldeBillingChange}
                    />
                    {billingValidated.company_name ? (
                      <div style={{ color: "red" }}>
                        Company Name can not be empty
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-row">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        billingValidated.address ? "invalid" : ""
                      }`}
                      id="address"
                      name="address"
                      placeholder="fsd .."
                      value={billignAddress.address}
                      onChange={hanldeBillingChange}
                    />
                    {billingValidated.address ? (
                      <div style={{ color: "red" }}>
                        Address Name can not be empty
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-row">
                    <label htmlFor="countryregion" className="form-label">
                      Country / Region <span className="required">*</span>
                    </label>
                    <select
                      name="countryregion"
                      id="countryregion"
                      className={`form-select ${
                        billingValidated.countryregion ? "invalid" : ""
                      }`}
                      // value={billignAddress.countryregion}
                      onChange={hanldeBillingChange}
                    >
                      <option value={"selectcounty"} disabled selected={true}>
                        -- select county ---
                      </option>
                      {counties.length > 0
                        ? counties.map((element, i) => {
                            return (
                              <option key={i} value={element.country}>
                                {element.country}
                              </option>
                            );
                          })
                        : null}
                    </select>
                    {billingValidated.countryregion ? (
                      <div style={{ color: "red" }}>
                        Country Name can not be empty
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-row">
                    <label htmlFor="towncity">
                      Town / City <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        billingValidated.towncity ? "invalid" : ""
                      }`}
                      name="towncity"
                      id="towncity"
                      placeholder="Town City"
                      value={billignAddress.towncity}
                      onChange={hanldeBillingChange}
                    />
                    {billingValidated.towncity ? (
                      <div style={{ color: "red" }}>
                        Town/City Name can not be empty
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-row">
                    <label htmlFor="statecountry">
                      State / Country <span className="required">*</span>
                    </label>
                    {states.length > 0 ? (
                      <select
                        name="statecountry"
                        id="statecountry"
                        className={`form-select ${
                          billingValidated.statecountry ? "invalid" : ""
                        }`}
                        // value={billignAddress.statecountry}
                        onChange={hanldeBillingChange}
                      >
                        <option value="selectstate" selected disabled>
                          --select state--
                        </option>

                        {states.map((ele, i) => {
                          return (
                            <option key={i} value={ele}>
                              {ele}
                            </option>
                          );
                        })}
                        <option value={"other"}>other</option>
                      </select>
                    ) : null}

                    {otherBillingState ? (
                      <input
                        className={`form-control ${
                          billingValidated.statecountry ? "invalid" : ""
                        }`}
                        name="statecountry"
                        value={billignAddress.statecountry}
                        // disabled={otherBillingStateDisabled ? false : true}
                        onChange={hanldeBillingChangeInput}
                      />
                    ) : null}
                    {/* {otherBillingState && states.length < 0 ? (
                      <input
                        className={`form-control ${
                          billingValidated.statecountry ? "invalid" : ""
                        }`}
                        name="statecountry"
                        value={billignAddress.statecountry}
                        onChange={hanldeBillingChange}
                      />
                    ) : null} */}
                    {billingValidated.statecountry ? (
                      <div style={{ color: "red" }}>
                        State/Country can not be empty
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-row">
                    <label htmlFor="postcode" className="form-label">
                      Postcode / ZIP <span className="required">*</span>{" "}
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        billingValidated.postcode ? "invalid" : ""
                      }`}
                      name="postcode"
                      id="postcode"
                      placeholder="Postcode / ZIP"
                      value={billignAddress.postcode}
                      onChange={hanldeBillingChange}
                    />
                    {billingValidated.postcode ? (
                      <div style={{ color: "red" }}>
                        Post Code can not be empty
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-row">
                    <label htmlFor="phone" className="form-label">
                      Phone <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        billingValidated.phone ? "invalid" : ""
                      }`}
                      name="phone"
                      id="phone"
                      placeholder="923001234567"
                      value={billignAddress.phone}
                      onChange={hanldeBillingChange}
                    />
                    {billingValidated.phone ? (
                      <div style={{ color: "red" }}>Phone can not be empty</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-row">
                    <label htmlFor="email" className="form-label">
                      Email address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-control ${
                        billingValidated.email ? "invalid" : ""
                      }`}
                      name="email"
                      id="email"
                      placeholder="johndeo@gmail.com"
                      value={billignAddress.email}
                      onChange={hanldeBillingChange}
                    />
                    {billingValidated.email ? (
                      <div style={{ color: "red" }}>Email can not be empty</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="differentshipping"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="differentshipping"
                    >
                      Ship to a different address?
                    </label>
                  </div>
                  {address ? (
                    <div>
                      <div className="fullname d-flex justify-content-between">
                        <div className={`form-row fullname-children`}>
                          <label htmlFor="firstname" className="form-label">
                            First Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              shippingValidated.ship_firstname ? "invalid" : ""
                            }`}
                            id="firstname"
                            name="ship_firstname"
                            placeholder="John"
                            value={shippingAddress.ship_firstname}
                            onChange={hanldeShippingChange}
                          />
                          {shippingValidated.ship_firstname && address ? (
                            <div style={{ color: "red" }}>
                              First Name can not be empty
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div
                          className={`form-row fullname-children ${shippingValidated}`}
                        >
                          <label htmlFor="lastname" className="form-label">
                            {" "}
                            Last Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              shippingValidated.ship_lastname ? "invalid" : ""
                            }`}
                            id="lastname"
                            name="ship_lastname"
                            placeholder="Doe"
                            value={shippingAddress.ship_lastname}
                            onChange={hanldeShippingChange}
                          />
                          {shippingValidated.ship_lastname && address ? (
                            <div style={{ color: "red" }}>
                              Last Name can not be empty
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="form-row">
                        <label htmlFor="company_name" className="form-label">
                          Company name
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            shippingValidated.ship_company_name ? "invalid" : ""
                          }`}
                          id="ship_company_name"
                          name="ship_company_name"
                          placeholder="John"
                          value={shippingAddress.ship_company_name}
                          onChange={hanldeShippingChange}
                        />
                        {shippingValidated.ship_company_name && address ? (
                          <div style={{ color: "red" }}>
                            Company Name can not be empty
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-row">
                        <label htmlFor="ship_address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            shippingValidated.ship_address ? "invalid" : ""
                          }`}
                          id="ship_address"
                          name="ship_address"
                          placeholder="fsd .."
                          value={shippingAddress.ship_address}
                          onChange={hanldeShippingChange}
                        />
                        {shippingValidated.company_name ? (
                          <div style={{ color: "red" }}>
                            Address Name can not be empty
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-row">
                        <label htmlFor="countryregion" className="form-label">
                          Country / Region <span className="required">*</span>
                        </label>

                        {/* <select
                          name="countryregion"
                          id="countryregion"
                          className={`form-select ${
                            billingValidated.countryregion ? "invalid" : ""
                          }`}
                          // value={billignAddress.countryregion}
                          onChange={hanldeBillingChange}
                        >
                          <option
                            value={"selectcounty"}
                            disabled
                            selected={true}
                          >
                            -- select county ---
                          </option>
                          {counties.length > 0
                            ? counties.map((element, i) => {
                                return (
                                  <option key={i} value={element.country}>
                                    {element.country}
                                  </option>
                                );
                              })
                            : null}
                        </select> */}
                        <select
                          name="ship_countryregion"
                          id="countryregion"
                          className={`form-select ${
                            shippingValidated.ship_countryregion
                              ? "invalid"
                              : ""
                          }`}
                          // value={shippingAddress.ship_countryregion}
                          onChange={hanldeShippingChange}
                        >
                          <option
                            value={"ship_county"}
                            disabled
                            selected={true}
                          >
                            -- select county ---
                          </option>
                          {counties.length > 0
                            ? counties.map((element, i) => {
                                return (
                                  <option key={i} value={element.country}>
                                    {element.country}
                                  </option>
                                );
                              })
                            : null}
                        </select>
                        {shippingValidated.ship_countryregion && address ? (
                          <div style={{ color: "red" }}>
                            Country Name can not be empty
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-row">
                        <label htmlFor="towncity">
                          Town / City <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            shippingValidated.ship_towncity ? "invalid" : ""
                          }`}
                          name="ship_towncity"
                          id="towncity"
                          placeholder="Town City"
                          value={shippingAddress.ship_towncity}
                          onChange={hanldeShippingChange}
                        />
                        {shippingValidated.ship_towncity && address ? (
                          <div style={{ color: "red" }}>
                            Town/City Name can not be empty
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-row">
                        <label htmlFor="statecountry">
                          State / Country <span className="required">*</span>
                        </label>
                        {/* <select
                          name="ship_statecountry"
                          id="statecountry"
                          className={`form-select ${
                            shippingValidated.ship_statecountry ? "invalid" : ""
                          }`}
                          value={shippingAddress.ship_statecountry}
                          onChange={hanldeShippingChange}
                        >
                          <option value="AGN">Agusan del Norte</option>
                          <option value="AGS">Agusan del Sur</option>
                          <option value="AKL">Aklan</option>
                          <option value="ALB">Albay</option>
                          <option value="ANT">Antique</option>
                          <option value="APA">Apayao</option>
                          <option value="AUR">Aurora</option>
                          <option value="BAS">Basilan</option>
                        </select> */}
                        {ship_states.length > 0 ? (
                          <select
                            name="ship_statecountry"
                            id="statecountry"
                            className={`form-select ${
                              shippingValidated.ship_statecountry
                                ? "invalid"
                                : ""
                            }`}
                            // value={shippingAddress.ship_statecountry}
                            onChange={hanldeShippingChange}
                          >
                            <option value="ship_state" selected disabled>
                              --select state--
                            </option>

                            {ship_states.map((ele, i) => {
                              return (
                                <option key={i} value={ele}>
                                  {ele}
                                </option>
                              );
                            })}
                            <option value={"other"}>other</option>
                          </select>
                        ) : null}
                        {otherShippinedState ? (
                          <input
                            className={`form-control ${
                              shippingValidated.ship_statecountry
                                ? "invalid"
                                : ""
                            }`}
                            name="ship_statecountry"
                            value={shippingAddress.ship_statecountry}
                            onChange={hanldeShippedChangeInput}
                          />
                        ) : null}

                        {shippingValidated.ship_statecountry && address ? (
                          <div style={{ color: "red" }}>
                            State/Country can not be empty
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-row">
                        <label htmlFor="postcode" className="form-label">
                          Postcode / ZIP <span className="required">*</span>{" "}
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            shippingValidated.ship_postcode ? "invalid" : ""
                          }`}
                          name="ship_postcode"
                          id="postcode"
                          placeholder="Postcode / ZIP"
                          value={shippingAddress.ship_postcode}
                          onChange={hanldeShippingChange}
                        />
                        {shippingValidated.ship_postcode && address ? (
                          <div style={{ color: "red" }}>
                            Post Code can not be empty
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-row">
                        <label htmlFor="phone" className="form-label">
                          Phone <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            shippingValidated.ship_phone ? "invalid" : ""
                          }`}
                          name="ship_phone"
                          id="ship_phone"
                          placeholder="923001234567"
                          value={shippingAddress.ship_phone}
                          onChange={hanldeShippingChange}
                        />
                        {shippingValidated.ship_phone ? (
                          <div style={{ color: "red" }}>
                            Phone can not be empty
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-row">
                        <label htmlFor="email" className="form-label">
                          Email address <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          className={`form-control ${
                            shippingValidated.ship_email ? "invalid" : ""
                          }`}
                          name="ship_email"
                          id="ship_email"
                          placeholder="johndeo@gmail.com"
                          value={shippingAddress.ship_email}
                          onChange={hanldeShippingChange}
                        />
                        {shippingValidated.ship_email ? (
                          <div style={{ color: "red" }}>
                            Email can not be empty
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="form-row">
                    <label htmlFor="ordernotes">Order notes (optional)</label>
                    <textarea
                      type="text"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      className="form-control"
                      id="ordernotes"
                      name="ordernotes"
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                    />
                    {/* {shippingValidated.ordernotes ? (
                      <div style={{ color: "red" }}>Notes can not be empty</div>
                    ) : (
                      ""
                    )} */}
                  </div>
                </aside>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <aside className="your-order">
                  <table className="w-100 table-wrapper">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    {state.data.length < 1 ? (
                      <tbody>
                        <tr>
                          <td className="product-name" colSpan={2}>
                            <strong className="product-quantity">
                              No item i Cart
                            </strong>
                          </td>
                        </tr>
                      </tbody>
                    ) : (
                      <>
                        <tbody>
                          {state.data.map((e, i) => {
                            return (
                              <tr key={i}>
                                <td className="product-name">
                                  <span className="product-id">
                                    {e.product_detail.name}
                                  </span>
                                  <strong className="product-quantity">
                                    {" "}
                                    × {e.quantity}
                                  </strong>
                                </td>
                                <td className="product-total">
                                  <span className="amount">
                                    <bdi>
                                      {new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                      }).format(e.sale_price)}
                                    </bdi>
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                        <tfoot>
                          <tr className="foot-row">
                            <th className="cart-subtotal-title"> Subtotal</th>
                            <th className="subtotal-price">
                              <span className="amount">
                                <bdi>{TotalPrice()}</bdi>
                              </span>
                            </th>
                          </tr>
                          <tr className="foot-row">
                            <th className="shipping"> Shipping</th>
                            <th className="free-shipping">Free shipping</th>
                          </tr>
                          <tr className="order-total foot-row">
                            <th className="total"> Total</th>
                            <th className="total-price">
                              <strong className="amount">
                                <bdi>{TotalPrice()}</bdi>
                              </strong>
                            </th>
                          </tr>
                        </tfoot>
                      </>
                    )}
                  </table>
                  <div className="cash-on-delivery">
                    <span className="checked-icon">
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <p>Cash on delivery</p>
                    <p>Pay with cash upon delivery.</p>
                  </div>
                  <div className="order-checkout-btns">
                    <button className="place-order" type="submit">
                      Place order
                    </button>
                    <Link href="/cart" className="return-to-cart">
                      Return to cart
                    </Link>
                    <ToastContainer />
                  </div>
                </aside>
              </div>
            </>
          )}
        </div>
        <ToastContainer />
      </form>
    </>
  );
};

export default CheckoutBillingDetail;

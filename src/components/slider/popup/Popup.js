import React, { useState } from "react";
import "./popup.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { togglePopUp } from "@/redux/slices/togglePopup";
const Popup = () => {
  const data = useSelector((state) => state.togPop);
  console.log(data, "data is here");
  const dispatch = useDispatch();
  const [embed, setEmbed] = useState("");
  const [shortCut, setShortCut] = useState("");
  const [link, setLink] = useState("");
  const [close, setClose] = useState(false);
  const _handleClose = () => {
    console.log("close button Clicked", data);
    dispatch(togglePopUp(close));
  };
  console.log(close, "close and on");
  return (
    <>
      <div className="main_wrapper_pop">
        <div className="overlay"></div>
        <div className="popup_wrapper">
          <div className="pop_first_section">
            <h4>Share Slide Share</h4>
            <i className="fa-solid fa-xmark" onClick={_handleClose}></i>
          </div>
          <div className="social_links">
            <Link
              href="https://www.facebook.com/"
              className="facebook"
              target="blank"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              href="https://twitter.com/"
              className="twittter"
              target="blank"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link
              href="https://pk.linkedin.com/"
              className="linkedinn"
              target="blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </div>
          <div className="input_links">
            <div className="embed">
              <label>Embed</label>
              <input
                className="form-control"
                value={embed}
                onChange={(e) => setEmbed(e.target.value)}
                placeholder="Embed"
              />
            </div>
            <div className="wordpressShortCut">
              <label>WordPress ShortCode</label>
              <input
                className="form-control"
                value={shortCut}
                onChange={(e) => setShortCut(e.target.value)}
                placeholder="WordPress ShortCode"
              />
            </div>
            <div className="link">
              <label>Link</label>
              <input
                className="form-control"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Link"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;

"use client";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import Link from "next/link";
import { useState } from "react";
import style from "./style.module.css";
// import pdftesting from "./../../../../public/assets/pdf/pdf-file-for-testing.pdf";
import withAuth from "@/utils/auth";
const  page = ({ params }) => {
  const { slug } = params;
  let headingname = slug.split("-").join(" ");

  const [comments, setComments] = useState({
    file: "",
    comment: "",
    notfiy: false,
  });
  const hanldChange = (e) => {
    setComments({ ...comments, [e.target.name]: e.target.value });
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
    console.log(comments);
  };
  const hanldenotify = (e) => {
    setComments({ ...comments, [e.target.name]: e.target.checked });
  };

  const hanldeImage = (e) => {
    setComments({ ...comments, [e.target.name]: e.target.files });
  };
  return (
    <>
      <BreadCrum
        breadHeading={headingname}
        pagess={[
          {
            page: "Home",
            link: "/",
          },

          {
            page: headingname,
            link: "/",
          },
        ]}
      />
      <section className={style.single_donwnload_detail}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className={style.pdf_preview}>
                <iframe
                  src={"/assets/pdf/pdf-file-for-testing.pdf"}
                  width="100%"
                  height={"600px"}
                />
                <a
                  target="_blank"
                  className={style.arrowicon}
                  href="https://docs.google.com/viewerng/viewer?url=https://repconnect.blaksheepdev.com/download/abd-labs-general-0131/?ind%3D1647890015149%26filename%3DABD_Labs_General_21-0131_11.pdf%26wpdmdl%3D21407%26refresh%3D6407069a4e0e11678182042%26open%3D1"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className={style.list_views}>
                <li>
                  Version
                  <span className={style.badge}>21-0132-0</span>
                </li>
                <li>
                  Download
                  <span className={style.badge}>1</span>
                </li>
                <li>
                  File Size
                  <span className={style.badge}>9.24 MB</span>
                </li>
                <li>
                  File Count
                  <span className={style.badge}>1</span>
                </li>
                <li>
                  Create Date
                  <span className={style.badge}>March 21, 2022</span>
                </li>
                <li>
                  Last Updated
                  <span className={style.badge}>March 21, 2022</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <a className={style.downloadbtndownloadspage} download>
                download
              </a>
            </div>
          </div>
          <form onSubmit={hanldeSubmit}>
            <div className="row">
              <div className="col-12">
                <div className={style.leaveAReplay}>
                  <h2> Leave a Reply</h2>
                  <p>
                    Logged in as grtesting.{" "}
                    <Link href="#">Edit your profile</Link> .{" "}
                    <Link href="#"> Log out?</Link> Required fields are marked *
                  </p>
                  <div className={`d-flex  ${style.attachment}`}>
                    <p>
                      Upload attachment
                      <small>
                        (Allowed file types: <strong>jpg, gif, png,</strong>{" "}
                        maximum file size: <strong>60MB.</strong> )
                      </small>
                    </p>
                    <input name="file" type="file" onChange={hanldeImage} />
                  </div>
                  <div>
                    <label> Comment *</label>
                    <textarea
                      className={style.commit}
                      value={comments.comment}
                      name="comment"
                      onChange={hanldChange}
                    />
                  </div>
                  <div className={style.notifydiv}>
                    <label htmlFor="checkbox">
                      <input
                        type="checkbox"
                        id="checkbox"
                        name="notfiy"
                        onChange={hanldenotify}
                      />
                      Notify me of followup comments via e-mail. You can also
                      <a href="#"> subscribe </a> without commenting.
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className={style.submitpostcomment}>
                  post comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default withAuth(page);
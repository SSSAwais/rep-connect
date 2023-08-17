"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styless from "../blog.module.css";
import blog from "../../../assets/images/singleproductsimages/blogImagess.png";
import like1 from "../../../assets/images/singleproductsimages/like1.png";
import like3 from "../../../assets/images/singleproductsimages/like3.jpeg";
import like4 from "../../../assets/images/singleproductsimages/like4.png";
import like5 from "../../../assets/images/singleproductsimages/like5.png";
import like6 from "../../../assets/images/singleproductsimages/like6.png";
import like7 from "../../../assets/images/singleproductsimages/like7.jpg";
import like8 from "../../../assets/images/singleproductsimages/like8.jpg";
import like9 from "../../../assets/images/singleproductsimages/like9.jpg";
import like10 from "../../../assets/images/singleproductsimages/like10.png";
import LikedBypeople from "@/components/likedByPeople/LikedBypeople";
import BlogComments from "@/components/blogComments/BlogComments";
import comment1 from "../../../assets/images/singleproductsimages/comment1.png";
import comment2 from "../../../assets/images/singleproductsimages/comment2.jpg";
import comment3 from "../../../assets/images/singleproductsimages/comment3.png";
import BreadCrum from "@/components/breadCrum/BreadCrum";
import withAuth from "@/utils/auth";
import axios from "axios";
import Spinner from "@/components/spinner/Spinner";
const page = ({ params }) => {
  let { id } = params;
  const withoutdash = id.split("-").join(" ");
  const [data, setData] = useState("");
  const [formData, setFormData] = useState({
    commentDetail: "",
  });
  const [inddex, setInddex] = useState();
  const [checkBox, setCheckBox] = useState(false);
  const [image, setImage] = useState([]);
  const [isLiked, setIsLiked] = useState(true);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState([
    {
      img: like1,
    },
    {
      img: like6,
    },
    {
      img: like3,
    },
    {
      img: like4,
    },
    {
      img: like5,
    },
    {
      img: like9,
    },
    {
      img: like6,
    },
    {
      img: like9,
    },
    {
      img: like7,
    },
    {
      img: like8,
    },
    {
      img: like10,
    },
  ]);
  const [comments, setComments] = useState([
    {
      userIcon: comment1,
      usertitle: "Darci Simon",
      dates: "June 10,2022 at 4:52pm",
      para: "Thank you",
    },
    {
      userIcon: comment2,
      usertitle: "michaelmaitland ",
      dates: "June 10, 2022 at 5:47 pm",
      para: "Great to have a company that turns things around very quickly to address current health needs from our customers.",
    },
    {
      userIcon: comment3,
      usertitle: "larskeeley",
      dates: "June 16, 2022 at 11:26 am",
      para: "Team  We have a lot going on but nothing will help you more than developing your own ID support in your territory! Don’t believe me…just ask Luis Lopez who is on the cusp on bringing on two whoppers in new accounts. IDs know Candida Auris is a problem and they love our price point and see the value of our NGS as a pre-screening solution!   As you pursue new business/providers a local ID Ambassador will help smooth acceptance and adoption!      Good hunting!",
    },
  ]);
  const _handleUnLiked = () => {
    setIsLiked(!isLiked);
  };
  function handleInput(e) {
    const newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  }

  const handleFileSelect = (e) => {
    console.log(e.target.files);
    setImage(e.target.files);
  };
  const _handleCheckBox = (e) => {
    setCheckBox(!checkBox);
  };

  const [singlePostData, setSinglePostData] = useState([]);
  const _handleBlogDetails = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://anxious-foal-shift.cyclic.app/api/post/${id}`)
      .then((resp) => {
        setSinglePostData(resp.data.data.post);
        setLoading(false);
        console.log(resp.data.data.post.format);
        setData(resp.data.data.post.format);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  // var jsonData = data;
  // var newJsonData = JSON.parse(jsonData);
  console.log(data, "parsing data");

  return (
    <>
      <BreadCrum
        breadHeading={withoutdash}
        pagess={[
          {
            page: "Home",
            link: "/",
          },
          {
            page: singlePostData.category?.name,
            link: "/category",
          },
          {
            page: withoutdash,
            link: "/",
          },
        ]}
      />

      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className={styless.main_blog_wrappper}>
            <div className="container-xxl">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className={styless.image_wrapper}>
                    <Image
                      src={singlePostData.featured_image?.image.url}
                      alt="image"
                      className="img-fluid"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className={styless.second_row_blog}>
                    <div dangerouslySetInnerHTML={{ __html: data }}></div>
                    {/* <p>{singlePostData.description}</p>
                    <p>
                      Candida auris is a great opportunity for us. When speaking
                      with potential organizations about our screening test
                      please make use of this{" "}
                      <span>
                        <a href="#">sales piece.</a>
                      </span>{" "}
                    </p>
                    <a
                      href="https://www.newswire.com/news/microgendx-provides-rapid-screening-for-candida-auris-to-help-avoid-21736993?_ga=2.20744701.498954283.1654877679-1169054282.1654010273"
                      target="_blank"
                    >
                      We also have a press release.
                    </a>
                    <p>
                      As a reminder we can pick up C. auris in NGS but if your
                      accounts want fast C. auris testing, or an option for
                      pre-screening, we can do C. auris as a PCR panel for $50.
                    </p>
                    <p>Thanks</p>
                    <p>James Compagno</p> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className={styless.like_section}>
                    {/* <button className={styless.likebtn}> </button> */}
                    <button
                      className={`${
                        isLiked ? `${styless.likebtn}` : `${styless.isNotLiked}`
                      }`}
                      onClick={_handleUnLiked}
                    >
                      {" "}
                    </button>
                    <span className={styless.likes_number}>
                      +{singlePostData.post_liked?.length}
                    </span>
                  </div>
                  <div className={styless.liked_by_people}>
                    {likes.map((e, idx) => {
                      return (
                        <div key={idx}>
                          <LikedBypeople img={e.img} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className={styless.comment_section}>
                    <h3>3 Comments</h3>
                    {comments.map((e, idx) => {
                      return (
                        <div key={idx}>
                          <BlogComments
                            id={idx}
                            idx={idx}
                            userIcon={e.userIcon}
                            usertitle={e.usertitle}
                            dates={e.dates}
                            para={e.para}
                            isLiked
                            inddex={idx}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className={styless.leave_replay_section}>
                    <h3>Leave a Reply</h3>
                    <p>
                      Logged in as grtesting. <a href="#">Edit your profile.</a>{" "}
                      &nbsp;
                      <a href="#">Logout?</a> Required fields are marked *{" "}
                    </p>
                    <div className={styless.uploadImage_section}>
                      <p>
                        Upload attachment
                        <span>
                          (Allowed file types: <strong> jpg, gif, png,</strong>
                          maximum file size:<strong> 60MB</strong>)
                        </span>
                        .
                      </p>
                      <p>
                        {" "}
                        <input
                          type="file"
                          name="files"
                          onChange={handleFileSelect}
                        />
                      </p>
                    </div>
                    <div className={styless.commentArea}>
                      <label className={styless.label_input}>Comment *</label>
                      <form onSubmit={_handleBlogDetails}>
                        <textarea
                          name="commentDetail"
                          data-bs-toggle="tooltip"
                          data-bs-placement="center"
                          title="Please fill out this field"
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="6"
                          value={formData.commentDetail}
                          onChange={(e) => handleInput(e)}
                        ></textarea>
                        <p>
                          <label>
                            <input
                              type="checkbox"
                              value={checkBox}
                              onChange={(e) => _handleCheckBox(e)}
                            />
                            Notify me of followup comments via e-mail. You can
                            also <a href="#">subscribe</a> &nbsp; without
                            commenting
                          </label>
                        </p>
                        <input
                          type="submit"
                          name="Post Comment"
                          value="Post Comment"
                          className={styless.button_submit}
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default withAuth(page);

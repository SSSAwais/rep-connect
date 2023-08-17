"use client";
import TagsPopUp from "@/components/admin/tagsPopUp/TagsPopUp";
import Loading from "@/components/cart/CartItems/Loading/Loading";
import Spinner from "@/components/spinner/Spinner";
import style from "../../post-addnew/Addpost.module.css";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import SunEditor from "suneditor-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
const page = ({ params }) => {
  const { id } = params;
  const [loading, setLoading] = useState(false);
  const [tagPopUp, setTagPopUp] = useState(false);
  const [category, setCategory] = useState([]);
  const [tag, setTag] = useState([]);
  const [author, setAuthor] = useState([]);
  const [content, setContent] = useState("");
  const [subscribe, setSubscibe] = useState(false);
  const [postData, setPostData] = useState({
    title: "",
    category: "",
    format: "",
    description: "",
    postRedirect: "",
    url: "",
    redirection_type: "",
    featured_image: "",
    tag: "",
    author: "",
  });
  useEffect(() => {
    axios
      .get(`https://anxious-foal-shift.cyclic.app/api/post/${id}`)
      .then((resp) => {
        setLoading(false);
        setPostData(resp.data.data.post);
        setContent(resp.data.data.post.format);
        setImage(resp.data.data.post);
        console.log(resp.data.data.post);
      })
      .catch((err) => console.log(err));
    axios
      .get("https://anxious-foal-shift.cyclic.app/api/post-category")
      .then((resp) => {
        setCategory(resp.data.data.category);
      })
      .catch((err) => console.log(err));
    axios
      .get("https://anxious-foal-shift.cyclic.app/api/tag")
      .then((resp) => {
        setTag(resp.data.data.tag);
      })
      .catch((err) => console.log(err));
    axios
      .get("https://anxious-foal-shift.cyclic.app/api/author")
      .then((resp) => {
        setAuthor(resp.data.data.author);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section>
        {tagPopUp ? (
          <TagsPopUp
            _handleUploadImages={_handleUploadImages}
            getGllaryUrl={setImageUrrl}
            isSingle={true}
            getImageee={setGetUrlImage}
            getImageId={setImage}
          />
        ) : (
          ""
        )}
        <div className="container-fluid">
          <div className="row my-4">
            <div className="col-lg-6">
              <div className="left">
                <h4 className="product-title">View Post</h4>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <Link
                href="/admin/post"
                className={`add_new_btn border-none ${style.submit_}`}
              >
                Go back to Listing
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className={`${style.product_wrapper}`}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card custom-card shadow-none mb-0 border-0">
                      <div className="card-body p-0">
                        <div className="row gy-3">
                          <div className="col-xl-12">
                            <label className="form-label">
                              Product Title
                              <span className={style.mendatory}>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Title"
                              value={postData.title}
                              name="title"
                              disabled
                            />
                          </div>
                          <div className="col-xl-6">
                            <label className="form-label">
                              Category
                              <span className={style.mendatory}>*</span>
                            </label>
                            <select
                              className="form-control"
                              data-trigger
                              disabled
                            >
                              {category.map((e, idx) => {
                                return (
                                  <option
                                    value={e._id}
                                    key={idx}
                                    selected={
                                      e._id === postData.category._id
                                        ? true
                                        : false
                                    }
                                  >
                                    {e.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="col-xl-6">
                            <label className="form-label">Tag</label>
                            <select
                              className="form-control"
                              data-trigger
                              disabled
                            >
                              {tag.map((e, idx) => {
                                return (
                                  <option
                                    value={e._id}
                                    key={idx}
                                    selected={
                                      e._id === postData.tag?._id ? true : false
                                    }
                                  >
                                    {e.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="col-xl-6">
                            <label className="form-label">Author</label>
                            <select
                              className="form-control"
                              data-trigger
                              disabled
                            >
                              {author.map((e, idx) => {
                                return (
                                  <option
                                    value={e._id}
                                    key={idx}
                                    selected={
                                      e._id === postData.author?._id
                                        ? true
                                        : false
                                    }
                                  >
                                    {e.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className={`col-lg-5`}>
                            <label className="form-label">
                              Image <span className={style.mendatory}>*</span>
                            </label>
                            <div className={style.uploadImg}>
                              <button className="form-control" disabled>
                                <i className="fa-solid fa-upload"></i>
                              </button>
                            </div>
                          </div>
                          <div className={`col-lg-1   ${style.iamge_center}`}>
                            <div className={style.image_shown}>
                              <Image
                                src={postData.featured_image?.image?.url}
                                alt=""
                                width={60}
                                height={60}
                              />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <label
                              className={`form-label ${style.postRedirection}`}
                            >
                              Post Redirection
                            </label>
                            <div className="row">
                              <div className="col-lg-4">
                                <label>Post Redirect</label>
                                <input
                                  className="form-control"
                                  value={postData.postRedirect}
                                  disabled
                                />
                              </div>
                              <div className="col-lg-4">
                                <label>URL</label>
                                <input
                                  className="form-control"
                                  value={postData.url}
                                  disabled
                                />
                              </div>
                              <div className="col-lg-4">
                                <label>Redirection Type</label>
                                <input
                                  className="form-control"
                                  value={postData.redirection_type}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-12">
                            <label className="form-label">Format</label>

                            <div className={style.formatdataEditor}>
                              <SunEditor
                                disable={true}
                                setContents={content}
                                setOptions={{
                                  height: 400,
                                  buttonList: [
                                    ["undo", "redo"],
                                    ["font", "fontSize", "formatBlock"],
                                    [
                                      "bold",
                                      "underline",
                                      "italic",
                                      "strike",
                                      "subscript",
                                      "superscript",
                                    ],
                                    ["removeFormat"],
                                    [
                                      "fontColor",
                                      "hiliteColor",
                                      "outdent",
                                      "indent",
                                    ],
                                    [
                                      "align",
                                      "horizontalRule",
                                      "list",
                                      "table",
                                    ],
                                    ["link", "image", "video"],
                                    ["fullScreen", "showBlocks", "codeView"],
                                  ],
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <label className="form-label">
                              Product Description
                              <span className={style.mendatory}>*</span>
                            </label>
                            <textarea
                              className="form-control"
                              value={postData.description}
                              rows="4"
                              disabled
                            ></textarea>
                          </div>
                          <div className="col-xl-12 d-flex align-items-center">
                            <input
                              type="checkbox"
                              value={subscribe}
                              name="subscribe"
                            />
                            <label className="form-label mx-2 mb-0">
                              Subscribe by E-mail
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer />
    </>
  );
};
export default page;

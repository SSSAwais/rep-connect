"use client";
import AdminBreadCrums from "@/components/admin/adminBreadcrums/AdminBreadCrums";
import React, { useEffect, useState } from "react";
import style from "./Addpost.module.css";
import axios from "axios";
import SunEditor from "suneditor-react";
import TagsPopUp from "@/components/admin/tagsPopUp/TagsPopUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
const Page = () => {
  const [tagPopUp, setTagPopUp] = useState(false);
  const [postData, setPostData] = useState({
    productTitle: "",
    category: "",
    tag: "",
    author: "",
    format: "",
    discription: "",
    postRedirect: "",
    url: "",
    type: "",
  });
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState([]);
  const [tag, setTag] = useState([]);
  const [base64Image, setBase64Image] = useState("");
  const [author, setAuthor] = useState([]);
  const [content, setContent] = useState("");
  const [imageUrrl, setImageUrrl] = useState([]);
  const [getUrlImage, setGetUrlImage] = useState("");
  const [error, setError] = useState(false);
  const [getProfileImageId, setGetProfileImageId] = useState([]);
  const [gallaryImagesUrl, setGetGallaryImagesUrl] = useState([]);
  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value, "<=========== value");
  };
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setBase64Image(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  const [subscribe, setSubscibe] = useState(false);
  const handleChangeSubs = () => {
    setSubscibe(!subscribe);
  };
  const _handleFormSubmitting = (e) => {
    e.preventDefault();
    let posts = {
      post_redirect: postData.postRedirect,
      url: postData.url,
      redirection_type: postData.type,
    };

    const data = {
      title: postData.productTitle,
      description: postData.discription,
      format: content,
      category: postData.category,
      tag: postData.tag,
      featured_image: image[0],
      post_redirection: posts,
    };

    if (
      postData.productTitle.length == 0 ||
      postData.discription.length === 0 ||
      postData.category.length === 0 ||
      image.length < 1
    ) {
      setError(true);
    } else {
      axios
        .post(`https://anxious-foal-shift.cyclic.app/api/post`, data)
        .then((resp) => {
          console.log(resp);
          toast.success(`Post Successfully`);
          setPostData({
            productTitle: "",
            discription: "",
            category: "",
            type: "",
            postRedirect: "",
            url: "",
          });
          setGetUrlImage("");
          setContent("");
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
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
  const _handleUploadImages = () => {
    setTagPopUp(!tagPopUp);
  };

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
            singleImageState={getProfileImageId}
            multiImagesState={gallaryImagesUrl}
          />
        ) : (
          ""
        )}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <AdminBreadCrums
                mainTitle="Add Post"
                linksTitle="Dashboard"
                mainMiniTitle="Add Product"
              />
            </div>
          </div>
          <form onSubmit={_handleFormSubmitting}>
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
                                value={postData.productTitle}
                                onChange={handleChange}
                                name="productTitle"
                              />
                              {error && postData.productTitle.length <= 1 ? (
                                <span className={style.errorMsg}>
                                  Please Enter Name
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                            <div className="col-xl-6">
                              <label className="form-label">
                                Category{" "}
                                <span className={style.mendatory}>*</span>
                              </label>
                              <select
                                className="form-control"
                                data-trigger
                                onChange={handleChange}
                                name="category"
                              >
                                {category.map((e, idx) => {
                                  return (
                                    <option value={e._id} key={idx}>
                                      {e.name}
                                    </option>
                                  );
                                })}
                              </select>
                              {error && postData.category.length <= 1 ? (
                                <span className={style.errorMsg}>
                                  Please Select Category
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                            <div className="col-xl-6">
                              <label className="form-label">Tag</label>
                              <select
                                className="form-control"
                                data-trigger
                                onChange={handleChange}
                                name="tag"
                              >
                                {tag.map((e, idx) => {
                                  return (
                                    <option value={e._id} key={idx}>
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
                                onChange={handleChange}
                                name="author"
                              >
                                {author.map((e, idx) => {
                                  return (
                                    <option value={e._id} key={idx}>
                                      {e.name}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            <div
                              className={` ${
                                getUrlImage ? "col-lg-5" : "col-lg-6"
                              }`}
                            >
                              <label className="form-label">
                                Image <span className={style.mendatory}>*</span>
                              </label>
                              <div className={style.uploadImg}>
                                <button
                                  onClick={_handleUploadImages}
                                  className="form-control"
                                >
                                  <i className="fa-solid fa-upload"></i>
                                </button>
                              </div>
                              {error && image.length <= 1 ? (
                                <span className={style.errorMsg}>
                                  Please Upload Image
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                            <div
                              className={`${
                                getUrlImage
                                  ? "col-lg-1 d-flex align-items-center justify-content-center pt-3"
                                  : ` ${style.not_getting_showm}`
                              }`}
                            >
                              <div className={style.image_shown}>
                                <Image
                                  src={getUrlImage}
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
                                    onChange={handleChange}
                                    name="postRedirect"
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <label>URL</label>
                                  <input
                                    className="form-control"
                                    value={postData.url}
                                    onChange={handleChange}
                                    name="url"
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <label>Redirection Type</label>
                                  <input
                                    className="form-control"
                                    value={postData.type}
                                    onChange={handleChange}
                                    name="type"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-12">
                              <label className="form-label">Format</label>

                              <div className={style.formatdataEditor}>
                                <SunEditor
                                  placeholder="Please Enter Data........"
                                  onChange={setContent}
                                  setOptions={{
                                    height: 400, // Set the desired height of the editor
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
                                Product Description{" "}
                                <span className={style.mendatory}>*</span>
                              </label>
                              <textarea
                                className="form-control"
                                value={postData.discription}
                                onChange={handleChange}
                                rows="4"
                                name="discription"
                              ></textarea>
                              {error && postData.discription.length <= 1 ? (
                                <span className={style.errorMsg}>
                                  Please Enter Description
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                            <div className="col-xl-12 d-flex align-items-center">
                              <input
                                type="checkbox"
                                value={subscribe}
                                onChange={handleChangeSubs}
                                name="subscribe"
                              />
                              <label className="form-label mx-2 mb-0">
                                Subscribe by E-mail
                              </label>
                            </div>
                            <div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-end">
                              <button className={` m-1 ${style.addProduct}`}>
                                Add Product<i className="fa-solid fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Page;

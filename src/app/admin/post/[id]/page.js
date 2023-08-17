"use client";
import TagsPopUp from "@/components/admin/tagsPopUp/TagsPopUp";
import style from "../post-addnew/Addpost.module.css";
import { useEffect, useState } from "react";
import SunEditor from "suneditor-react";
import AdminBreadCrums from "@/components/admin/adminBreadcrums/AdminBreadCrums";
import Image from "next/image";
import axios from "axios";
import Spinner from "@/components/spinner/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
const page = ({ params }) => {
  const { id } = params;
  const [tagPopUp, setTagPopUp] = useState(false);
  const [error, setError] = useState(false);
  const [content, setContent] = useState("");
  const [image, setImage] = useState([]);
  const [getUrlImage, setGetUrlImage] = useState("");
  const [imageUrrl, setImageUrrl] = useState([]);
  const [multipleImage, setMultipleImage] = useState([]);
  const [category, setCategory] = useState([]);
  const [tag, setTag] = useState([]);
  const [author, setAuthor] = useState([]);
  const [subscribe, setSubscibe] = useState(false);
  const [loading, setLoading] = useState(true);
  const [getProfileImageId, setGetProfileImageId] = useState([]);
  const [gallaryImagesUrl, setGallaryImagesUrl] = useState([]);
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
  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value, "<=================");
  };
  const popUpClose = () => {
    setOpen(false);
  };
  const _handleUploadImages = () => {
    setTagPopUp(!tagPopUp);
  };

  const _handleFormSubmitting = (e) => {
    e.preventDefault();
    let posts = {
      post_redirect: postData.postRedirect,
      url: postData.url,
      redirection_type: postData.redirection_type,
    };
    const data = {
      title: postData?.title,
      category: postData.category,
      format: content,
      description: postData.description,
      featured_image: image[0],
      post_redirection: posts,
      tag: postData.tag,
    };

    if (
      postData.title.length < 1 ||
      postData.description.length < 1 ||
      postData.category.length < 1 ||
      image.length < 1
    ) {
      setError(true);
    } else {
      axios
        .put(`https://anxious-foal-shift.cyclic.app/api/post/${id}`, data)
        .then((resp) => {
          toast.success(`Update Successfully`);
          setError(false);
          console.log(resp);
        })
        .catch((err) => console.log(err));
    }
  };
  const handleChangeSubs = () => {
    setSubscibe(!subscribe);
  };
  const getSingleUpdatePost = () => {
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
  };
  useEffect(() => {
    setLoading(true);
    getSingleUpdatePost();
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
      {loading ? (
        <Spinner />
      ) : (
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
            <div className="row my-4">
              <div className="col-lg-6">
                <div className="left">
                  <h4 className="product-title">Update Post</h4>
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
                                onChange={handleChange}
                                name="title"
                              />
                              {error && postData.title.length <= 1 ? (
                                <span className={style.errorMsg}>
                                  Please Enter Name
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                            <div className="col-xl-6">
                              <label className="form-label">
                                Category
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
                                    <option value={e._id} key={idx} selected>
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
                                    <option value={e._id} key={idx} selected>
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
                                    <option value={e._id} key={idx} selected>
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
                            <div className={`col-lg-1   ${style.iamge_center}`}>
                              <div className={style.image_shown}>
                                <Image
                                  src={
                                    getUrlImage
                                      ? getUrlImage
                                      : postData.featured_image?.image?.url
                                  }
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
                                    value={postData.redirection_type}
                                    onChange={handleChange}
                                    name="redirection_type"
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
                                        "video",
                                      ],
                                      ["link", "image"],
                                      ["fullScreen", "showBlocks"],
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
                                onChange={handleChange}
                                rows="4"
                                name="description"
                              ></textarea>
                              {error && postData.description.length <= 1 ? (
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
                              <button
                                className={` m-1 ${style.addProduct}`}
                                onClick={_handleFormSubmitting}
                              >
                                Update Post
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
          </div>
        </section>
      )}
      <ToastContainer />
    </>
  );
};
export default page;

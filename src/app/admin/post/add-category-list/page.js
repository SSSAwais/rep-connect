"use client";
import React, { useEffect, useState } from "react";
import style from "./AddCategoryList.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import TagsPopUp from "@/components/admin/tagsPopUp/TagsPopUp";
const page = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState([]);
  const [error, setError] = useState(false);
  const [multipleImage, setMultipleImage] = useState([]);
  const [getUrlImage, setGetUrlImage] = useState("");
  const [cat, setCat] = useState({
    catTitle: "",
    parentCategoryId: "",
    description: "",
  });
  const _handleChange = (e) => {
    setCat({
      ...cat,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange = (event) => {
    setImage(event.target.files[0]);
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setFile(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFile(null);
    }
  };
  const _handleCancel = () => {
    setFile("");
    setImage("");
  };
  const [parentTagName, setParentTagName] = useState([]);
  console.log(getUrlImage, "get image url");
  /////////////////////post api starts here//////////////////

  const onSubmitCategotry = (e) => {
    e.preventDefault();
    console.log(cat, "categggg");
    console.log(image, "image parent Id");
    console.log(getUrlImage, "image url");
    const body = {
      name: cat.catTitle,
      description: cat.description,
      parent_cat_id: cat.parentCategoryId,
      cover_image: image[0],
    };

    if (cat.catTitle.length <= 0 || image.length <= 0) {
      setError(true);
    } else {
      axios
        .post("https://anxious-foal-shift.cyclic.app/api/post-category", body)
        .then((resp) => {
          console.log(resp);
          setError(false);
        })
        .catch((err) => console.log(err));
    }
  };
  /////////////////////post api end here//////////////////

  const [open, setOpen] = useState(false);
  const _handleTogglePage = () => {
    setOpen(true);
  };
  const popUpClose = () => {
    setOpen(false);
  };

  const _handleparentId = (e) => {
    console.log(e.target.value);
    setCat({
      ...cat,
      [e.target.name]: e.target.value,
    });
  };

  ////////////////get api for post category starts here//////////////

  useEffect(() => {
    axios
      .get("https://anxious-foal-shift.cyclic.app/api/post-category/")
      .then((resp) => {
        console.log(resp.data.data.category);
        setParentTagName(resp.data.data.category);
      })
      .catch((err) => console.log(err));
  }, []);
  ////////////////get api for post category ends here//////////////

  return (
    <>
      <section className={style.addCategoryListWrapper}>
        {open ? (
          <TagsPopUp
            popUpClose={popUpClose}
            getImageId={setImage}
            getImageee={setGetUrlImage}
            getGllaryUrl={setMultipleImage}
            isSingle={true}
          />
        ) : (
          ""
        )}
        <div className="container-fluid">
          <div className={`row ${style.title_row} my-4`}>
            <div className="col-6">
              <div className="left">
                <h4 className="product-title">Post Categories</h4>
              </div>
            </div>
            <div className="col-6">
              <div className="text-end d-block">
                <Link
                  href="/admin/post/post-categories"
                  className={`add_new_btn border-none ${style.submit_}`}
                  type="submit"
                >
                  <span>
                    <i className="fa-solid fa-arrow-left"></i>
                  </span>
                  Back to Category List
                </Link>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmitCategotry}>
            {/* <div className="row">
              <div className="col"> */}
            <div className={style.form_category}>
              <div className="row">
                <div className="col-lg-6">
                  <label>Name of Category</label>
                  <input
                    className="form-control"
                    type="text"
                    value={cat.catTitle}
                    onChange={_handleChange}
                    name="catTitle"
                  />
                  {error && cat.catTitle.length <= 1 ? (
                    <p className={style.errormessage}>Name is required Field</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-lg-6">
                  <label>Select Parent Category</label>
                  <select
                    className="form-select"
                    onChange={_handleparentId}
                    name="parentCategoryId"
                  >
                    <option disabled selected>
                      Please Select Category{" "}
                    </option>
                    {parentTagName?.map((e, idx) => {
                      return (
                        <option value={e._id} key={idx}>
                          {e.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-lg-12">
                  <div className="my-3">
                    <label>Description</label>
                    <textarea
                      className="form-control"
                      value={cat.description}
                      name="description"
                      onChange={_handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="row my-3">
              <div className="col">
                <div className={style.form_category2}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={style.laaabeel}>
                        <label>Image</label>
                        <div className={style.drapFile}>
                          <button
                            onClick={_handleTogglePage}
                            className={`form-control ${style.file_upload}`}
                          >
                            upload image
                          </button>
                          {error && image.length <= 0 ? (
                            <p className={style.errormessage}>
                              Image is required
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                        {getUrlImage.length > 0 ? (
                          <div className={style.img_radius}>
                            <Image
                              src={getUrlImage}
                              alt=""
                              width={60}
                              height={60}
                            />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`row ${style.btn_row}`}>
              <div className="col-12 ">
                <div className="text-end d-block">
                  <button
                    className={`add_new_btn border-none ${style.submit_}`}
                    type="submit"
                  >
                    <span>
                      <i className="fa-solid fa-plus"></i>
                    </span>
                    Add Category
                  </button>
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

export default page;

"use client";
import Link from "next/link";
import style from "../PostCategory.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import TagsPopUp from "@/components/admin/tagsPopUp/TagsPopUp";
import Spinner from "@/components/spinner/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const page = ({ params }) => {
  const [file, setFile] = useState(null);
  const { id } = params;
  const [image, setImage] = useState([]);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [parentTagName, setParentTagName] = useState([]);
  const [imageUrrl, setImageUrrl] = useState([]);
  const [getUrlImage, setGetUrlImage] = useState("");
  const [loading, setLoading] = useState(true);
  const _handleTogglePage = () => {
    setOpen(true);
  };
  const popUpClose = () => {
    setOpen(false);
  };
  const [cat, setCat] = useState({
    name: "",
    description: "",
    parent_cat_id: "",
    cover_image: "",
  });
  const getSingleCategoryData = () => {
    axios
      .get(`https://anxious-foal-shift.cyclic.app/api/post-category/${id}`)
      .then((resp) => {
        setCat(resp.data.data.category);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const _handleChange = (e) => {
    setCat({
      ...cat,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange = (e) => {
    setImage(e.target.files[0]);
    const selectedFile = e.target.files[0];
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

  useEffect(() => {
    setLoading(true);
    getSingleCategoryData();
  }, []);
  useEffect(() => {
    axios
      .get("https://anxious-foal-shift.cyclic.app/api/post-category/")
      .then((resp) => {
        setParentTagName(resp.data.data.category);
      })
      .catch((err) => console.log(err));
  }, []);
  const _handleparentId = (e) => {
    setCat({
      ...cat,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitCategotry = (e) => {
    e.preventDefault();
    const body = {
      name: cat.name,
      description: cat.description,
      parent_cat_id: cat.parent_cat_id,
      cover_image: image[0],
      cover_image: cat.cover_image,
    };
    if (cat.name.length <= 0) {
      setError(true);
    } else {
      axios
        .put(
          `https://anxious-foal-shift.cyclic.app/api/post-category/${id}`,
          body
        )
        .then((resp) => {
          toast.success(`Update SuccessFully`);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className={style.addCategoryListWrapper}>
          {open ? (
            <TagsPopUp
              popUpClose={popUpClose}
              getImageId={setImage}
              getImageee={setGetUrlImage}
              getGllaryUrl={setImageUrrl}
              isSingle={true}
            />
          ) : (
            ""
          )}
          <div className="container-fluid">
            <div className={`row ${style.title_row} my-4`}>
              <div className="col-6">
                <div className="left">
                  <h4 className="product-title">Update Category</h4>
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

            {/* <div className="row">
              <div className="col"> */}
            <div className={style.form_category}>
              <div className="row">
                <div className="col-lg-6">
                  <label>Name of Category</label>
                  <input
                    className="form-control"
                    type="text"
                    value={cat.name}
                    onChange={_handleChange}
                    name="name"
                  />
                  {error && cat.name.length <= 1 ? (
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
                    name="parent_cat_id"
                  >
                    {parentTagName.length > 0 ? (
                      parentTagName.map((e, idx) => {
                        return (
                          <option
                            value={e._id}
                            key={idx}
                            selected={
                              e._id === cat?.parent_cat_id?._id ? true : false
                            }
                          >
                            {e.name}
                          </option>
                        );
                      })
                    ) : (
                      <option>Please Select Category</option>
                    )}
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
                          <div className={style.img_radius}>
                            <Image
                              src={cat?.cover_image?.image.url}
                              width={60}
                              height={60}
                              alt=""
                            />
                          </div>
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
                    onClick={(e) => onSubmitCategotry(e)}
                  >
                    Update
                  </button>
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

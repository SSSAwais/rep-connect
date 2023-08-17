import React, { useEffect, useState } from "react";
import "./addproductcategory.css";
import UploadIcon from "../../uploadIcons/UploadIcon";
import loader from "../../../../assets/images/admin/product-loader.gif";
import Image from "next/image";
import TagsPopUp from "../../tagsPopUp/TagsPopUp";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "@/components/spinner/Spinner";
const AddProductCategory = () => {
  const [cateName, setCateName] = useState("");
  const [parentCateName, setParentCateName] = useState(null);

  const [categories, setCategoires] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdLoading, setIsAdLoading] = useState(false);

  /// GET IMAGES AND ID FROM POPUP MODEL
  const [mediaPopUp, setMediaPopUp] = useState(false);
  const [getImageId, setgetImageId] = useState(null);
  const [getImageUrl, setgetImageUrl] = useState("");
  const [gallaryImagesUrl, setGallaryImagesUrl] = useState([]);

  const hanlderPOSTPRODUCTCATEGORY = (data) => {
    setIsAdLoading(true);
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_URL}api/product-category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsAdLoading(false);
        setIsLoading(false);

        if (data.success === 0) {
          toast.error(`${data.message}`, {
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
        if (data.success === 1) {
          toast.success("Category Add", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setCateName("");
          setParentCateName(null);
          setgetImageId(null);
          setgetImageUrl(null);
          hanldeGETAllProductCategory();
        }
      });
  };
  const hanldeOpenPopup = () => {
    setMediaPopUp(!mediaPopUp);
  };
  const hanldeAddNewCategory = (e) => {
    e.preventDefault();

    if (!cateName || !getImageId) {
      toast.error("Name and Image is required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      let formDetail;
      if (parentCateName) {
        formDetail = {
          name: cateName,
          parent_cat_id: parentCateName,
          image: getImageId[0],
        };
      } else {
        formDetail = {
          name: cateName,
          image: getImageId[0],
        };
      }
      hanlderPOSTPRODUCTCATEGORY(formDetail);
    }
  };
  const hanldeGETAllProductCategory = () => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/product-category`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        if (data.success === 1) {
          setCategoires(
            data.data.category.filter((e) => e.parent_cat_id === null)
          );
        } else {
          setCategoires([]);
        }
      });
  };

  useEffect(() => {
    hanldeGETAllProductCategory();
  }, []);

  return (
    <>
      {mediaPopUp && (
        <TagsPopUp
          isSingle={true}
          popUpClose={hanldeOpenPopup}
          getImageId={setgetImageId}
          getImageee={setgetImageUrl}
          getGllaryUrl={setGallaryImagesUrl}
          multiImagesState={[]}
          singleImageState={getImageId}
        />
      )}

      {isAdLoading && <Spinner />}
      <form className="add-pro-cate" onSubmit={hanldeAddNewCategory}>
        <div className="pro-cate-form-row">
          <div className="form-col">
            <label htmlFor="CategoryName" className="form-label">
              Category Name
            </label>
            <input
              type="text"
              className="form-control"
              id="CategoryName"
              name="CategoryName"
              placeholder="CategoryName"
              value={cateName}
              onChange={(e) => setCateName(e.target.value)}
            />
          </div>
          <div className="form-col">
            <label htmlFor="parent" className="form-label">
              Parent Category
            </label>
            {isLoading ? (
              <div>
                <Image src={loader} alt="loader" width={50} height={50} />
              </div>
            ) : (
              <select
                name="parent"
                className="form-select"
                onChange={(e) => setParentCateName(e.target.value)}
                value={parentCateName}
              >
                <option value={null}> --select--</option>
                {categories.map((e) => {
                  return (
                    <option key={e._id} value={e._id}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            )}
          </div>
        </div>
        <div className="pro-cate-form-row">
          <div className="form-col">
            <label htmlFor="sale_price" className="form-label">
              Category Image
            </label>
            <div className="upload-iconss" onClick={hanldeOpenPopup}>
              <UploadIcon />
            </div>
            <div className="my-4">
              {getImageUrl ? (
                <Image
                  src={getImageUrl}
                  alt="loader"
                  className="inline-block border p-1"
                  width={150}
                  height={150}
                />
              ) : null}
            </div>
          </div>
        </div>

        <div className="w-100 mt-3">
          <button type="submit" className="form-add-product-btn">
            <span>
              <i className="fa-solid fa-plus"></i>
            </span>
            add product
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default AddProductCategory;

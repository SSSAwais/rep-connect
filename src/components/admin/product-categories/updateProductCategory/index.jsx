import React, { useEffect, useState } from "react";
import UploadIcon from "../../uploadIcons/UploadIcon";
import "./updateProCate.css";
import Spinner from "@/components/spinner/Spinner";
import Image from "next/image";
import TagsPopUp from "../../tagsPopUp/TagsPopUp";
import { ToastContainer, toast } from "react-toastify";

const UpdateProCategory = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [cateName, setCateName] = useState(null);
  const [parentCateName, setParentCateName] = useState(null);
  const [categories, setCategoires] = useState([]);
  const [cateImage, setCateImage] = useState(null);
  const [cateImageId, setCateImageID] = useState(null);

  // TAGS POP UP
  const [mediaPopUpOpened, setMediaPopUpOpened] = useState(false);

  // UPDATE API FUNCTION

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
  const hanldePATCHapiFunction = (dat) => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/product-category/${data._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dat),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);

        if (data.success === 1) {
          toast.success("Category Update", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          hanldeGETAllProductCategory();
        } else {
          toast.error("something wrong");
        }
      });
  };

  const hanldeUpdateCategory = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let updateId = {
      name: cateName,
      image: cateImageId[0],
      parent_cat_id: parentCateName,
    };
    hanldePATCHapiFunction(updateId);
  };

  useEffect(() => {
    hanldeGETAllProductCategory();
    setCateName(data.name);
    setParentCateName(data.parent_cat_id ? data.parent_cat_id._id : null);
    setCateImage(data.image.image.url);
    setCateImageID([data.image._id]);
  }, []);

  const hanldeOpenPopup = () => {
    setMediaPopUpOpened(!mediaPopUpOpened);
  };
  return (
    <>
      {isLoading && <Spinner />}
      {mediaPopUpOpened && (
        <TagsPopUp
          popUpClose={hanldeOpenPopup}
          getImageId={setCateImageID}
          getImageee={setCateImage}
          isSingle={true}
          multiImagesState={[]}
          singleImageState={cateImageId}
        />
      )}
      <form className="add-pro-cate-update" onSubmit={hanldeUpdateCategory}>
        <div className="pro-cate-form-row-update">
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
              <div>{null}</div>
            ) : (
              <select
                name="parent"
                className="form-select"
                onChange={(e) => setParentCateName(e.target.value)}
                value={parentCateName}
                defaultValue={null}
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
        <div className="pro-cate-form-row-update">
          <div className="form-col">
            <label htmlFor="sale_price" className="form-label">
              Category Image
            </label>
            <div className="upload-iconss" onClick={hanldeOpenPopup}>
              <UploadIcon />
            </div>
            <div className="my-4">
              {cateImage ? (
                <Image
                  src={cateImage}
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
            Update
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default UpdateProCategory;

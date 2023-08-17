import React, { useEffect, useState } from "react";
import "./addproductform.css";
import loader from "../../../../assets/images/admin/product-loader.gif";
import Image from "next/image";
import Multiselect from "multiselect-react-dropdown";
import SunEditor from "suneditor-react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import UploadIcon from "../../uploadIcons/UploadIcon";

import TagsPopUp from "../../tagsPopUp/TagsPopUp";

const AddProductForm = ({ data }) => {
  const router = useRouter();

  const item = data;
  const [discription, setDiscription] = useState("");
  const [addProduct, setAddProduct] = useState({
    product_name: "",
    quantity: "",
    price: "",
    sale_price: "",
    short_description: "",
  });
  const [categories, setCategories] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [sinleProfileUpoload, singleProfileUplaodPopUp] = useState(false);
  const [getProfileImageId, setGetProfileImageId] = useState([]);
  const [getProfileImageUrl, setGetProfileImageUrl] = useState("");
  const [gallaryImagesUrl, setGallaryImagesUrl] = useState([]);
  const [isSingle, setIsSingle] = useState(false);

  const hanldeChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAddProduct({ ...addProduct, [name]: value });
  };

  const hanldeAddProductAPI = (body) => {
    setIsLoading(true);
    fetch(process.env.NEXT_PUBLIC_URL + "api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setIsLoading(false);
        if (data.success === 1) {
          toast.success("Product add successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setAddProduct({
            product_name: "",
            quantity: "",
            price: "",
            sale_price: "",
            short_description: "",
          });
          setGetProfileImageUrl("");
          setGallaryImagesUrl([]);
          setDiscription("");
          setCategories([]);

          setGetProfileImageId([]);

          setTimeout(() => {
            router.push("/admin/product");
          }, 1500);
        } else {
          toast.error("Something Wrong", {
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
      });
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (
      !addProduct.product_name ||
      !addProduct.short_description ||
      !discription ||
      !categories[0] ||
      !addProduct.price ||
      !addProduct.quantity ||
      !addProduct.sale_price ||
      !getProfileImageId
    ) {
      toast.error("all filed are required 😛😛", {
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
      let gallary = [];
      gallaryImagesUrl.forEach((e) => gallary.push(e.id));
      let postOrder = {
        name: addProduct.product_name,
        short_disc: addProduct.short_description,
        disc: discription,
        category: categories[0],
        regular_price: addProduct.price,
        sale_price: addProduct.sale_price,
        stock_quantity: addProduct.quantity,
        cover_image: getProfileImageId[0],
        gallary: gallary,
      };

      // POST FUNCTION
      hanldeAddProductAPI(postOrder);
    }
  };

  // FILTER GETEGORY ID
  const filterChategoryFuction = (arr) => {
    let newarr = [];
    arr.filter((p_item) => newarr.push(p_item._id));
    setCategories(newarr);
  };

  const hanldeSingle = () => {
    setIsSingle(true);
    singleProfileUplaodPopUp(!sinleProfileUpoload);
  };
  const hanldeRemoveImage = (imageid) => {
    let newImages = gallaryImagesUrl.filter((e) => {
      return e.id !== imageid;
    });
    setGallaryImagesUrl(newImages);
  };
  const hanldeCloseMediaPopup = () => {
    singleProfileUplaodPopUp(false);
  };

  const hanldeGallary = () => {
    setIsSingle(false);
    singleProfileUplaodPopUp(true);
  };

  return (
    <>
      {isLoading && (
        <div className="adding-produt-loader">
          <Image src={loader} alt="demo" className="adding-imag"></Image>
        </div>
      )}
      {sinleProfileUpoload && (
        <TagsPopUp
          popUpClose={hanldeCloseMediaPopup}
          getImageId={setGetProfileImageId}
          getImageee={setGetProfileImageUrl}
          isSingle={isSingle}
          getGllaryUrl={setGallaryImagesUrl}
          singleImageState={getProfileImageId}
          multiImagesState={gallaryImagesUrl}
        />
      )}

      <form onSubmit={hanldeSubmit} className="add-product-form">
        <div className="pro-form-row name_pro">
          <div className="form-col">
            <label htmlFor="product_name" className="form-label">
              Product name
            </label>
            <input
              type="text"
              className="form-control"
              id="product_name"
              placeholder="Product Name"
              name="product_name"
              value={addProduct.product_name}
              onChange={hanldeChanged}
            />
          </div>
        </div>
        <div className="pro-form-row">
          <div className="form-col">
            <label htmlFor="price" className="form-label">
              price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              placeholder="Price"
              value={addProduct.price}
              onChange={hanldeChanged}
            />
          </div>
          <div className="form-col">
            <label htmlFor="sale_price" className="form-label">
              sale price
            </label>
            <input
              type="number"
              className="form-control"
              id="sale_price"
              name="sale_price"
              placeholder="Sale Price"
              value={addProduct.sale_price}
              onChange={hanldeChanged}
            />
          </div>
        </div>
        <div className="pro-form-row-cate">
          <div className="form-col">
            <label htmlFor="product_categores" className="form-label">
              product categories
            </label>
            <div className="product-categories">
              {item.loading ? (
                <div className="loading">
                  <Image src={loader} alt="Loading" className="img-fluid" />
                </div>
              ) : item.data.length < 0 ? (
                <h2>No categores</h2>
              ) : (
                <Multiselect
                  showArrow
                  options={item.data}
                  displayValue={"name"}
                  onSelect={filterChategoryFuction}
                  onRemove={filterChategoryFuction}
                />
              )}
            </div>
          </div>
          <div className="form-col">
            <label htmlFor="quantity" className="form-label">
              stock quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              placeholder="Quantity"
              name="quantity"
              value={addProduct.quantity}
              onChange={hanldeChanged}
            />
          </div>
        </div>
        <div className="pro-form-row-files">
          <div className="form-col">
            <label htmlFor="product_image" className="form-label">
              Product Image
            </label>

            <div className="profile-pop" onClick={hanldeSingle}>
              <UploadIcon />
            </div>
            <div className="imagess-preview">
              {getProfileImageUrl ? (
                <div className="d-inline-block img-box position-relative">
                  <Image
                    src={getProfileImageUrl}
                    alt={"name"}
                    width={80}
                    height={80}
                  />
                </div>
              ) : null}
            </div>
          </div>
          <div className="form-col">
            <label htmlFor="product_gallary" className="form-label">
              Product Gallary
            </label>
            <div className="profile-pop" onClick={hanldeGallary}>
              <UploadIcon />
            </div>
            <div className="d-flex w-100 flex-wrap mt-2 imagess-preview">
              {gallaryImagesUrl.length >= 1
                ? gallaryImagesUrl.map((element) => {
                    return (
                      <div
                        className="d-inline-block img-box position-relative"
                        key={element.id}
                      >
                        <div
                          className="deletepic"
                          onClick={() => hanldeRemoveImage(element.id)}
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </div>
                        <Image
                          src={element.url}
                          alt={"name"}
                          width={80}
                          height={80}
                        />
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>

        <div className="disc-form-row">
          <div className="form-col">
            <label
              htmlFor="short_description"
              className="form-label short_description"
            >
              product short description
            </label>
            <textarea
              className="form-control"
              id="short_description"
              name="short_description"
              placeholder="Short Description"
              value={addProduct.short_description}
              onChange={hanldeChanged}
            />
          </div>
          <div className="form-col">
            <label htmlFor="product_description" className="form-label">
              Product description
            </label>
            <div className="product-long-desction">
              <SunEditor
                onChange={setDiscription}
                setContents={discription}
                setOptions={{
                  height: 300,
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
                    ["fontColor", "hiliteColor", "outdent", "indent"],
                    ["align", "horizontalRule", "list", "table"],
                    ["link", "image", "video"],
                    ["fullScreen", "showBlocks", "codeView"],
                  ],
                }}
              />
            </div>
          </div>
        </div>
        <div className="form-col">
          <button type="submit" className="form-add-product-btn">
            <span>
              <i className="fa-solid fa-plus"></i>
            </span>
            add product
          </button>
        </div>
        <ToastContainer />
      </form>
    </>
  );
};

export default AddProductForm;

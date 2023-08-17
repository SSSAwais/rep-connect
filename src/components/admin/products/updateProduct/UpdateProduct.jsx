import React, { useEffect, useState } from "react";
import "./UpdateProduct.css";
import loader from "../../../../assets/images/admin/product-loader.gif";
import Image from "next/image";
import Multiselect from "multiselect-react-dropdown";
import SunEditor from "suneditor-react";
import { ToastContainer, toast } from "react-toastify";
import { product } from "@/redux/slices/productSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import UploadIcon from "../../uploadIcons/UploadIcon";
import Spinner from "@/components/spinner/Spinner";
import TagsPopUp from "../../tagsPopUp/TagsPopUp";
import { useRouter } from "next/navigation";

const UpdateProduct = ({ allCategory, product }) => {
  const router = useRouter();
  const item = allCategory;
  // console.log(product);
  const [discription, setDiscription] = useState("");
  const [addProduct, setAddProduct] = useState({
    product_name: "",
    quantity: "",
    price: "",
    sale_price: "",
    short_description: "",
  });
  const [categories, setCategories] = useState([]);

  const hanldeChanged = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAddProduct({ ...addProduct, [name]: value });
  };

  // FILTER GETEGORY ID
  const filterChategoryFuction = (arr) => {
    let newarr = [];
    arr.filter((p_item) =>
      newarr.push({
        _id: p_item._id,
        name: p_item.name,
      })
    );
    setCategories(newarr);
  };

  // WORKING ON POPUP COMPONENT
  const [isLoading, setIsLoading] = useState(false);
  const [sinleProfileUpoload, singleProfileUplaodPopUp] = useState(false);
  const [getProfileImageId, setGetProfileImageId] = useState([]);
  const [getProfileImageUrl, setGetProfileImageUrl] = useState("");
  const [gallaryImagesUrl, setGallaryImagesUrl] = useState([]);
  const [isSingle, setIsSingle] = useState(false);

  const hanldeSingle = () => {
    setIsSingle(true);
    singleProfileUplaodPopUp(!sinleProfileUpoload);
  };
  const hanldeGallary = () => {
    setIsSingle(false);
    singleProfileUplaodPopUp(true);
  };

  const hanldeCloseMediaPopup = () => {
    singleProfileUplaodPopUp(!sinleProfileUpoload);
  };
  const hanldeRemoveImage = (id) => {
    let arr = gallaryImagesUrl.filter((e) => e.id !== id);
    setGallaryImagesUrl(arr);
  };
  /// GET SINGLE PRODUCT DETAIL FOR UPDATEING
  const hanldeGETsinlgeProduct = () => {
    setAddProduct({
      product_name: product.data.name,
      quantity: product.data.stock_quantity,
      price: product.data.regular_price,
      sale_price: product.data.sale_price,
      short_description: product.data.short_disc,
    });
    setGetProfileImageUrl(product.data.cover_image.image.url);
    setGetProfileImageId([product.data.cover_image._id]);

    let gall = [];
    product.data.gallary.slice(1).forEach((e) => {
      gall.push({
        id: e._id,
        url: e.image.url,
      });
    });

    setGallaryImagesUrl(gall);
    setDiscription(product.data.disc);
    setCategories([
      {
        _id: product.data.category._id,
        name: product.data.category.name,
      },
    ]);
  };

  const updatePRDOCUTapi = (body) => {
    fetch(`${process.env.NEXT_PUBLIC_URL}api/product/${product.data._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setIsLoading(false);
        if (data.success === 1) {
          toast.success("Product Updated ");
        } else {
          toast.error("Something Wrong ");
        }
      });
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let gallary = [];
    gallaryImagesUrl.forEach((e) => gallary.push(e.id));
    let postOrder = {
      name: addProduct.product_name,
      short_disc: addProduct.short_description,
      disc: discription,
      category: categories[0]._id,
      regular_price: addProduct.price,
      sale_price: addProduct.sale_price,
      stock_quantity: addProduct.quantity,
      cover_image: getProfileImageId[0],
      gallary: gallary,
    };
    updatePRDOCUTapi(postOrder);
  };

  useEffect(() => {
    hanldeGETsinlgeProduct();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="adding-produt-loader">
          <Spinner />
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
                  selectedValues={categories}
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

            <div className="imagess-preview">
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
                  height: 300, // Set the desired height of the editor
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
            Update Product
          </button>
        </div>
        <ToastContainer />
      </form>
    </>
  );
};

export default UpdateProduct;

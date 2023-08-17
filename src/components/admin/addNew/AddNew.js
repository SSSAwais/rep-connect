import React, { useEffect, useState } from "react";
import "./AddNew.css";
import ImagesView from "./imagesView/ImagesView";
import { TagsInput } from "react-tag-input-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getTags } from "@/redux/slices/tagLibrary";
import Spinner from "@/components/spinner/Spinner";
import { tagsDataAll } from "@/redux/slices/tagsDataAll";
const AddNew = ({ _hndleClsosee }) => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState([]);
  const [closePop, setClosePop] = useState(false);
  const [simpleImage, setSimpleImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleImageChange = (event) => {
    const uploadImage = Array.from(event.target.files);
    setSimpleImage((prevImages) => [...prevImages, ...uploadImage]);
  };
  const _handleCancePopUp = () => {
    setClosePop(_hndleClsosee);
  };
  const _handlePopData = (e) => {
    e.preventDefault();
    const apiEndpoint = `https://anxious-foal-shift.cyclic.app/api/media/all`;
    setLoading(true);
    if (selected.length < 1 || simpleImage.length < 1) {
      // toast.error(`Please fill all fields`);
      setError(true);
      setLoading(false);
    } else {
      const userToken = JSON.parse(localStorage.getItem("token"));
      const header = {
        "x-auth-token": userToken,
      };
      const data = JSON.stringify(selected);
      const formData = new FormData();

      for (var i = 0; i < simpleImage.length; i++) {
        formData.append("image", simpleImage[i]);
      }
      formData.append("tag", data);

      axios
        .post("https://anxious-foal-shift.cyclic.app/api/media", formData, {
          headers: header,
        })
        .then((resp) => {
          dispatch(getTags());
          dispatch(tagsDataAll(apiEndpoint));
          console.log(resp.data.success);
          setClosePop(_hndleClsosee);
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  const _handleDelImages = (id) => {
    setSimpleImage(
      simpleImage.filter((item, index) => {
        return index + 1 !== id;
      })
    );
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={_handlePopData}>
          <div className="addNew_wrapper">
            <div className="inner_Wrapper">
              <div>
                <label>Select Image</label>
                <input
                  multiple
                  type="file"
                  className="form-control"
                  onChange={handleImageChange}
                  accept="image/*"
                />
                {error && <p className="error_msg">Please fill both fields</p>}
              </div>
              <div className="images___">
                {simpleImage?.map((e, idx) => {
                  console.log(e, "eeeeee");
                  return (
                    <span key={idx} className="image_row">
                      <ImagesView
                        key={idx + 1}
                        immmg={URL.createObjectURL(e)}
                        id={idx + 1}
                        _handleDeleteImage={_handleDelImages}
                      />
                    </span>
                  );
                })}
              </div>
              <div className="input_lists">
                <TagsInput
                  value={selected}
                  onChange={setSelected}
                  name="inputs"
                  placeHolder="Enter Tag Name"
                />
                {error && <p className="error_msg">Please fill both fields</p>}
              </div>
              <div className="button_area text-end">
                <button onClick={_handleCancePopUp}>Cancel</button>
                <button>Save</button>
              </div>
            </div>
          </div>
        </form>
      )}

      <ToastContainer />
    </>
  );
};

export default AddNew;

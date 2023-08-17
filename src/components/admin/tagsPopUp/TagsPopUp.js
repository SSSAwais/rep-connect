import Spinner from "@/components/spinner/Spinner";
import { getTags } from "@/redux/slices/tagLibrary";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import NavTabs from "../addNew/navTabs/NavTabs";
import MediaLibContent from "../mediaLibContent/MediaLibContent";
import emptycart from "../../../assets/images/empty/empty.gif";
import "./TagsPopUp.css";
import Image from "next/image";
import { tagsDataAll } from "@/redux/slices/tagsDataAll";
const TagsPopUp = ({
  popUpClose,
  _handleUploadImages,
  getImageId,
  getImageee,
  getGllaryUrl,
  isSingle,
  multiImagesState,
  singleImageState,
}) => {
  const state = useSelector((state) => state.tags);
  const [addItem, setAddItem] = useState(false);
  const dispatch = useDispatch();
  const tagss = useSelector((state) => state.tags.data);
  const tagsData = useSelector((state) => state.tagsData);
  const [selectedImage, setSelectedImage] = useState([]);
  const [selectedGallryImage, setSelectedGallryImage] = useState([]);
  const [singleImage, setSingleImage] = useState([]);
  const tagsLoading = useSelector((state) => state.tagsData.loading);
  const [close, setClose] = useState(false);
  const [getImage, setGetImage] = useState([]);

  // const _handleAddNew = () => {
  //   setAddItem(true);
  // };

  // const _hndleClsosee = () => {
  //   setAddItem(false);
  // };

  const [tabsNames, setTabsNames] = useState([]);
  let tabsNumer = tagsData.data.length;
  const [loadMoree, setLoadMoree] = useState(30);
  const [loadMore2, setLoadMore2] = useState(6);
  const [loadMore3, setLoadMore3] = useState(6);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  const _handleLoadMore = () => {
    if (loadMoree < tabsNumer) {
      setLoadMoree(loadMoree + 10);
      setToggleBtn(true);
    } else {
      setToggleBtn(true);
    }
  };

  const _handleViewLesss = () => {
    if (loadMoree > 30) {
      setLoadMoree(loadMoree - 10);
    } else {
      setLoadMoree(loadMoree);
      setToggleBtn(false);
    }
  };

  const getMediaTagData = () => {
    axios
      .get("https://anxious-foal-shift.cyclic.app/api/mediatag")
      .then((resp) => {
        setTabsNames(resp.data.data.tags);

        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const [newData, setNewData] = useState("all");
  const _handletagsName = (id) => {
    setNewData(id);
    setSelectedImage([]);
    setSelectedGallryImage([]);
  };
  const getAllDataTags = () => {
    const queryParam = newData;
    const apiEndpoint = `https://anxious-foal-shift.cyclic.app/api/media/${queryParam}`;
    dispatch(tagsDataAll(apiEndpoint));
  };

  useEffect(() => {
    const queryParam = newData;
    const apiEndpoint = `https://anxious-foal-shift.cyclic.app/api/media/${queryParam}`;
    setLoading(false);
    dispatch(getTags());
    dispatch(tagsDataAll(apiEndpoint));
    // let arr = [...selectedImage];
    // setSelectedImage(arr.filter((item) => item !== id));
  }, [newData]);
  const _handleAllGetImages = () => {
    const apiEndpoint = `https://anxious-foal-shift.cyclic.app/api/media/all`;
    dispatch(tagsDataAll(apiEndpoint));
  };

  const _handleImageId = (id, img) => {
    const selectImage = id;
    if (selectedImage.filter((item) => item === id).length > 0) {
      let arr = [...selectedImage];
      let gallaryagg = [...selectedGallryImage];
      setSelectedImage(arr.filter((item) => item !== id));
      setSelectedGallryImage(gallaryagg.filter((item) => item.id !== id));
    } else {
      setSelectedImage((prevImage) => [...prevImage, selectImage]);
      let obj = {
        id: id,
        url: img,
      };
      setSelectedGallryImage((prevImage) => [...prevImage, obj]);
    }
    setGetImage(img);
    setSingleImage(id);
  };
  const handleSingleImage = (id, img) => {
    const selectImage = id;

    if (selectedImage.filter((item) => item === id).length === 1) {
      setSelectedImage(selectedImage.filter((item) => item !== id));
    } else {
      setSelectedImage([selectImage]);
      let obj = {
        id: id,
        url: img,
      };
      // setSelectedGallryImage((prevImage) => [obj]);
      setSelectedGallryImage((prevImage) => [prevImage]);
    }
    // setSingleImage(id);

    setGetImage(img);
  };
  const _handleClosePopUp = () => {
    setClose(popUpClose);
    setClose(_handleUploadImages);
  };

  // HANDLE SUBMIT SELECT IMAGES FUNCTION
  const _handleSelect = () => {
    setClose(popUpClose);
    setClose(_handleUploadImages);
    if (isSingle) {
      getImageee(getImage);
      getImageId(selectedImage);
    } else {
      let arr = [...multiImagesState, ...selectedGallryImage];

      getGllaryUrl(arr);
      // setSelectedImage(selectedGallryImage);
    }
  };

  useEffect(() => {
    if (isSingle) {
      if (!singleImageState) {
        setSelectedImage([]);
      } else {
        setSelectedImage(singleImageState);
      }
    } else {
      let arr = [];
      multiImagesState.forEach((e) => arr.push(e.id));
      setSelectedImage(arr);
    }
  }, []);

  return (
    <>
      <section className="tags_popup_main_wrapper">
        <div className="popup_content">
          <i
            className="fa-solid fa-xmark cancel"
            onClick={_handleClosePopUp}
          ></i>
          <div className="tabs_sectons_wrapper">
            <h2 className="media_heading">Media </h2>
            <ul
              className="nav nav-pills tabs_menu_"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  // className={` ${id === id ? "nav-link" : "active"}`}
                  className="nav-link"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  onClick={_handleAllGetImages}
                >
                  All
                </button>
              </li>
              {tagss?.map((e, idx) => {
                return (
                  <li className="nav-item" role="presentation" key={idx}>
                    <NavTabs
                      id={e.name}
                      tabName={e.name}
                      _handletagsName={_handletagsName}
                    />
                  </li>
                );
              })}
            </ul>

            <div className="row">
              <div
                className="tab-content tab_content content_section"
                id="pills-tabContent"
              >
                <div
                  className="tab-pane fade  show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  {tagsLoading ? (
                    <Spinner />
                  ) : (
                    <div className="d-flex flex-wrap  image_wrapper">
                      {tagsData.data.length > 0 ? (
                        tagsData.data?.slice(0, loadMoree).map((e, idx) => {
                          return (
                            <div className="col text-center" key={idx}>
                              <MediaLibContent
                                image={e.image.url}
                                img={e.image.url}
                                key={idx}
                                id={e._id}
                                _handleGettingId={_handleImageId}
                                selectedImage={selectedImage}
                                singleImage={singleImage}
                                isSingle={isSingle}
                                _handleSingle={handleSingleImage}
                              />
                            </div>
                          );
                        })
                      ) : (
                        <div className="m-auto">
                          <Image src={emptycart} alt="" />
                        </div>
                      )}
                    </div>
                  )}

                  <div className="text-center">
                    {loadMoree < tabsNumer ? (
                      <p className="tabs_number">
                        Showing {loadMoree} out of {tabsNumer} items
                      </p>
                    ) : (
                      <p className="tabs_number">
                        Showing all {tabsNumer} items
                      </p>
                    )}

                    {loadMoree < tabsNumer && (
                      <button onClick={_handleLoadMore} className="loadMOre">
                        Load More
                      </button>
                    )}

                    {loadMoree > 30 ? (
                      <button
                        onClick={_handleViewLesss}
                        className="viewLess_btn"
                      >
                        View Less
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12 text-end final_button">
                <button className="mx-3" onClick={_handleClosePopUp}>
                  Cancel
                </button>
                <button onClick={_handleSelect}>Select</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TagsPopUp;

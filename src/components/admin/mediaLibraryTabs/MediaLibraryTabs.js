import React, { useRef, useEffect, useState } from "react";
import "./MediaLibraryTabs.css";
import covid from "../../../assets/images/mediaLibrary/covid-flu-22-300x300.jpg";
import womenkey from "../../../assets/images/mediaLibrary/womensKEY-provider-22-300x300.jpg";
import men from "../../../assets/images/mediaLibrary/mensKEY-provider-22-300x300.jpg";
import uroKey from "../../../assets/images/mediaLibrary/uroKEY-provider-22-300x300.jpg";
import MediaLibContent from "../mediaLibContent/MediaLibContent";
import NavTabs from "../addNew/navTabs/NavTabs";
import axios from "axios";
import Spinner from "@/components/spinner/Spinner";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTags } from "@/redux/slices/tagLibrary";
import { tagsDataAll, tagsDataAllSlice } from "@/redux/slices/tagsDataAll";
import { usePathname } from "next/navigation";
import emptycart from "../../../assets/images/empty/empty.gif";
import Image from "next/image";
const MediaLibraryTabs = () => {
  const path = usePathname();
  const state = useSelector((state) => state.tags);
  const [addItem, setAddItem] = useState(false);
  const dispatch = useDispatch();
  const tagss = useSelector((state) => state.tags.data);
  const tagsData = useSelector((state) => state.tagsData);
  const [delBtn, setDelBtn] = useState(false);
  const firstRender = useRef(true);
  const [selectedImage, setSelectedImage] = useState([]);
  const tagsLoading = useSelector((state) => state.tagsData.loading);

  const _handleAddNew = () => {
    setAddItem(true);
  };

  const _hndleClsosee = () => {
    setAddItem(false);
  };

  const [tabs1, setTab1] = useState([
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
  ]);
  const [tabs2, setTabs2] = useState([
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
  ]);
  const [tabs3, setTabs3] = useState([
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
    {
      image: uroKey,
    },
    {
      image: covid,
    },
    {
      image: men,
    },
    {
      image: womenkey,
    },
    {
      image: womenkey,
    },
  ]);
  const [tabsNames, setTabsNames] = useState([
    // {
    //   tabName: "Home",
    // },
    // {
    //   tabName: "Services",
    // },
    // {
    //   tabName: "Contact",
    // },
    // {
    //   tabName: "Contact",
    // },
    // {
    //   tabName: "Services",
    // },
    // {
    //   tabName: "Home",
    // },
    // {
    //   tabName: "Contact",
    // },
    // {
    //   tabName: "Services",
    // },
    // {
    //   tabName: "Home",
    // },
    // {
    //   tabName: "Contact",
    // },
    // {
    //   tabName: "Services",
    // },
    // {
    //   tabName: "Home",
    // },
    // {
    //   tabName: "Contact",
    // },
    // {
    //   tabName: "Services",
    // },
    // {
    //   tabName: "Contact",
    // },
    // {
    //   tabName: "Services",
    // },
    // {
    //   tabName: "Contact",
    // },
    // {
    //   tabName: "Services",
    // },
    // {
    //   tabName: "Contact",
    // },
    // {
    //   tabName: "Services",
    // },
  ]);
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
  // const _handleLoadMore2 = () => {
  //   if (loadMore2 < tabsNumer2) {
  //     setLoadMore2(loadMore2 + 3);
  //   }
  //   setToggleBtn(true);
  // };
  // const _handleLoadMore3 = () => {
  //   if (loadMore3 < tabsNumer3) {
  //     setLoadMore3(loadMore3 + 3);
  //   }
  //   setToggleBtn(true);
  // };
  const _handleViewLesss = () => {
    if (loadMoree > 30) {
      setLoadMoree(loadMoree - 10);
      console.log("console1");
    } else {
      setLoadMoree(loadMoree);
      setToggleBtn(false);
      console.log("console2");
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
  }, [newData]);
  const _handleAllGetImages = () => {
    const apiEndpoint = `https://anxious-foal-shift.cyclic.app/api/media/all`;
    dispatch(tagsDataAll(apiEndpoint));
  };
  const _handleDeleteButton = () => {
    const apiEndpoint = `https://anxious-foal-shift.cyclic.app/api/media/all`;
    const body = {
      media: selectedImage,
    };
    axios
      .post(
        `https://anxious-foal-shift.cyclic.app/api/media/delete_media`,
        body
      )
      .then((resp) => {
        dispatch(tagsDataAll(apiEndpoint));
        // getAllDataTags();
      })
      .catch((err) => console.log(err));
  };
  const _handleImageId = (id) => {
    const selectImage = id;
    if (selectedImage.filter((item) => item === id).length > 0) {
      let arr = [...selectedImage];
      setSelectedImage(arr.filter((item) => item !== id));
    } else {
      setSelectedImage((prevImage) => [...prevImage, selectImage]);
      // setSelectedImage([]);
    }
  };
  console.log(tagsData, "tags datA");
  return (
    <>
      <div className="tabs_sectons_wrapper">
        <ul className="nav nav-pills tabs_menu_" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
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
          <div className="col-6"></div>
          <div className="col-6 text-end">
            <div className="right my-2 ">
              {selectedImage.length > 0 && (
                <button
                  onClick={_handleDeleteButton}
                  className="addNewButton   deletebtn"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="tab-content tab_content" id="pills-tabContent">
            <div
              className="tab-pane fade  show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              {tagsLoading ? (
                <Spinner />
              ) : (
                <div className="d-flex flex-wrap position-relative image_wrapper">
                  {tagsData.data.length > 0 ? (
                    tagsData.data?.slice(0, loadMoree).map((e, idx) => {
                      return (
                        <div
                          className="col-xxl-1 col-xl-2  col-lg-2 text-center"
                          key={idx}
                        >
                          <MediaLibContent
                            image={e.image.url}
                            key={idx}
                            id={e._id}
                            _handleGettingId={_handleImageId}
                            selectedImage={selectedImage}
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
                  <p className="tabs_number">Showing all {tabsNumer} items</p>
                )}

                {loadMoree < tabsNumer && (
                  <button onClick={_handleLoadMore} className="loadMOre">
                    Load More
                  </button>
                )}

                {loadMoree > 30 ? (
                  <button onClick={_handleViewLesss} className="viewLess_btn">
                    View Less
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </>
      )} */}
    </>
  );
};

export default MediaLibraryTabs;

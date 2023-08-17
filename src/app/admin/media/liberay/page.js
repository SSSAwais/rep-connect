"use client";
import React, { useEffect, useState } from "react";
import style from "./liberay.module.css";
import MediaLibraryTabs from "@/components/admin/mediaLibraryTabs/MediaLibraryTabs";
import AddNew from "@/components/admin/addNew/AddNew";
import { useSelector } from "react-redux";

const page = () => {
  const state = useSelector((state) => state.tags);
  const [addItem, setAddItem] = useState(false);
  const [tabNames, setTabsNames] = useState([]);

  const _handleAddNew = () => {
    console.log("handle new click is pressed");
    setAddItem(true);
  };

  const _hndleClsosee = () => {
    setAddItem(false);
  };

  return (
    <>
      <section className={style.liberay_wrapper}>
        {addItem ? <AddNew _hndleClsosee={_hndleClsosee} data={state} /> : ""}
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="left">
                <h4 className="product-title">Media Library</h4>
              </div>
            </div>
            <div className="col-6 text-end">
              <div className="right">
                <button className={style.addNewButton} onClick={_handleAddNew}>
                  Add New
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <MediaLibraryTabs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

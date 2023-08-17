"use client";

import React, { useState } from "react";
import style from "./editComments.module.css";
import SunEditor from "suneditor-react";
const page = () => {
  const [content, setContent] = useState("");
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className={style.commentsHeading}>
              <h4>Edit Comments</h4>
            </div>
          </div>
        </div>
        <div className={`row`}>
          <div className="col-lg-12">
            <div className={style.main_wrapppper}>
              <div className={style.title_section}>
                <h6>Author</h6>
              </div>
              <div className={`row align-items-center ${style.firstRow}`}>
                <div className="col-lg-1">
                  <label>Name:</label>
                </div>
                <div className="col-lg-11">
                  <input className="form-control" />
                </div>
              </div>
              <div className={`row align-items-center ${style.second_roww}`}>
                <div className="col-lg-1">
                  <label>Email:</label>
                </div>
                <div className="col-lg-11">
                  <input className="form-control" />
                </div>
              </div>
              <div className={`row align-items-center ${style.third_roww}`}>
                <div className="col-lg-1">
                  <label>URL:</label>
                </div>
                <div className="col-lg-11">
                  <input className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className={style.sunEditor}>
              <SunEditor
                placeholder="Please Enter Data........"
                onChange={setContent}
                setOptions={{
                  height: 400, // Set the desired height of the editor
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
        <div className="row mt-2 justify-content-end">
          <div className="col-lg-3 text-end">
            <div className={style.update_button}>
              <button className={style.updatee}>Update Comment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

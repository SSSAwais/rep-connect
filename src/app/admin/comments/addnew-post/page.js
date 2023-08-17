"use client";
import React, { useState } from "react";
import SunEditor from "suneditor-react";
import style from "../Comments.module.css";
const page = () => {
  const [content, setContent] = useState("");
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row my-4">
            <div className="col-lg-12">
              <div className={style.heading_section}>
                <h4>Add New Post</h4>
              </div>
            </div>
          </div>
          <div className={style.bg_upate}>
            <div className="row">
              <div className="col-lg-12">
                <div className={style.postName}>
                  <input
                    className="form-control"
                    placeholder="Please Enter Post Title"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
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
            <div className="row">
              <div className="col">
                <div className="text-end">
                  <button className={style.updateee}>Save Post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

"use client";
import SunEditor from "suneditor-react";
import style from "../../Comments.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = ({ params }) => {
  const [content, setContent] = useState("");
  const router = useRouter();
  const { id } = params;
  console.log(id, "id for single post view");
  const _handleAddNewPost = () => {
    router.push("/admin/comments/addnew-post");
  };
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row my-4">
            <div className="col-lg-6">
              <div className={style.heading_section}>
                <h4>Edit Post</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={style.add_newButton}>
                <button onClick={_handleAddNewPost}>Add New</button>
              </div>
            </div>
          </div>
          <div className={style.bg_upate}>
            <div className="row">
              <div className="col-lg-12">
                <div className={style.postName}>
                  <input className="form-control" />
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
                  <button className={style.updateee}>Update Post</button>
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

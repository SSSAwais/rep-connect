import React, { useState } from "react";
import "./replayModal.css";
import SunEditor from "suneditor-react";

const ReplayModal = ({ _handleReplaySection }) => {
  const [content, setContent] = useState("");
  const [close, setClose] = useState(false);
  console.log(_handleReplaySection, "data from parent");
  const _handleClosePopup = () => {
    setClose(_handleReplaySection);
  };
  const _handleSave = () => {
    setClose(_handleReplaySection);
  };
  return (
    <>
      <section className="main_replay_wrapper">
        <div className="replay_content">
          <div className="text-end cancel_icon">
            <i className="fa-solid fa-xmark " onClick={_handleClosePopup}></i>
          </div>
          <div className="sunEditor">
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
          <div className="Button_replay_section text-end">
            <button onClick={_handleClosePopup}>Cancel</button>
            <button onClick={_handleSave}>Save</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReplayModal;

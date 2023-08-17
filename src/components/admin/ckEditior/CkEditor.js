import React, { useRef, useState } from "react";

// import "suneditor/dist/css/suneditor.min.css";
import SunEditor from "suneditor-react";
import "./CkEditor.css";
const CkEditior = () => {
  const [content, setContent] = useState("");

  return (
    <>
      <SunEditor
        onChange={setContent}
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
    </>
  );
};

export default CkEditior;

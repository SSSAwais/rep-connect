import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "./CkEditor.css";

const CkEditior = () => {
  return (
    <>
      <div id="editor" className="editing">
        <CKEditor
          editor={ClassicEditor}
            // config={{
            //   plugins: [UploadAdapter],
            //   toolbar: ["imageUpload", "undo", "redo"],
            //   simpleUpload: {
            //     uploadUrl: "/your-upload-url",
            //   },
            // }}
          data="<p>Hello Ghulam Rasool I m here to assist you baby.</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    </>
  );
};

export default CkEditior;

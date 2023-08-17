import React, { useState } from "react";
import "./ReplaySection.css";
const ReplaySection = () => {
    const [checkBox, setCheckBox] = useState(false)
    const [image, setImage] = useState([]);
    const [formData, setFormData] = useState({
      commentDetail: "",
    });
    const handleFileSelect = (e) => {

        console.log(e.target.files);
        setImage(e.target.files);
      };
      const _handleCheckBox = (e) => {
        setCheckBox(!checkBox);
        // console.log(checkBox)
      };
      const _handleBlogDetails = (e) => {
        e.preventDefault();
        console.log("form data get", image, formData.commentDetail);
        console.log("image", image);
        console.log(checkBox, "check box value is here");
      };
  return (
    <>
      <div className="leave_replay_section">
        <h3>Leave a Reply</h3>
        <p>
          Logged in as grtesting. <a href="#">Edit your profile.</a> &nbsp;
          <a href="#">Logout?</a> Required fields are marked *{" "}
        </p>
        <div className="uploadImage_section">
          <p>
            Upload attachment
            <span>
              (Allowed file types: <strong> jpg, gif, png,</strong>
              maximum file size:<strong> 60MB</strong>)
            </span>
            .
          </p>
          <p>
            {" "}
            <input type="file" name="files" onChange={handleFileSelect} />
          </p>
        </div>
        <div className="commentArea">
          <label className="label_input">Comment *</label>
          <form onSubmit={_handleBlogDetails}>
            <textarea
              name="commentDetail"
              data-bs-toggle="tooltip"
              data-bs-placement="center"
              title="Please fill out this field"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
              value={formData.commentDetail}
              onChange={(e) => handleInput(e)}
            ></textarea>
            <p>
              <label>
                <input
                  type="checkbox"
                  value={checkBox}
                  onChange={(e) => _handleCheckBox(e)}
                />
                Notify me of followup comments via e-mail. You can also{" "}
                <a href="#">subscribe</a> &nbsp; without commenting
              </label>
            </p>
            <input
              type="submit"
              name="Post Comment"
              value="Post Comment"
              className="button_submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ReplaySection;

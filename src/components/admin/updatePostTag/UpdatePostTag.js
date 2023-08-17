import React from "react";

const UpdatePostTag = () => {
  const _handleTagForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={_handleTagForm}>
        <div className="row">
          <div className="col-12">
            <div className="tagssName">
              <label>Tag Name</label>
              <input className="form-control" name="tagName" />
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12">
            <div className="tagDispp">
              <label>Discription</label>
              <textarea
                className="form-control"
                name="tagDisp"
                rows="4"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row tagRow">
          <div className="col-12 ">
            <div className="text-end d-block">
              <button
                className="add_new_btn border-none style.tagSubmit"
                type="submit"
              >
                <span>
                  <i className="fa-solid fa-plus"></i>
                </span>
                Add Tag
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdatePostTag;

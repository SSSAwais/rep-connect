import React, { useState } from "react";
import Image from "next/image";
import "./BlogComments.css";
import ReplaySection from "../replaySection/ReplaySection";
const BlogComments = (props) => {
  const { userIcon, usertitle, link, dates, link2, para, id, idx, inddex } =
    props;
  const [isLikedd, setIsLikeddd] = useState(true);
  const [comment, setComment] = useState(false);

  const _handleUnLikedd = () => {
    setIsLikeddd(!isLikedd);
  };
  const _handleReplaySection = (e) => {
    console.log(e.target.value);

    setComment(!comment);
    console.log(id, idx, inddex, "id");
  };
  return (
    <>
      <div className="comment_wrapper_detail">
        <div className="image_comment">
          <Image src={userIcon} alt="icon" className="img-fluid" />
        </div>

        <div className="user_detail_section_wrapper">
          <div className="user_inner_detail">
            <h4>
              {usertitle} <span>says:</span>
            </h4>
            <a href={link} className="date_comment_section">
              {dates}
            </a>
            <p className="user_commented">{para}</p>
            <div className="like_sections">
              {/* <button className="likebtn"> </button>
               */}
              <button
                className={`${isLikedd ? "likebtn" : "isNotLiked"}`}
                onClick={_handleUnLikedd}
              >
                {" "}
              </button>
              <span className="likes_number">+3</span>
            </div>
          </div>
          <div className="replay">
            <a href={link2} onClick={_handleReplaySection}>
              Reply
            </a>
          </div>
        </div>
      </div>
      {/* <div className="comment_wrapper">
        <ReplaySection />
      </div> */}
    </>
  );
};

export default BlogComments;

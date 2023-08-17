import Link from "next/link";
import React from "react";
import "./download.css";
const MyDownloads = () => {
  return (
    <div className="MyDownloads">
      <div className="content">
        <p>
          <span className="view-icon">
            <i className="fa-solid fa-circle-exclamation"></i>
          </span>
          No downloads available yet. <Link href="shop">Browse products</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default MyDownloads;

import React, { useState } from "react";
import "./SidebarInder.css";
import Image from "next/image";
import img from "../../../assets/images/blogs/JBJS-Folder.jpg";

const SidebarInsider = () => {
  const [post, setPost] = useState([
    {
      name: "Doctor Pleads Guilty to Accepting Illegal Kickback Payments",
      post_date: "February 25, 2022",
    },
    {
      name: "Ten Indicted for Healthcare Kickbacks; Including Labs, Marketers and Physicians",
      post_date: "July 8, 2021",
    },
    {
      name: "Business Associate Agreements 101",
      post_date: "February 1, 2022",
    },
    {
      name: "LabCorp Faces Trial for Providing In-Office Phlebotomist Services to Doctors Taking Processing and Handling Fees from HDL",
      post_date: "November 11, 2021",
    },
  ]);
  return (
    <aside className="sidrbar-index">
      <h2 className="title"> Recent Posts</h2>
      <ul className="list-of-posts">
        {post.map((el, i) => {
          return (
            <li key={i} className="single-item-post">
              <div className="d-flex mb-1">
                <div className="img-box">
                  <Image src={img} alt="" className="img-fluid" />
                </div>
                <div className="title-box">
                  <a href="#" className="title">
                    {el.name}
                  </a>
                </div>
              </div>
              <small>
                <time> {el.post_date}</time>
              </small>
            </li>
          );
        })}
      </ul>
      <di className="view-all-post">
        <a href="/microgendex-insider/">view all posts</a>
      </di>
    </aside>
  );
};

export default SidebarInsider;

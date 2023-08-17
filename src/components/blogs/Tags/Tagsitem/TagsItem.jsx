import React, { useEffect, useState } from "react";
import "./TagsItem.css";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
const TagsItem = ({ item }) => {
  let name = item.slug.split(" ").join("-").toLowerCase();
  const [loading, setLoading] = useState(true);
  const [tagsId, setTagsId] = useState("");
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}api/post/${item.slug}`)
      .then((resp) => {
        setTagsId(resp.data.data.post.slug);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(item);
  return (
    <>
      <div className="item-category-blog d-flex overflow-hidden flex-lg-row flex-md-row flex-sm-row flex-column">
        <div className="image-side w-25">
          <Link href={`/blog/${name}`} className="img-side-link">
            <Image
              src={item.featured_image.image_url}
              alt="img1"
              className="img-fluid"
              fill
            />
            <div className="img-side-overlay"></div>
          </Link>
          <div className="img-side-linkss ">
            <span className="d-inline-block w-50">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <a href={`/blog/${name}`} className="d-inline-block w-50">
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </div>
        <div className="content-side">
          <a href={`/blog/${tagsId}`} className="title-content">
            {item.title}
          </a>
          <p>{item.description}</p>
          <div className="post-footer">
            <div className="post-links">
              <span>
                <i className="fa-regular fa-comment" />
                <a href={`/blog/${name}/#likes`}>0</a>
              </span>
              <span>
                <i className="fa-regular fa-file-lines" />
                <a href={`/blog/${tagsId}/#comments`}>read more</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TagsItem;

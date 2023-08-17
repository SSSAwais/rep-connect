import React, { useEffect, useState } from "react";
import "./CategoryItem.css";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
const CategoryItem = ({ item }) => {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}api/post/${item.slug}`)
      .then((resp) => {
        setId(resp.data.data.post.slug);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  let name = item.slug.split(" ").join("-").toLowerCase();

  console.log(item);
  return (
    <>
      <div className="item-category-blog d-flex overflow-hidden flex-lg-row flex-md-row flex-sm-row flex-column">
        <div className="image-side w-25">
          <a className="img-side-link" href={`/blog/${id}`}>
            <Image
              src={item.featured_image.image_url}
              alt="img1"
              className="img-fluid"
              fill
            />
            <div className="img-side-overlay"></div>
          </a>
          <div className="img-side-linkss ">
            <span className="d-inline-block w-50">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <a className="d-inline-block w-50">
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </div>
        <div className="content-side">
          <Link href={`/blog/${id}`} className="title-content">
            {item.title}
          </Link>
          <p>{item.description}</p>
          <div className="post-footer">
            <div className="post-links">
              <span>
                <i className="fa-regular fa-comment" />
                <a href={`/blog/${name}/#likes`}>0</a>
              </span>
              <span>
                <i className="fa-regular fa-file-lines" />
                {/* <a
              href={`/blog/${name}/#comments`}
              onClick={_handleSingleProduct}
            > */}
                <Link href={`/blog/${id}`}>read more</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;

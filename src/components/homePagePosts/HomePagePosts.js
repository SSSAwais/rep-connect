import React from "react";
import Image from "next/image";
import "./HomePagePosts.css";
import Link from "next/link";
const HomePagePosts = ({ item, index }) => {
  console.log(item, "<========= item");

  return (
    <>
      <div className="post_wrapper_inner">
        <div className="item-category-blog d-flex overflow-hidden flex-lg-row flex-md-row flex-sm-row flex-column align-items-center">
          <div className="image-side ">
            <Link href={`/blog/${item.slug}`} className="img-side-link">
              <Image
                src={item.featured_image?.image.url}
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
              <a href={`/blog/${item.slug}`} className="d-inline-block w-50">
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
          <div className="content-side">
            <a href={`/blog/${item.slug}`} className="title-content">
              {item.title}
            </a>
            <p>{item.description}</p>
            <div className="post-footer">
              <div className="post-links">
                <span>
                  <i className="fa-regular fa-comment" />
                  <a href={`/blog/${item.slug}/#likes`}>0</a>
                </span>
                <span>
                  <i className="fa-regular fa-file-lines" />
                  <a href={`/blog/${item.slug}/#comments`}>read more</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="post_wrapper">
        <div className="post_wrapper_inner">
          <div className="image_wrapper">
            <div className="overlay"></div>
            <Link
              href={{ pathname: `/blog/${item.slug}` }}
              className="setImage_zindex"
            >
              <Image
                src={item.featured_image?.image_url}
                alt="post image"
                className="img-fluid "
                fill
              />
            </Link>
            <div className="image_links double">
              <Link href="#">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
              <Link href={{ pathname: `/blog/${item.slug}` }}>
                <i className="fa-solid fa-link"></i>
              </Link>
            </div>
          </div>
          <div className="post_details_section">
            <h2>
              <Link href={{ pathname: `/blog/${item.slug}` }}>
                {item.title}
              </Link>
            </h2>
            <p>{item.description}</p>
          </div>
        </div>
        <div className="post_footer">
          <div className="like">
            <i className="fa-regular fa-thumbs-up"></i>
            <Link href="#">{item.post_liked.length}</Link>
          </div>
          <div className="comment">
            <i className="fa-regular fa-comment"></i>
            <a href="#">{item.postcomment}</a>
          </div>
          <div className="read_more">
            <i className="fa-solid fa-book"></i>
            <Link href={{ pathname: `/blog/${item.slug}` }}>Read More</Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HomePagePosts;

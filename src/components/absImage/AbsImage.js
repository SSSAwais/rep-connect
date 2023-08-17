import Image from "next/image"
import Link from "next/link"
import React from "react"
import "./AbsImage.css"
const AbsImage = (props) => {
  const { image } = props
  return (
    <>
      <div className="course_image_wrapper">
        <Link href="#">
          <div className="mask"></div>
          <img src={image} alt="image" className="img-fluid" />
        </Link>
        <div className="image_links">
          <Link href="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default AbsImage

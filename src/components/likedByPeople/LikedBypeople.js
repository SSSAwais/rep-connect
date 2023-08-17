import React from "react"
import Image from "next/image"
import "./LikedBypeople.css"
const LikedBypeople = (props) => {
  const { img } = props
  return (
    <>
      <span className="like_image_peo">
        <Image src={img} className="img-fluid" alt="image" />
      </span>
    </>
  )
}

export default LikedBypeople

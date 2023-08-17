import React from "react"
import "./ScienceCards.css"
const ScienceCards = (props) => {
  const { cardImage, desctitle, subtitle } = props
  return (
    <>
      <div className="science_card_wrapper">
        <a href="#">
          <div className="science_card_image_wrapper">
            <div className="science_video_icon themebg">
              <i className="fa-solid fa-play"></i>
            </div>
            <img src={cardImage} alt="card image" className="img-fluid" />
          </div>
          <div className="science_desc_wrapper">
            <h4>{desctitle}</h4>
            <div className="disc">
              <h4>{subtitle}</h4>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default ScienceCards

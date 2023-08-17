import React from "react";
import "./PdfBio.css";
import Link from "next/link";
import Image from "next/image";
const PdfBioResearch = (props) => {
  const { pdfImage, buttonTitle } = props;
  return (
    <>
      <div className="pdf_search_wrapper">
        <Link href="#" className="d-flex justify-content-center">
          <Image src={pdfImage} alt="" />
        </Link>

        <div className="d-flex flex-column button_seciton_pdf">
          <i className="fa-solid fa-file-pdf icon_color"></i>
          <a href="#" className="anchor_button">
            {buttonTitle}
          </a>
        </div>
      </div>
    </>
  );
};

export default PdfBioResearch;

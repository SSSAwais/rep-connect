import React from "react";
import "./uploadicon.css";
import uploadico from "../../../assets/images/admin/upload-icons.png";
import Image from "next/image";
const UploadIcon = () => {
  return (
    <div className="upload--icon--box">
      <Image src={uploadico} className="img-fluid" alt="upload--icon" />
    </div>
  );
};

export default UploadIcon;

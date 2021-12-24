import React from "react";
import "./photoList.scss";
import PhotoItem from "../../components/photoItem/PhotoItem";

const PhotoList = () => {
  return (
    <div className="photolist">
      <div className="photos">
        <h1>FERNANDO MARÍ REBOLLO</h1>
        <h5>- PHOTO PROJECTS -</h5>
      </div>
      <div className="container">
        <PhotoItem />
        <PhotoItem />
        <PhotoItem />
        <PhotoItem />
        <PhotoItem />
        <PhotoItem />
        <PhotoItem />
        <PhotoItem />
        <PhotoItem />
      </div>
    </div>
  );
};

export default PhotoList;

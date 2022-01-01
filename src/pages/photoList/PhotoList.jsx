import React from "react";
import "./photoList.scss";
import PhotoItem from "../../components/photoItem/PhotoItem";

const PhotoList = () => {
  return (
    <div className="photolist">
      <div className="photos">
        <h1>- PHOTO PROJECTS -</h1>
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

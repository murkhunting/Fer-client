import React from "react";
import "./photoList.scss";
import PhotoItem from "../../components/photoItem/PhotoItem";
import { useState, useEffect } from "react";
import axios from "axios";

const PhotoList = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getAllPhotos = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/project/photos");
        setPhotos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllPhotos();
  }, []);

  return (
    <div className="photolist">
      <div className="photos">
        <h1>PHOTO PROJECTS</h1>
      </div>
      <div className="container">
        {photos.map((photo) => (
          <PhotoItem key={photo._id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;

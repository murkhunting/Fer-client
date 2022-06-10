import React from "react";
import "./photoList.scss";
import VideoItem from "../../components/videoItem/VideoItem";
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
      <h1>PHOTO PROJECTS</h1>
      <div className="container">
        {photos.map((video) => (
          <VideoItem key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;

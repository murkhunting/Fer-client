import React from "react";
import "./photoList.scss";
import ProjecItem from "../../components/projectItem/ProjectItem";
import { useState, useEffect } from "react";
import axios from "axios";
import ProjectItem from "../../components/projectItem/ProjectItem";

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
        {photos.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;

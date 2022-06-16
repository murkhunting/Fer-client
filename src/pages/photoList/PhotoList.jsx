import React from "react";
import "./photoList.scss";
import ProjecItem from "../../components/projectItem/ProjectItem";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useScrollSnap from 'react-use-scroll-snap';


const PhotoList = () => {
  const [photos, setPhotos] = useState([]);

  const scrollRef = useRef(null);

  useScrollSnap({ ref: scrollRef, duration: 100, delay: 0 });


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
      <div className="container" ref={scrollRef}>
        {photos.map((project) => (
          <ProjecItem key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;

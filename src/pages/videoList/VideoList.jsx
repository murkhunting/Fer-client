import React from "react";
import "./videoList.scss";
import ProjectItem from "../../components/projectItem/ProjectItem";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useScrollSnap from 'react-use-scroll-snap';


const VideoList = () => {
  const [videos, setVideos] = useState([]);

  const scrollRef = useRef(null);

  useScrollSnap({ ref: scrollRef, duration: 100, delay: 0 });


  useEffect(() => {
    const getAllVideos = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/project/videos");
        setVideos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllVideos();
  }, []);

  return (
    <div className="videolist">
      <h1>VIDEO PROJECTS</h1>
        
      <div className="container" ref={scrollRef}>
          {videos.map((project) => (
            <ProjectItem  key={project._id} project={project} />
            ))}
      </div>
        
    </div>
  );
};

export default VideoList;

import React from "react";
import "./videoList.scss";
import ProjectItem from "../../components/projectItem/ProjectItem";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useScrollSnap from "react-use-scroll-snap";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  const scrollRef = useRef(null);

  useScrollSnap({ ref: scrollRef, duration: -100, delay: -10 });

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
      <div className="text">
        <h1>VIDEO PROJECTS</h1>
        <h5>· DRONE-MADE VIDEO PROJECTS TO HAVE REAL EXAMPLES OF MY WORK ·</h5>
      </div>
      <div className="container" ref={scrollRef}>
        {videos.map((project) => (
          <ProjectItem className="video" key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;

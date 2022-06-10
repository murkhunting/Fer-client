import React from "react";
import "./architect.scss";
import VideoItem from "../../components/videoItem/VideoItem";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useScrollSnap from 'react-use-scroll-snap';


const Architect = () => {
  const [projects, setProjects] = useState([]);

  const scrollRef = useRef(null);

  useScrollSnap({ ref: scrollRef, duration: 100, delay: 0 });


  useEffect(() => {
    const getAllVideos = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/project/all");
        setProjects(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllVideos();
  }, []);

  return (
    <div className="architect">
      <h1>ARCHITECTURE PROJECTS</h1>
        
      <div className="container" ref={scrollRef}>
          {projects
          // .filter((project, i) => project.type === "video")
          .map((video) => (
            <VideoItem  key={video._id} video={video} />
            ))}
      </div>
        
    </div>
  );
};

export default Architect;

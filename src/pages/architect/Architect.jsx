import React from "react";
import "./architect.scss";
import ProjectItem from "../../components/projectItem/ProjectItem";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useScrollSnap from "react-use-scroll-snap";

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
      <div className="text">
        <h1>ARCHITECTURE</h1>
        <h1>PROJECTS</h1>
        <h5>· ARCHITECTURE RELATED VIDEO & PHOTO EXAMPLES ·</h5>
      </div>
      <div className="container" ref={scrollRef}>
        {projects
          // .filter((project, i) => project.type === "video")
          .map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
      </div>
    </div>
  );
};

export default Architect;

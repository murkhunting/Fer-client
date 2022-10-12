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
        <div className="explain">
          <h5>
            Soy arquitecto desde 2017 y estoy especializado en fotografía de
            arquitectura e interiorismo.
          </h5>
          <h5>
            Completo el contenido del proyecto con fotografías aéreas interiores
            y exteriores, dando como resultado final un proyecto fotográfico
            completo del edificio.
          </h5>
          <h5>
            Además de mis drones, cuento con equipo fotográfico propio para
            poder hacer un reportaje completo de un edificio.
          </h5>
        </div>
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

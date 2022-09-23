import React from "react";
import "./admin.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { FiTrash2 } from "react-icons/fi";

const Admin = () => {
  const [items, setItems] = useState([]);

  //get all projects
  useEffect(() => {
    const getAllProjects = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/project/all");
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProjects();
  }, []);

  //delete project
  const deleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/api/project/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (id) => {
    deleteProject(id);
    window.location.reload(false);
  };

  return (
    <div className="admin">
      <h1>ADMIN PAGE</h1>
      <div className="list">
        <h3> LISTA DE PROYECTOS: </h3>
        <div className="container">
          {items
            // .filter((project, i) => project.type === "video")
            .map((project, i) => (
              <div className="wrap" key={project._id}>
                <div>
                  {project.titulo} - {project.type}
                </div>
                <button>
                  <FiTrash2
                    className="icon"
                    onClick={() => handleDelete(project._id)}
                  />
                </button>
              </div>
            ))}
        </div>
        <Link to="/newProject" className="link">
          <h2> CREA UN NUEVO PROYECTO </h2>
        </Link>
      </div>
    </div>
  );
};

export default Admin;

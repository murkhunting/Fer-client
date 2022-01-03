import React from "react";
import "./admin.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import { FiTrash2 } from "react-icons/fi";

const Admin = () => {
  const [items, setItems] = useState([]);

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
      <div className="list">
        <h1> LISTA DE PROYECTOS: </h1>
        <div className="container">
          {items.map((project) => (
            <div className="wrap">
              <div>{project.titulo}</div>
              <button>
                <FiTrash2
                  className="icon"
                  onClick={() => handleDelete(project._id)}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="create">
        <h1>CREA UN NUEVO PROYECTO:</h1>
        <form className="container">
          <div className="cover">
            <h2>Título del proyecto:</h2>
            <input type="text" placeholder="Título en mayúsculas..." />
          </div>
          <div className="cover">
            <h2>Descripción del proyecto:</h2>
            <input type="text" placeholder="Pon una descripción..." />
          </div>
          <div className="cover">
            <h2>Es un Video o son Fotos?</h2>
            <input type="text" placeholder="Video o Fotos" />
          </div>
          <div className="cover">
            <h2>Link de la imágen en b&n:</h2>
            <input type="text" placeholder="Inserta la url..." />
          </div>
          <div className="cover">
            <h2>Link del gif o imágen del proyecto:</h2>
            <input type="text" placeholder="Inserta la url..." />
          </div>
          <div className="cover">
            <h2>Link del Video o Links de las Fotos:</h2>
            <input type="text" placeholder="Inserta la url..." />
          </div>

          <button>CREAR</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;

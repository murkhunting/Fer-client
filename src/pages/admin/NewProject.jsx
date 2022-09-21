import React from "react";
import "./newProject.scss";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NewProject = () => {
  const [project, setProject] = useState({});

  //info from inputs
  const [linksadd, setLinksadd] = useState([]);
  let [link, setLink] = useState();

  const handleLink = (e) => {
    const link = e.target.value;
    setLink(link);
  };

  const addLink = (e) => {
    e.preventDefault();
    setLinksadd([linksadd.concat(link)]);

    setLink("");
    setProject({ ...project, links: linksadd });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setProject({ ...project, [e.target.name]: value });
  };
  console.log(project);

  //create project
  const createProject = async (project) => {
    console.log(project);
    try {
      const res = await axios.post(
        "http://localhost:8800/api/project",
        project
      );
      const data = res.data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreate = (e) => {
    e.preventDefault();
    createProject(project);
  };

  return (
    <div className="newproject">
      <h1>CREA UN NUEVO PROYECTO:</h1>
      <form className="container">
        <div className="cover">
          <h2>Es un Video o son Fotos?</h2>
          <select name="type" id="type" onChange={handleChange}>
            <option hidden selected>
              elige una opción
            </option>
            <option value="video">Video</option>
            <option value="photo">Fotos</option>
          </select>
        </div>
        <div className="cover">
          <h2>Es un proyecto de Arquitectura?</h2>
          <select name="architecture" id="type" onChange={handleChange}>
            <option hidden selected>
              elige una opción
            </option>
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="cover">
          <h2>Título del proyecto:</h2>
          <input
            type="text"
            placeholder="Título en mayúsculas..."
            name="titulo"
            onChange={handleChange}
          />
        </div>
        <div className="cover">
          <h2>Descripción del proyecto:</h2>
          <input
            type="text"
            placeholder="Pon una descripción..."
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="cover">
          <h2>Año del proyecto:</h2>
          <input
            type="text"
            placeholder="Escribe el año..."
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="cover">
          <h2>Localización:</h2>
          <input
            type="text"
            placeholder="Escribe dónde se grabó..."
            name="loca"
            onChange={handleChange}
          />
        </div>
        <div className="cover">
          <h2>Cliente:</h2>
          <input
            type="text"
            placeholder="Nombre del cliente..."
            name="client"
            onChange={handleChange}
          />
        </div>
        <div className="cover">
          <h2>Link de la imágen en b&n:</h2>
          <input
            type="text"
            placeholder="Inserta la url..."
            name="byn"
            onChange={handleChange}
          />
        </div>
        <div className="cover">
          <h2>Link del gif o imágen del proyecto:</h2>
          <input
            type="text"
            placeholder="Inserta la url..."
            name="gif"
            onChange={handleChange}
          />
        </div>
        <div className="cover">
          <h2>Link del Video o Links de las Fotos:</h2>
          <div>
            <input
              type="text"
              placeholder="Inserta la url..."
              name="links"
              value={link}
              onChange={handleLink}
            />
            <button className="add" onClick={addLink}>
              +
            </button>
          </div>
          <div className="linkscount">
            {linksadd.map((link) => (
              <div key={link} className="link">
                -{link}-
              </div>
            ))}
          </div>
        </div>
        <Link to="/admin" className="link">
          <button className="createbtn" onClick={handleCreate}>
            CREAR
          </button>
        </Link>
      </form>
    </div>
  );
};

export default NewProject;

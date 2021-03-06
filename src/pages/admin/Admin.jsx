import React from "react";
import "./admin.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import { FiTrash2 } from "react-icons/fi";

const Admin = () => {
  const [items, setItems] = useState([]);
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
    let linkslist = linksadd.concat(link);

    setLink("");
    setProject({ ...project, links: linkslist });
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
    window.location.reload(false);
  };

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
      <div className="list">
        <h1> LISTA DE PROYECTOS: </h1>
        <div className="container">
          {items
            .filter((project, i) => project.type === "video")
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
      </div>

      <div className="create">
        <h1>CREA UN NUEVO PROYECTO:</h1>
        <form className="container">
          <div className="cover">
            <h2>Es un Video o son Fotos?</h2>
            <select name="type" id="type" onChange={handleChange}>
              <option hidden selected>
                elige una opci??n
              </option>
              <option value="video">Video</option>
              <option value="photo">Fotos</option>
            </select>
          </div>
          <div className="cover">
            <h2>Es un proyecto de Arquitectura?</h2>
            <select name="type" id="type" onChange={handleChange}>
              <option hidden selected>
                elige una opci??n
              </option>
              <option value="true">S??</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="cover">
            <h2>T??tulo del proyecto:</h2>
            <input
              type="text"
              placeholder="T??tulo en may??sculas..."
              name="titulo"
              onChange={handleChange}
            />
          </div>
          <div className="cover">
            <h2>Descripci??n del proyecto:</h2>
            <input
              type="text"
              placeholder="Pon una descripci??n..."
              name="desc"
              onChange={handleChange}
            />
          </div>
          <div className="cover">
            <h2>A??o del proyecto:</h2>
            <input
              type="text"
              placeholder="Escribe el a??o..."
              name="year"
              onChange={handleChange}
            />
          </div>
          <div className="cover">
            <h2>Localizaci??n:</h2>
            <input
              type="text"
              placeholder="Escribe d??nde se grab??..."
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
            <h2>Link de la im??gen en b&n:</h2>
            <input
              type="text"
              placeholder="Inserta la url..."
              name="byn"
              onChange={handleChange}
            />
          </div>
          <div className="cover">
            <h2>Link del gif o im??gen del proyecto:</h2>
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

          <button className="createbtn" onClick={handleCreate}>
            CREAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;

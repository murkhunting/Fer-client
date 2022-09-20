import React from "react";
import "./photo.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Photo = () => {
  const { id } = useParams();

  const [project, setProject] = useState({});

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/project/${id}`);
        setProject(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPhotos();
  }, [id]);

  console.log(project);

  const { titulo, desc, year, loca, client, links } = project;

  return (
    <div className="photo">
      <h1>{titulo}</h1>
      <div className="container">
        <div className="data">
          <h3>WHERE?</h3>
          <p>{loca}</p>
          <h3>WHEN?</h3>
          <p>{year}</p>
          <h3>FOR WHOM?</h3>
          <p>{client}</p>
          <h3>DESCRIPCIÓN:</h3>
          <p>{desc}</p>
        </div>
        <div className="photosContainer">
          {links?.map((photo) => (
            <img src={photo} alt="links" key={photo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photo;

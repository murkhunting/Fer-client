import React from "react";
import "./video.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Video = () => {
  const { id } = useParams();

  const [titulo, setTitulo] = useState();
  const [desc, setDesc] = useState();
  const [year, setYear] = useState();
  const [loca, setLoca] = useState();
  const [client, setClient] = useState();

  useEffect(() => {
    const getVideo = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/project/${id}`);
        setTitulo(res.data.titulo);
        setDesc(res.data.desc);
        setYear(res.data.year);
        setLoca(res.data.loca);
        setClient(res.data.client);
      } catch (err) {
        console.log(err);
      }
    };
    getVideo();
  }, [id]);

  return (
    <div className="video">
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
        <iframe
          src="https://www.youtube.com/embed/abOjzMPYdgc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;

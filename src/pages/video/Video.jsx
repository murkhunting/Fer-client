import React from "react";
import "./video.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Video = () => {
  const { id } = useParams();

  const [titulo, setTitulo] = useState();
  const [desc, setDesc] = useState();

  useEffect(() => {
    const getVideo = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/project/${id}`);
        setTitulo(res.data.titulo);
        setDesc(res.data.desc);
      } catch (err) {
        console.log(err);
      }
    };
    getVideo();
  }, [id]);

  return (
    <div className="video">
      <h1>{titulo}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default Video;

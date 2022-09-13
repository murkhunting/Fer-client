import React from "react";
import "./video.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactPlayer from 'react-player';

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
<div className="cage">

      <div className="container" >
        <div className ="data">
          <h3>Descripción del proyecto:</h3>
          <p>{desc}</p>
        </div>
        <div className="player-wrapper">
        <ReactPlayer  className="player" url="https://www.youtube.com/watch?v=abOjzMPYdgc&t=12s" controls="true"/>
        </div>
      </div>
</div>
    </div>
  );
};

export default Video;

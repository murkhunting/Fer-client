import React from "react";
import "./video.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useScrollSnap from 'react-use-scroll-snap';

const Video = () => {
  const { id } = useParams();

  const [titulo, setTitulo] = useState();
  const [desc, setDesc] = useState();

  const scrollRef = useRef(null);

  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

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

      <div className="container" ref={scrollRef}>
        <section>

        </section>
        <section>
          
        </section>
        <section>
          
        </section>
        <section>
          
        </section>
        <section>
          
        </section>
      </div>
    </div>
  );
};

export default Video;

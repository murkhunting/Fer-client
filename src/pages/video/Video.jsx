import React from "react";
import "./video.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Video = () => {
  const { id } = useParams();

  const [video, setVideo] = useState();

  useEffect(() => {
    const getVideo = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/project/${id}`);
        setVideo(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getVideo();
  }, [id]);

  console.log(video);

  return (
    <div className="video">
      <h1>SINGLE VIDEO PAGE</h1>
    </div>
  );
};

export default Video;

import React from "react";
import "./photo.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Photo = () => {
  const { id } = useParams();

  const [photos, setPhotos] = useState();

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/project/${id}`);
        setPhotos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPhotos();
  }, [id]);

  return (
    <div className="photo">
      <h1>SINGLE PHOTO PAGE</h1>
    </div>
  );
};

export default Photo;

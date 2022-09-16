import React from "react";
import "./home.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "../../components/Item/Item";
// import useScrollSnap from "react-use-scroll-snap";
import drone from "../../assets/images/drone.png";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getRandomProjects = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/project/random");
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomProjects();
  }, []);

  return (
    <div className="home">
      <div className="head">
        <div className="name">
          <h1>FERNANDO</h1>
          <h1>MARÍ</h1>
          <h5>· DRONE PILOT: VIDEO, PHOTOGRAPHY & ARCHITECTURE ·</h5>
        </div>
        <img src={drone} alt="" />
      </div>
      <div className="container">
        {items.map((project) => (
          <Item className="list" key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./home.scss";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="name">
        <h1>FERNANDO MARÍ REBOLLO</h1>
        <h5>DRONE PILOT: VIDEO & PHOTOGRAPHY</h5>
      </div>
    </div>
  );
};

export default Home;

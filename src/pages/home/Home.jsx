import React from "react";
import "./home.scss";
import Item from "../../components/Item/Item";

const Home = () => {
  return (
    <div className="home">
      <div className="name">
        <h1>FERNANDO MARÍ REBOLLO</h1>
        <h5>DRONE PILOT: VIDEO & PHOTOGRAPHY</h5>
      </div>
      <div className="container">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        
      </div>
    </div>
  );
};

export default Home;

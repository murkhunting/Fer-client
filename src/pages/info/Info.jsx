import React from "react";
import "./info.scss";
import fer from "../../assets/images/fer.png";
import drone1 from "../../assets/images/drone.png";

const Info = () => {
  return (
    <div className="info">
      <div className="head">
        <div className="name">
          <h1>PERSONAL INFO</h1>
          <h1>& TOOLS</h1>
        </div>
        <img src={fer} alt="" />
      </div>
      <div className="personal">
        <h5>HI! MY NAME IS FERNANDO MARÍ REBOLLO</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit aenean
          venenatis lobortis volutpat suscipit, maecenas fames dictum magna
          feugiat ac per mi sem varius nullam. Aliquam sociis ante ornare ad id
          ultricies cursus vitae, fusce torquent donec volutpat euismod aliquet
          enim nibh, per felis sociosqu netus etiam litora phasellus. Gravida
          litora est etiam torquent molestie natoque tincidunt nullam ac, magnis
          urna platea vehicula neque placerat mauris auctor, mattis imperdiet
          elementum sed ornare dis ridiculus purus.
        </p>
      </div>
      <div className="drone1">
        <img src={drone1} alt="" />
        <div className="droneinfo">
          <h5>DRONE 1 - DESTRUCTOR 3000XXY</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit aenean
            venenatis lobortis volutpat suscipit, maecenas fames dictum magna
            feugiat ac per mi sem varius nullam. Aliquam sociis ante ornare ad
            id ultricies cursus vitae, fusce torquent donec volutpat euismod
          </p>
        </div>
      </div>
      <div className="drone1">
        <div className="droneinfo">
          <h5>DRONE 2 - EXTERMINADOR AGUILEÑO 7.5.4</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit aenean
            venenatis lobortis volutpat suscipit, maecenas fames dictum magna
            feugiat ac per mi sem varius nullam. Aliquam sociis ante ornare ad
            id ultricies cursus vitae, fusce torquent donec volutpat euismod
          </p>
        </div>
        <img src={drone1} alt="" />
      </div>
    </div>
  );
};

export default Info;

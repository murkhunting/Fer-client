import React from "react";
import "./info.scss";
import fer from "../../assets/images/fer.png";
import drone1 from "../../assets/images/mavicair2.png";

const Info = () => {
  return (
    <div className="info">
      <div className="head">
        <div className="name">
          <h1>PERSONAL INFO</h1>
          <h1>& TOOLS</h1>
        </div>
        <div className="personal">
          <h5>
            Mi nombre es <span>Fernando Marí</span> y soy piloto de drones.
            Trabajo en la industria audiovisual aérea desde 2019. Dispongo de la
            documentación y los certificados necesarios, así como el equipo,
            para poder volar en espacio controlado, en los que se encuentran la
            mayoría de los centros de las ciudades. Para poder dar respuesta a
            los diferentes tipos de proyectos audiovisuales cuento con un equipo
            compuesto por diferentes drones y accesorios, según la
            características del vuelo.
          </h5>
          <img src={fer} alt="" />
        </div>
      </div>
      <div className="drone1">
        <img src={drone1} alt="" />
        <div className="droneinfo">
          <h5>MAVIC AIR 2</h5>
          <h6>
            <span>Peso:</span> 570 g <br />
            <span>Sensor:</span> 1/2" CMOS Píxeles: 12 MP y 48 MP <br />
            Objetivo: Ángulo de visión: 84° Formato equivalente a 35 mm: 24 mm
            Apertura: f/2.8 ISO Vídeo: 100-6400 Fotografía (12 MP): 100-3200
            (auto) 100-6400 (manual) Fotografía (48 MP): 100-1600 (auto)
            100-3200 (manual) Resolución máx. de fotografía: 48 MP 8000×6000
            píxeles Formatos fotográficos JPEG/DNG (RAW) Resolución de vídeo y
            tasa de fotogramas 4K Ultra HD: 3840×2160 24/25/30/48/50/60 fps
            2.7K: 2688×1512 24/25/30/48/50/60 fps
          </h6>
        </div>
      </div>
      <div className="drone1">
        <div className="droneinfo">
          <h5>DRONE 2 - EXTERMINADOR DE PUSSYS 7.5.4</h5>
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

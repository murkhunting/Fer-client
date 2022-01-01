import React from "react";
import "./admin.scss";

const Admin = () => {
  return (
    <div className="admin">
      <div className="list">
        <h1> LISTA DE PROYECTOS: </h1>
      </div>
      <div className="create">
        <h1>CREA UN NUEVO PROYECTO:</h1>
        <form className="container">
          <div className="cover">
            <h2>Título del proyecto:</h2>
            <input type="text" placeholder="Título en mayúsculas..." />
          </div>
          <div className="cover">
            <h2>Descripción del proyecto:</h2>
            <input type="text" placeholder="Pon una descripción..." />
          </div>
          <div className="cover">
            <h2>Es un Video o son Fotos?</h2>
            <input type="text" placeholder="Video o Fotos" />
          </div>
          <div className="cover">
            <h2>Link de la imágen en b&n:</h2>
            <input type="text" placeholder="Inserta la url..." />
          </div>
          <div className="cover">
            <h2>Link del gif o imágen del proyecto:</h2>
            <input type="text" placeholder="Inserta la url..." />
          </div>
          <div className="cover">
            <h2>Link del Video o Links de las Fotos:</h2>
            <input type="text" placeholder="Inserta la url..." />
          </div>

          <button>CREAR</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;

import React from "react";
import "./faqs.scss";
import { useState } from "react";

import lado from "../../assets/images/2.png";

import { BsHouse } from "react-icons/bs";
import { FaCity } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { GiPathDistance } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { MdHighQuality, MdOutlineGroupAdd } from "react-icons/md";
import { HiOutlineMoon } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";

const Faqs = () => {
  const [show1, setShow1] = useState(false);
  const onClick1 = () => setShow1(!show1);

  const [show2, setShow2] = useState(false);
  const onClick2 = () => setShow2(!show2);

  const [show3, setShow3] = useState(false);
  const onClick3 = () => setShow3(!show3);

  const [show4, setShow4] = useState(false);
  const onClick4 = () => setShow4(!show4);

  const [show5, setShow5] = useState(false);
  const onClick5 = () => setShow5(!show5);

  const [show6, setShow6] = useState(false);
  const onClick6 = () => setShow6(!show6);

  const [show7, setShow7] = useState(false);
  const onClick7 = () => setShow7(!show7);

  const [show8, setShow8] = useState(false);
  const onClick8 = () => setShow8(!show8);

  const [show9, setShow9] = useState(false);
  const onClick9 = () => setShow9(!show9);

  return (
    <div className="faqs">
      <div className="container">
        <div className="name">
          <h1>FAQS</h1>
        </div>

        <div className="qya">
          <div className="separador">
            <div className="pregunta" onClick={onClick1}>
              <FaCity className="iconos" />
              <h5>
                Se puede volar el dron en cualquier lado?{" "}
                <span>
                  <IoMdArrowDropdown />
                </span>
              </h5>
            </div>
            {show1 && (
              <div className="respuesta">
                <h6>
                  Fuera de los núcleos urbanos no suelen existir zonas
                  restringidas al vuelo con drones, por lo que no hay problemas
                  para volar ni tomar fotografías. Únicamente será necesario la
                  comunicación de la operación en aquellas zonas donde ENAIRE
                  así lo indica, como las situadas a menos de 8 km de
                  aeropuertos o aeródromos (zona CTR) o las zonas con especial
                  protección ambiental (ZEPA).
                </h6>
                <img src={lado} alt="" />
              </div>
            )}
          </div>
          <div className="separador">
            <div className="pregunta" onClick={onClick2}>
              <BiTimeFive className="iconos" />
              <h5>Cuánto tarda en otorgarse un permiso y en qué consiste?</h5>
            </div>
            {show2 && (
              <div className="respuesta">
                <h6>
                  Fuera de los núcleos urbanos no suelen existir zonas
                  restringidas al vuelo con drones, por lo que no hay problemas
                  para volar ni tomar fotografías. Únicamente será necesario la
                  comunicación de la operación en aquellas zonas donde ENAIRE
                  así lo indica, como las situadas a menos de 8 km de
                  aeropuertos o aeródromos (zona CTR) o las zonas con especial
                  protección ambiental (ZEPA).
                </h6>
                <img src={lado} alt="" />
              </div>
            )}
          </div>
          <div className="separador">
            <div className="pregunta" onClick={onClick3}>
              <GiPathDistance className="iconos" />
              <h5>
                Cuál es la distancia máxima a la que puede llegar el drone?
              </h5>
            </div>
            {show3 && (
              <div className="respuesta">
                <h6>
                  Fuera de los núcleos urbanos no suelen existir zonas
                  restringidas al vuelo con drones, por lo que no hay problemas
                  para volar ni tomar fotografías. Únicamente será necesario la
                  comunicación de la operación en aquellas zonas donde ENAIRE
                  así lo indica, como las situadas a menos de 8 km de
                  aeropuertos o aeródromos (zona CTR) o las zonas con especial
                  protección ambiental (ZEPA).
                </h6>
                <img src={lado} alt="" />
              </div>
            )}
          </div>
          <div className="separador">
            <div className="pregunta" onClick={onClick4}>
              <BsHouse className="iconos" />
              <h5>Se puede volar el dron en interiores?</h5>
            </div>
            {show4 && (
              <div className="respuesta">
                <h6>
                  Fuera de los núcleos urbanos no suelen existir zonas
                  restringidas al vuelo con drones, por lo que no hay problemas
                  para volar ni tomar fotografías. Únicamente será necesario la
                  comunicación de la operación en aquellas zonas donde ENAIRE
                  así lo indica, como las situadas a menos de 8 km de
                  aeropuertos o aeródromos (zona CTR) o las zonas con especial
                  protección ambiental (ZEPA).
                </h6>
                <img src={lado} alt="" />
              </div>
            )}
          </div>
          <div className="separador">
            <div className="pregunta" onClick={onClick5}>
              <AiOutlineColumnHeight className="iconos" />
              <h5>Hasta qué altura puede subir el dron?</h5>
            </div>
            {show5 && (
              <div className="respuesta">
                <h6>
                  Fuera de los núcleos urbanos no suelen existir zonas
                  restringidas al vuelo con drones, por lo que no hay problemas
                  para volar ni tomar fotografías. Únicamente será necesario la
                  comunicación de la operación en aquellas zonas donde ENAIRE
                  así lo indica, como las situadas a menos de 8 km de
                  aeropuertos o aeródromos (zona CTR) o las zonas con especial
                  protección ambiental (ZEPA).
                </h6>
                <img src={lado} alt="" />
              </div>
            )}
          </div>
          <div className="separador">
            <div className="pregunta" onClick={onClick6}>
              <HiOutlineMoon className="iconos" />
              <h5>Se puede volar el dron por la noche?</h5>
            </div>
            {show6 && (
              <div className="respuesta">
                <h6>
                  Fuera de los núcleos urbanos no suelen existir zonas
                  restringidas al vuelo con drones, por lo que no hay problemas
                  para volar ni tomar fotografías. Únicamente será necesario la
                  comunicación de la operación en aquellas zonas donde ENAIRE
                  así lo indica, como las situadas a menos de 8 km de
                  aeropuertos o aeródromos (zona CTR) o las zonas con especial
                  protección ambiental (ZEPA).
                </h6>
                <img src={lado} alt="" />
              </div>
            )}
          </div>
          <div className="separador">
            <div className="pregunta" onClick={onClick7}>
              <MdOutlineGroupAdd className="iconos" />
              <h5>Se pueden sobrevolar multitudes con el dron?</h5>
            </div>
            {show7 && (
              <div className="respuesta">
                <h6>
                  Fuera de los núcleos urbanos no suelen existir zonas
                  restringidas al vuelo con drones, por lo que no hay problemas
                  para volar ni tomar fotografías. Únicamente será necesario la
                  comunicación de la operación en aquellas zonas donde ENAIRE
                  así lo indica, como las situadas a menos de 8 km de
                  aeropuertos o aeródromos (zona CTR) o las zonas con especial
                  protección ambiental (ZEPA).
                </h6>
                <img src={lado} alt="" />
              </div>
            )}
          </div>
          <div className="separador">
            <div className="pregunta" onClick={onClick8}>
              <MdHighQuality className="iconos" />
              <h5>Qué definición de imagen se puede obtener?</h5>
            </div>
            {show8 && (
              <div className="respuesta">
                <h6>
                  Fuera de los núcleos urbanos no suelen existir zonas
                  restringidas al vuelo con drones, por lo que no hay problemas
                  para volar ni tomar fotografías. Únicamente será necesario la
                  comunicación de la operación en aquellas zonas donde ENAIRE
                  así lo indica, como las situadas a menos de 8 km de
                  aeropuertos o aeródromos (zona CTR) o las zonas con especial
                  protección ambiental (ZEPA).
                </h6>
                <img src={lado} alt="" />
              </div>
            )}
          </div>
          <div className="separador">
            <div className="pregunta" onClick={onClick9}>
              <GrMoney className="iconos" />
              <h5>Cuánto vale un proyecto de drone?</h5>
            </div>
            {show9 && (
              <div className="respuesta">
                <h6>
                  Fuera de los núcleos urbanos no suelen existir zonas
                  restringidas al vuelo con drones, por lo que no hay problemas
                  para volar ni tomar fotografías. Únicamente será necesario la
                  comunicación de la operación en aquellas zonas donde ENAIRE
                  así lo indica, como las situadas a menos de 8 km de
                  aeropuertos o aeródromos (zona CTR) o las zonas con especial
                  protección ambiental (ZEPA).
                </h6>
                <img src={lado} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;

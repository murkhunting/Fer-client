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
      <div className="name">
        <h1>FAQS</h1>
      </div>

      <div className="qya">
        <div className="separador">
          <div className="pregunta" onClick={onClick1}>
            <FaCity className="iconos" />
            <h5>
              Se puede volar el dron en cualquier lado?
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
                comunicación de la operación en aquellas zonas donde ENAIRE así
                lo indica, como las situadas a menos de 8 km de aeropuertos o
                aeródromos (zona CTR) o las zonas con especial protección
                ambiental (ZEPA).
              </h6>
              <img src={lado} alt="" />
            </div>
          )}
        </div>
        <div className="separador">
          <div className="pregunta" onClick={onClick2}>
            <BiTimeFive className="iconos" />
            <h5>
              Cuánto tarda en otorgarse un permiso y en qué consiste?
              <span>
                <IoMdArrowDropdown />
              </span>
            </h5>
          </div>
          {show2 && (
            <div className="respuesta">
              <h6>
                Este permiso consiste en presentar al proveedor de servicios de
                tránsito aéreo la documentación que explica el tipo de vuelo que
                se quiere hacer. En este documento se especifica el lugar, la
                fecha y la hora del vuelo. Además de esta coordinación con la
                autoridad aérea, según en qué escenario podría ser necesario
                coordinar el vuelo con las autoridades locales, de forma que
                estén avisados de la operación. Debe hacerse con unos 15 días de
                antelación. En caso de que pocos días antes del vuelo la
                previsión meteorológica sea desfavorable hay cierta flexibilidad
                para mover la fecha. -Aparte de obtener una coordinación
                favorable con el proveedor del tránsito aéreo de la zona (poner
                ejemplos), se requerirá el certificado del piloto en regla y el
                seguro de responsabilidad civil, así como estar en posesión del
                título de Radiofonista Aeronáutico en caso de volar en CTR.
                Además, el aparato dispondrá de medidas de mitigación de daños
                en caso de accidente como paracaídas o guarda hélices. Como
                operador de drones, cuento con toda la documentación en regla
                que me permite volar en diferentes escenarios donde se requiere
                de una coordinación especial con las autoridades.
              </h6>
              <img src={lado} alt="" />
            </div>
          )}
        </div>
        <div className="separador">
          <div className="pregunta" onClick={onClick3}>
            <GiPathDistance className="iconos" />
            <h5>
              Cuál es la distancia máxima a la que puede llegar el dron?
              <span>
                <IoMdArrowDropdown />
              </span>
            </h5>
          </div>
          {show3 && (
            <div className="respuesta">
              <h6>
                En la práctica, el dron puede alejarse varios kilómetros del
                piloto, pero si atendemos a la normativa esta indica que no se
                permite que el piloto pierda de vista el drone. Este tipo de
                operación se denomina VLOS (Visual Line Of Sight). En el momento
                en que esto ocurre la operación para a ser BVLOS (Beyond Visual
                Line Of Sight), y su coordinación con las autoridades es más
                compleja. Si bien este tipo de operación se puede llevar a cabo,
                al igual que en el aspecto de la altura máxima, para obtener la
                mayoría de las imágenes aéreas no es necesario que el piloto se
                encuentre tan alejado del drone. Basta con elegir una buena
                posición desde la que pilotarlo sin afectar al resultado final
                de las imágenes.
              </h6>
              <img src={lado} alt="" />
            </div>
          )}
        </div>
        <div className="separador">
          <div className="pregunta" onClick={onClick4}>
            <BsHouse className="iconos" />
            <h5>
              Se puede volar el dron en interiores?
              <span>
                <IoMdArrowDropdown />
              </span>
            </h5>
          </div>
          {show4 && (
            <div className="respuesta">
              <h6>
                Sí, se pueden obtener imágenes muy potentes de espacios
                interiores, como podrían ser teatros o pabellones deportivos. En
                este caso el drone, al igual que pasa en exteriores, permite
                obtener un punto de vista que escapa al ojo humano. Solo hay que
                tener en cuenta las limitaciones del propio espacio, como
                podrían ser la propia altura interior del edificio y los
                obstáculos que tenga que evitar el drone.
              </h6>
              <img src={lado} alt="" />
            </div>
          )}
        </div>
        <div className="separador">
          <div className="pregunta" onClick={onClick5}>
            <AiOutlineColumnHeight className="iconos" />
            <h5>
              Hasta qué altura puede subir el dron?
              <span>
                <IoMdArrowDropdown />
              </span>
            </h5>
          </div>
          {show5 && (
            <div className="respuesta">
              <h6>
                Respuesta: la altura máxima a la que se permite el vuelo de
                drones es de 120 metros, tal y como indica el RD 1036/2017.
                Aunque la altura a la que se hace necesario subir el drone la
                determinará el tipo de imágenes que se quieran obtener, en la
                mayoría de casos no es necesario llegar hasta la altura máxima
                permitida, por lo que la altura de vuelo no es nunca una
                limitación a la hora de obtener buenas imágenes.
              </h6>
              <img src={lado} alt="" />
            </div>
          )}
        </div>
        <div className="separador">
          <div className="pregunta" onClick={onClick6}>
            <HiOutlineMoon className="iconos" />
            <h5>
              Se puede volar el dron por la noche?
              <span>
                <IoMdArrowDropdown />
              </span>
            </h5>
          </div>
          {show6 && (
            <div className="respuesta">
              <h6>
                Sí, es posible y se permite previa coordinación con AESA. Esta
                evaluará las condiciones de la solicitud y características del
                vuelo. AESA también exige que el drone incorpore luces que
                permitan verlo desde larga distancia y que no pese más de 10kg.
                Los drones de XXX cumplen con todas las exigencias que pide AESA
                en este y en otro tipo de vuelos.
              </h6>
              <img src={lado} alt="" />
            </div>
          )}
        </div>
        <div className="separador">
          <div className="pregunta" onClick={onClick7}>
            <MdOutlineGroupAdd className="iconos" />
            <h5>
              Se pueden sobrevolar multitudes con el dron?
              <span>
                <IoMdArrowDropdown />
              </span>
            </h5>
          </div>
          {show7 && (
            <div className="respuesta">
              <h6>
                Sí, se debe respetar una distancia de seguridad de 50 metros con
                respecto a las personas que no estén bajo el control del
                operador, así como de edificios y otros obstáculos. Si la
                operación se produce en espacio aéreo controlado (CTR), se deben
                seguir estas medidas de seguridad a la vez además de coordinar
                la operación con el proveedor de tránsito aéreo designado para
                esa zona. La operación se produce fuera de espacio aéreo
                controlado (CTR) el vuelo se debe sin alejar el drone más de 100
                metros del piloto y manteniendo una distancia mínima de 50
                metros respecto a cualquier obstáculo
              </h6>
              <img src={lado} alt="" />
            </div>
          )}
        </div>
        <div className="separador">
          <div className="pregunta" onClick={onClick8}>
            <MdHighQuality className="iconos" />
            <h5>
              Qué definición de imagen se puede obtener?
              <span>
                <IoMdArrowDropdown />
              </span>
            </h5>
          </div>
          {show8 && (
            <div className="respuesta">
              <h6>
                Podemos grabar hasta 4K a 60FPS, y tomar fotografías de 48Mp.
              </h6>
              <img src={lado} alt="" />
            </div>
          )}
        </div>
        <div className="separador">
          <div className="pregunta" onClick={onClick9}>
            <GrMoney className="iconos" />
            <h5>
              Cuánto vale un proyecto de drone?
              <span>
                <IoMdArrowDropdown />
              </span>
            </h5>
          </div>
          {show9 && (
            <div className="respuesta">
              <h6>
                El precio de un proyecto de fotografía o vídeo varía en función
                de factores como la ubicación, el tamaño o la duración del
                proyecto. Si deseas conocer cuánto puedes costar un proyecto
                puedes enviarme un mensaje contándome tu idea.
              </h6>
              <img src={lado} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faqs;

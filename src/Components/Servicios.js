import React from "react";
import "../Styles/Servicios.css";
import Depilacion from "./Servicios/Depilacion";
import Peluqueria from "./Servicios/Peluqueria";
import Productos from "./Servicios/Productos";

const Servicios = () => {
  return (
    <div>
      <h1 className="titulo">Servicios</h1>
      <div className="list-container">
        <Peluqueria />
        <Productos />
        <Depilacion />
      </div>
    </div>
  );
};

export default Servicios;

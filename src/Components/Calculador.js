import React from "react";
import "../Styles/Calculador.css";
import Tobi from "./Empleados/Tobi";
const Calculador = () => {
  return (
    <div className="general-container">
      <h2 className="title">Facturación</h2>
      <div className="input-container">
        <Tobi />
      </div>
    </div>
  );
};

export default Calculador;

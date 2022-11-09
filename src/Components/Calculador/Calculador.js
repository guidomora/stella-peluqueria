import React from "react";
import "./Calculador.css";
import Inputs from "./Inputs";


const Calculador = () => {
  return (
    <div className="general-container2">
      <h2 className="title">Facturación</h2>
      <div className="input-container">
          <Inputs />
      </div>
    </div>
  );
};

export default Calculador;

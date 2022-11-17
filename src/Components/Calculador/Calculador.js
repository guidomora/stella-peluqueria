import React from "react";
import "./Calculador.css";
import Inputs from "./Inputs";

const Calculador = () => {
  return (
    <div className="general-container2">
      <h2 className="title">Facturación</h2>
      <div className="input-container">
        <Inputs nombre={"Tobi"} coleccion={"Tobi"} />
        <Inputs nombre={"Karina"} coleccion={"Karina"} />
        <Inputs nombre={"Michael"} coleccion={"Michael"} />
        <Inputs nombre={"Nora"} coleccion={"Nora"} />
        <Inputs nombre={"Estela"} coleccion={"Estela"} />
        <Inputs nombre={"Candela"} coleccion={"Candela"} />
        <Inputs nombre={"Vanesa"} coleccion={"Vanesa"} />
        <Inputs nombre={"Romina"} coleccion={"Romina"} />
      </div>
    </div>
  );
};

export default Calculador;

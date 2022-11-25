import React from "react";
import Calendario from "./Calendario/Calendario";
import "./Calendario/Calendario.css"

const Turnos = () => {
  return (
    <div>
      <h1 className="turnos-title">Turnos</h1>
       <Calendario nombre={"Tobi"} turno={"Tobi"}/>
       <Calendario nombre={"Karina"} turno={"Karina"}/>
       <Calendario nombre={"Michael"} turno={"Michael"}/>
       <Calendario nombre={"Nora"} turno={"Nora"}/>
       <Calendario nombre={"Estela"} turno={"Estela"}/>
       <Calendario nombre={"Candela"} turno={"Candela"}/>
       <Calendario nombre={"Vanesa"} turno={"Vanesa"}/>
       <Calendario nombre={"Romina"} turno={"Romina"}/>
    </div>
  );
};

export default Turnos;

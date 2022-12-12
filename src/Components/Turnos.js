import React from "react";
import Calendario from "./Calendario/Calendario";
import "./Calendario/Calendario.css"

const Turnos = () => {
  return (
    <div>
      <h1 className="turnos-title">Turnos</h1>
       <Calendario nombre={"Tobi"} turno={"Tobi"} pendiente={"turno-tobi"}/>
       <Calendario nombre={"Karina"} turno={"Karina"} pendiente={"turno-karina"}/>
       <Calendario nombre={"Michael"} turno={"Michael"} pendiente={"turno-michael"}/>
       <Calendario nombre={"Nora"} turno={"Nora"} pendiente={"turno-nora"}/>
       <Calendario nombre={"Estela"} turno={"Estela"} pendiente={"turno-estela"}/>
       <Calendario nombre={"Candela"} turno={"Candela"} pendiente={"turno-candela"}/>
       <Calendario nombre={"Vanesa"} turno={"Vanesa"} pendiente={"turno-vanesa"}/>
       <Calendario nombre={"Romina"} turno={"Romina"} pendiente={"turno-romina"}/>
    </div>
  );
};

export default Turnos;

import React from "react";
import ServiciosLista from "../Components/Servicios2/ServiciosLista"
import "../Styles/Servicios.css"

const Servicios2 = () => {
  return (
    <div className="serv-container">
      <ServiciosLista coleccion={"Peluqueria"} categoria={"Peluqueria"} />
      <ServiciosLista coleccion={"Productos"} categoria={"Productos"} />
      <ServiciosLista coleccion={"Manos"} categoria={"Manos"} />
      <ServiciosLista coleccion={"Depilacion"} categoria={"Depilacion"} />
    </div>
  );
};

export default Servicios2;

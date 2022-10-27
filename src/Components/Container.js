import React from "react";
import ListaServicios from "./ListaServicios";
import Nav from "./Nav";
import "../Styles/Container.css";


const Container = () => {
  return (
    <div className="general-container">
      <header>
        <Nav />
      </header>
      <div className="lista-container">
        <ListaServicios />
      </div>
    </div>
  );
};

export default Container;

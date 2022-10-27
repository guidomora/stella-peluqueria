import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="buttons-container">
        <Link to={"/"}><li className="lista-buttons">Inicio</li></Link>
        <Link to={"/turnos"}><li className="lista-buttons">Turnos</li></Link>
        <Link to={"/validacion"}><li className="lista-buttons">Calculador</li></Link>
      </ul>
    </div>
  );
};

export default Nav;

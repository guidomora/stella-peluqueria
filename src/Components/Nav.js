import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="buttons-container">
        <Link to={"/turnos"}><li className="lista-buttons">Inicio</li></Link>
        <li className="lista-buttons">Turnos</li>
        <li className="lista-buttons">Calculador</li>
      </ul>
    </div>
  );
};

export default Nav;

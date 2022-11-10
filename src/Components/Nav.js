import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="buttons-container">
        <NavLink to={"/"}><li className="lista-buttons">Inicio</li></NavLink>
        <NavLink to={"/turnos"}><li className="lista-buttons">Turnos</li></NavLink>
        <NavLink to={"/validacion"}><li className="lista-buttons">Calculador</li></NavLink>
        <NavLink to={"/servicios"}><li className="lista-buttons">Servicios</li></NavLink>
        <NavLink to={"/servicios2"}><li className="lista-buttons">Servicios 2</li></NavLink>      
      </ul>
    </div>
  );
};

export default Nav;

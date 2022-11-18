import React from "react";
import Nav from "./Nav";
import "../Styles/Container.css";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <div>
      <div className="general-container1">
        <header>
          <Nav />
        </header>
        <div className="main">
          <div className="asd">

          </div>
          <Outlet />
        </div>
      </div>
      <footer>hola</footer>
    </div>
  );
};

export default Container;

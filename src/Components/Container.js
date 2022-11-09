import React from "react";
import Nav from "./Nav";
import "../Styles/Container.css";
import { Outlet } from "react-router-dom";


const Container = () => {
  return (
    <div className="general-container1">
      <header>
        <Nav />
      </header>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default Container;

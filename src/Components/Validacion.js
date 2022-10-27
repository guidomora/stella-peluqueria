import React from "react";
import { Outlet } from "react-router-dom";

const Validacion = () => {
  return (
    <div>
    <Outlet />
    <div>Validacion</div>
    </div>
  );
};

export default Validacion;

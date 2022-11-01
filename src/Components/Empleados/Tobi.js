import React from "react";
import "./Empleados-Style/Tobi.css";
const Tobi = () => {
  return (
    <div className="bordes">
      <div className="empleado-container">
        <p>Servicio 1</p>
        <p>Servicio 2</p>
        <p>Servicio 3</p>
        <p>Servicio 4</p>
        <p>Servicio 5</p>
        <p>Servicio 6</p>
        <p>Servicio 7</p>
      </div>
      <div className="input-container">
        <p>Tobi</p>
        <input className="inputs" />
        <input className="inputs" />
        <input className="inputs" />
        <input className="inputs" />
        <input className="inputs" />
        <input className="inputs" />
        <input className="inputs" />
      </div>
      <p>Total: $</p>
    </div>
  );
};

export default Tobi;

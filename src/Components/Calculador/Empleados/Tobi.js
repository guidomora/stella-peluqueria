import React, { useState } from "react";
import Inputs from "../Inputs"
import "./Empleados-Style/Tobi.css";
const Tobi = () => {
  const [value, setValue] = useState([])
  return (
    <div className="bordes">
      <Inputs 
      nombre= "Tobi"
      />
    </div>
  );
  
};

export default Tobi;


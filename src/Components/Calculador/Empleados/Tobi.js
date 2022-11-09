import React, { useContext, useState } from "react";
import { InputContext } from "../Inputs";
import "./Empleados-Style/Tobi.css";

const Tobi = () => {
  const prec = useContext(InputContext);

  const allPrec = []
  const savePrec = () => {
    allPrec.push(prec)
    console.log(allPrec)
  };
  console.log(allPrec)

  return (
    <div>
      <button onClick={savePrec}>Guardar</button>
      <p>{allPrec}</p>
    </div>
  );
};

export default Tobi;

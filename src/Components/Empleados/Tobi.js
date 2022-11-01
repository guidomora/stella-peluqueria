import React, { useState } from "react";
import "./Empleados-Style/Tobi.css";
const Tobi = () => {
  const [values, setValues] = useState({
    Corte: "",
    Lavado: "",
    Peinado: "",
    Color: "",
    Decoloracion: "",
    Nutricion: "",
    Manos: "",
    Alisado: "",
    Depilacion: "",
    Base: "",
    Maquillaje: "",
    Productos: "",
    Estetica: "",
    Pies: "",
  });
  const precios =[]

  const handleChange = ({ target }) => {
    setValues((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  };

  const cuenta = () => {
    const corte = 0.35 * values.Corte;
    const lavado = 0.35 * values.Lavado ;
    const peinado = 0.35 * values.Peinado ;
    const color = 0.25 *  values.Color;
    const decoloracion = 0.25  * values.Decoloracion;
    const nutricion = 0.35  * values.Nutricion;
    const manos = 0.5 *  values.Manos ;
    const alisado =0.25 * values.Alisado ;
    const depilacion =0.5 * values.Depilacion ;
    const base =0.5 * values.Base ;
    const maquillaje = 0.5 * values.Maquillaje;
    const productos = 0.25 *  values.Productos ;
    const estetica = 0.5 * values.Estetica;
    const pies = 0.5 * values.Pies ;
    precios.push(
      corte,
      lavado,
      peinado,
      color,
      decoloracion,
      nutricion,
      manos,
      alisado,
      depilacion,
      base,
      maquillaje,
      productos,
      estetica,
      pies
    );
    console.log(precios)
  };
  
  return (
    <div className="bordes">
      <div className="empleado-container">
        <p className="texto">Corte</p>
        <p className="texto">Lavado</p>
        <p className="texto">Peinado</p>
        <p className="texto">Color</p>
        <p className="texto">Decoloración</p>
        <p className="texto">Nutrición</p>
        <p className="texto">Manos</p>
      </div>
      <div className="input-container">
        <p>Tobi</p>
        <input
          className="inputs"
          type="number"
          name="Corte"
          value={values.Corte}
          placeholder="35%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Lavado"
          value={values.Lavado}
          placeholder="35%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Peinado"
          value={values.Peinado}
          placeholder="35%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Color"
          value={values.Color}
          placeholder="25%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Decoloracion"
          value={values.Decoloracion}
          placeholder="25%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Nutricion"
          value={values.Nutricion}
          placeholder="35%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Manos"
          value={values.Manos}
          placeholder="50%"
          onChange={handleChange}
        />
      </div>
      <div className="empleado-container">
        <p className="texto">Alisado</p>
        <p className="texto">Depilación</p>
        <p className="texto">Base Rulos</p>
        <p className="texto">Maquillaje</p>
        <p className="texto">Productos</p>
        <p className="texto">Estética Rostro</p>
        <p className="texto">Pies</p>
      </div>
      <div className="input-container">
        <p>Tobi</p>
        <input
          className="inputs"
          type="number"
          name="Alisado"
          value={values.Alisado}
          placeholder="25%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Depilacion"
          value={values.Depilacion}
          placeholder="50%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Base"
          value={values.Base}
          placeholder="50%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Maquillaje"
          value={values.Maquillaje}
          placeholder="50%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Productos"
          value={values.Productos}
          placeholder="25%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Estetica"
          value={values.Estetica}
          placeholder="50%"
          onChange={handleChange}
        />
        <input
          className="inputs"
          type="number"
          name="Pies"
          value={values.Pies}
          placeholder="50%"
          onChange={handleChange}
        />
      </div>
      <button onClick={cuenta}>Click</button>
      <p>Total:</p>
    </div>
  );
};

export default Tobi;

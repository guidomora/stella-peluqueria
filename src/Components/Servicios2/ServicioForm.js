import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ServicioForm = (props) => {
  const [inputs, setInputs] = useState({ servicio: "", precio: "" });

  const handleChange = (e) => {
    setInputs((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDelivery = (e) => {
    e.preventDefault();
    const newService = {
      id: uuidv4(),
      servicio: inputs.servicio,
      precio: inputs.precio,
    };

    props.onSubmit(newService);
  };

  return (
    <div className="servicios-form">
      <p className="form-title">Agregar Servicio:</p>
      <form onSubmit={handleDelivery}>
        <input
        className="input-form"
          type="text"
          name="servicio"
          placeholder="Escriba un servicio"
          value={inputs.servicio}
          onChange={handleChange}
        />
        <input
        className="input-precio"
          type="number"
          name="precio"
          placeholder="Precio"
          value={inputs.precio}
          onChange={handleChange}
        />
        <button className=" boton-add">Agregar</button>
      </form>
    </div>
  );
};

export default ServicioForm;

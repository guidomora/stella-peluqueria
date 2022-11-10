import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ServicioForm = (props) => {
  const [inputs, setInputs] = useState({ servicio: "", precio: "" });

  const handleChange = (e) => {
    setInputs((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
    console.log(inputs);
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
    <div>
      <form onSubmit={handleDelivery}>
        <input
          type="text"
          name="servicio"
          placeholder="Escriba un servicio"
          value={inputs.servicio}
          onChange={handleChange}
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={inputs.precio}
          onChange={handleChange}
        />
        <button>Agregar</button>
      </form>
    </div>
  );
};

export default ServicioForm;

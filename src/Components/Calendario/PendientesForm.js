import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const PendientesForm = (props) => {
    const [pendiente, setPendiente] = useState({ turno: ""});

    const handleChange = (e) => {
      setPendiente((state) => ({
        ...state,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleDelivery = (e) => {
      e.preventDefault();
      const newService = {
        id: uuidv4(),
        turno: pendiente.turno,
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
            name="turno"
            placeholder="Turno pendiente"
            value={pendiente.turno}
            onChange={handleChange}
          />
          <button className=" boton-add">Agregar</button>
        </form>
      </div>
    );
  };

export default PendientesForm;

import React, { useState } from "react";
import ServicioForm from "./ServicioForm";
import ServicioSolo from "./ServicioSolo";

const ServiciosLista = () => {
  const [services, setServices] = useState([]);

  const agregarServicio = (service) => {
    const updatedServices = [service, ...services];
    setServices(updatedServices);
  };

  return (
    <div>
      <ServicioForm onSubmit={agregarServicio} />
      <div>
        {services.map((service) => (
          <ServicioSolo
            key={service.id}
            id={service.id}
            texto={service.servicio}
            precio={service.precio}
            agregarServicio={agregarServicio}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiciosLista;

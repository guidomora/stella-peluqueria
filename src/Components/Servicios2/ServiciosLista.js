import React, { useState } from "react";
import ServicioForm from "./ServicioForm";
import ServicioSolo from "./ServicioSolo";


const ServiciosLista = ({categoria}) => {
  const [services, setServices] = useState([]);

  const agregarServicio = (service) => {
    const updatedServices = [service, ...services];
    setServices(updatedServices);
  };

  const borrarServicio = (id) => {
    const updatedServices = services.filter((service) => service.id !== id);
    setServices(updatedServices);
  };

  return (
    <div className="peluqueria">
      <h2 className="subtitulos">{categoria}</h2>
      <ServicioForm onSubmit={agregarServicio} />
      <div>
        {services.map((service) => (
          <ServicioSolo
            key={service.id}
            id={service.id}
            texto={service.servicio}
            precio={service.precio}
            agregarServicio={agregarServicio}
            borrarServicio={borrarServicio}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiciosLista;

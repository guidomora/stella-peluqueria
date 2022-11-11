
import { db } from "../Firebase";
import React, { useState } from "react";
import ServicioForm from "./ServicioForm";
import ServicioSolo from "./ServicioSolo";
import { doc, setDoc, } from "firebase/firestore"; 


const ServiciosLista = ({categoria}) => {
  const [services, setServices] = useState([]);

  const agregarServicio = async (service) => {
    const updatedServices = [service, ...services];
    setServices(updatedServices);

    await setDoc(doc(db, "Servicios", service.id), {
      servicio: service.servicio,
      precio: service.precio
    });
  };

  console.log(services)

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

import { db } from "../Firebase";
import React, { useEffect, useState } from "react";
import ServicioForm from "./ServicioForm";
import ServicioSolo from "./ServicioSolo";
import {
  doc,
  setDoc,
  collection,
  onSnapshot,
  query,
  deleteDoc,
  deleteField,
  updateDoc
} from "firebase/firestore";
import { async } from "@firebase/util";

const ServiciosLista = ({ categoria }) => {
  const [services, setServices] = useState([]);

  const agregarServicio = async (service) => {
    const updatedServices = [service, ...services];
    setServices(updatedServices);

    await setDoc(doc(db, "Servicios", service.id), {
      servicio: service.servicio,
      precio: service.precio,
    });
  };

  const obtenerServicios = async () => {
    const q = query(collection(db, "Servicios"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data() });
      });
      setServices(docs);
      console.log(services);
    });
  };

  useEffect(() => {
    obtenerServicios();
  }, []);

  const borrarServicio = async (id) => {
    const updatedServices = services.filter((service) => service.id !== id);
    setServices(updatedServices);

    const borrarFirestore = async (id) => {
      await deleteDoc(doc(db, "Servicios", id));
    };

    borrarFirestore();
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

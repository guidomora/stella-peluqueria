
import PendientesForm from "./PendientesForm";
import PendienteSolo from "./PendienteSolo";
import {
    doc,
    setDoc,
    collection,
    onSnapshot,
    query,
    deleteDoc,
  } from "firebase/firestore";
  import { db } from "../Firebase";
  import React, { useEffect, useState } from "react";

const PendienteLista = ({nombre, pendiente}) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const agregarServicio = async (service) => {
      const updatedServices = [service, ...services];
      setServices(updatedServices);
  
      await setDoc(doc(db, `${pendiente}`, service.id), {
        turno: service.turno,
        id: service.id,
      });
    };
  
    const obtenerServicios = async () => {
      const q = query(collection(db, `${pendiente}`));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data() });
        });
        setServices(docs);
      });
    };
  
    useEffect(() => {
      obtenerServicios();
      setTimeout(setLoading, 1000, false);
    }, []);
  
    const borrarServicio = async (id) => {
      const updatedServices = services.filter((service) => service.id !== id);
      setServices(updatedServices);
  
      const borrarFirestore = async () => {
        await deleteDoc(doc(db, `${pendiente}`, id));
      };
  
      borrarFirestore();
    };
  
    return (
      <div className="peluqueria">
        <h2 className="subtitulos">{nombre}</h2>
        <PendientesForm  onSubmit={agregarServicio}/>
        <div>
          {" "}
          {loading ? (
            <div className="flex-spinner">
              <h2> Cargando</h2>
              <div className="spinner-border" role="status">
                <span className="visually-hidden"></span>
              </div>
            </div>
          ) : (
            services.map((service) => (
              <PendienteSolo
                key={service.id}
                id={service.id}
                texto={service.turno}
                agregarServicio={agregarServicio}
                borrarServicio={borrarServicio}
              />
            ))
          )}
        </div>
      </div>
    );
  };

export default PendienteLista;
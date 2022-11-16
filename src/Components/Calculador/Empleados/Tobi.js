import React, { useContext, useEffect, useState } from "react";
import { InputContext } from "../Inputs";
import "./Empleados-Style/Tobi.css";
import {
  doc,
  addDoc,
  setDoc,
  collection,
  onSnapshot,
  query,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./Firebase";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { uuidv4 } from "@firebase/util";

const Tobi = () => {
  const prec = useContext(InputContext);
  const [dia, setDia] = useState([]);
  const [id, setId] = useState([])

  const obtenerServicios = async () => {
    const q = query(collection(db, "Tobi"));
    const querySnapshot = await getDocs(q);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
        docs.push( doc.data());
        setId(doc.id);
      });
      setDia(docs);
    });

  };

  useEffect(() => {
    obtenerServicios();
  }, []);

  const borrarServicio = async () => {
    const borrarFirestore = async () => {
      await deleteDoc(doc(db, "Tobi", id))
    };
    borrarFirestore();
  };

  return (
    <div>
      <ul>
        {dia.map((x) => (
          <li key={uuidv4()}>
            ${x.dia}
            <button onClick={() => borrarServicio()} className="badge bg-danger rounded-pill boton-eliminar">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tobi;

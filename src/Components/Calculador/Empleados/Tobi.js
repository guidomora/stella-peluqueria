import React, { useContext, useEffect, useState } from "react";
import { InputContext } from "../Inputs";
// import "./Empleados-Style/Tobi.css";
import {
  doc,
  addDoc,
  setDoc,
  collection,
  onSnapshot,
  query,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./Firebase";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { uuidv4 } from "@firebase/util";

const Tobi = () => {
  // const prec = useContext(InputContext);
  // const [dia, setDia] = useState([]);

  // const obtenerServicios = async () => {
  //   const q = query(collection(db, "Tobi"));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     const docs = [];
  //     querySnapshot.forEach((doc) => {
  //       docs.push({ ...doc.data() });
  //     });
  //     setDia(docs);
  //   });
  // };

  // useEffect(() => {
  //   obtenerServicios();

  //   console.log(dia)
  // }, []);

  // const borrarServicio = async () => {
  //   const borrarFirestore = async (dia) => {
  //     await deleteDoc(doc(db, "Tobi"));
  //   };
  //   borrarFirestore();
  // };


  return (
    <div>
      {/* <button className="boton-precio">Guardar</button>
      <ul>
        {dia.map((x) => (
          <li key={uuidv4()}>
            {x.dia}
            <button onClick={() => borrarServicio()}>Eliminar</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Tobi;

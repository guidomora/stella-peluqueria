import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendario.css";
import { doc, setDoc, collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { v4 as uuidv4 } from "uuid";
import { json } from "react-router-dom";


const Calendario = ({ nombre }) => {
  const [allEvents, setAllEvents] = useState([]);

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const id = uuidv4();
      const title = window.prompt("Turno:");
      if (title) {
        setAllEvents((prev) => [...prev, { start, end, title, id, allDay:false }])
        const agregarFirestore = async () => {
          await setDoc(doc(db, "Turnos", id), {
            title: title,
            start: JSON.stringify(start),
            end: JSON.stringify(end),
            allDay:false
          });
        }
        agregarFirestore()
      }
    },
    [allEvents],
    console.log( "hola", allEvents)
  );

  const locales = {
    "es-US": require("date-fns/locale/en-US"),
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  // const saveData = () => {
  //   localStorage.setItem("turnos", JSON.stringify(allEvents));
  //   console.log("guardado");
  // };

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("turnos"));
  //   if (items) {
  //     setAllEvents(items);
  //   }
  // }, []);

  const obtenerServicios = async () => {
    const q = query(collection(db, "Turnos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data() });
      });
      setAllEvents(docs);
    });
    unsubscribe()
  };

  useEffect(() => {
    obtenerServicios()
  }, [])

  console.log("nuevo", allEvents);

  return (
    <div>
      <h1>{nombre}</h1>
      {/* <button onClick={() => saveData()}> Guardar</button> */}
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        onSelectSlot={handleSelectSlot}
        selectable
        view="week"
        style={{ height: 900, width: 1400, margin: "50px" }}
      />
    </div>
  );
};

export default Calendario;

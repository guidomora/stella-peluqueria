import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendario.css";
import { v4 as uuidv4 } from "uuid";
import { db } from "../Firebase";
import {
  doc,
  setDoc,
  collection,
  onSnapshot,
  query,
  deleteDoc,
  addDoc,
} from "firebase/firestore";

const Calendario = ({ nombre, turno }) => {
  const [allEvents, setAllEvents] = useState([]);

  const handleSelectSlot = useCallback(
    ({ start, end, allDay = false }) => {
      const id = uuidv4();
      const title = window.prompt("Turno:");
      if (title) {
        setAllEvents((prev) => [...prev, { start, end, allDay, title, id }]);
      }
    },
    [allEvents]
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

  // Save the data to localStorage
  // const saveData = () => {
  //   localStorage.setItem(`${turno}`, JSON.stringify(allEvents));
  //   console.log("guardado");
  // };

  // Get the data from localStorage
  // const items = JSON.parse(localStorage.getItem(`${turno}`));
  // if (items) {
  //   const events = items.map(item => ({
  //    ...item,
  //    start: new Date(item.start),
  //    end: new Date(item.end)
  //   }))
  //   setAllEvents(events);
  // }

  // const saveData = async (event) => {
  //   const updatedServices = [event, ...allEvents];
  //     setAllEvents(updatedServices);
  //   const docRef = await addDoc(collection(db, "turno-tobi"), {
  //       allDay: event.allDay,
  //       start: event.start,
  //       end: event.end,
  //       id: event.id,
  //       title: event.title
  //     });
  //     console.log(docRef)
  // }

  const ver = () => {
    const saveData = async () => {
      const mapeo2 = allEvents.map((eventos) => eventos);
      await setDoc(doc(db, "turno-tobi", mapeo2.id), {
        allDay: mapeo2.allDay,
        start: mapeo2.start,
        end: mapeo2.end,
        id: mapeo2.id,
        title: mapeo2.title,
      });
      console.log(mapeo2);
    };
    saveData()
  };
  ver();

  const obtenerDatos = () => {};

  const borrarTurno = () => {
    localStorage.removeItem(`${turno}`);
  };

  useEffect(() => {
    obtenerDatos(allEvents);
  }, []);

  console.log(allEvents);

  return (
    <div>
      <div className="calendar-subContainer">
        <h2>{nombre}</h2>
        <div className="guardado">
          <p className="save-text"> Guardar turno</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-pin-angle save-icon"
          >
            <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z" />
          </svg>
        </div>
        <button
          type="button"
          className="btn btn-danger delete-button"
          onClick={() => borrarTurno()}
        >
          Eliminar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-trash3 delete-icon"
          >
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
          </svg>
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        onSelectSlot={handleSelectSlot}
        selectable
        popup={true}
        defaultView="day"
        min={new Date("December 25, 1995 9:00:00")}
        max={new Date("December 25, 1995 22:00:00")}
        className="calendario"
      />
    </div>
  );
};

export default Calendario;

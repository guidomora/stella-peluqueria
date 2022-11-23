import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendario.css";

const eventos = [];
const Calendario = ({ nombre }) => {
  const [allEvents, setAllEvents] = useState([]);

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt("Turno:");
      if (title) {
        setAllEvents((prev) => [...prev, { start, end, title }]);
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

  const saveData = () => {
    localStorage.setItem("turnos", JSON.stringify(allEvents));
    console.log("guardado");
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("turnos"));
    if (items) {
      setAllEvents(items);
    }
  }, []);

  console.log(allEvents);

  return (
    <div>
      <h1>{nombre}</h1>
      <button onClick={() => saveData()}> Guardar</button>
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

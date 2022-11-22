import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useCallback } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import { v4 as uuidv4 } from "uuid";
import "./Calendario.css"

const eventos = [];
const Calendario = () => {



  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    time: "",
    id: uuidv4(),
  });
  const [allEvents, setAllEvents] = useState(eventos);

  const handleAddEvents = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt('New Event name')
      if (title) {
        setAllEvents((prev) => [...prev, { start, end, title }])
      }
    },
    [allEvents]
  )

  const handleSelectEvent = useCallback(
    (event) => window.alert(event.title),
    []
  )

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

  return (
    <div>
      <h1>Calendar</h1>
      <h2>New event</h2>
      <div>
        <input
          type="text"
          placeholder="Agregar turno"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholder="Fecha de inicio"
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start: start })}
        />
        <DatePicker
          placeholder="Fecha de fin"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end: end })}
        />
        <TimePicker
          placeholder="hora"
          value={newEvent.time}
          onChange={(time) => setNewEvent({ ...newEvent, time: time })}
        />
        <button onClick={handleAddEvents}> submit</button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
        style={{ height: 900, width: 1400, margin: "50px" }}
      />
    </div>
  );
};

export default Calendario;

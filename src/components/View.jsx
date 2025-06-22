
import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import enUS from "date-fns/locale/en-US";
import './vieww.css';

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Sales Checking",
    start: new Date(2025, 5, 24, 10, 0),
    end: new Date(2025, 5, 24, 11, 30),
  },
  {
    title: "New UI Discussion",
    start: new Date(2025, 5, 25, 13, 0),
    end: new Date(2025, 5, 25, 15, 0),
  },
];

function View() {
  return (
    <div style={{ height: "90vh", padding: "1rem" }}>
      <h2>📅 Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "80vh" }}
      />
    </div>
  );
}

export default View;

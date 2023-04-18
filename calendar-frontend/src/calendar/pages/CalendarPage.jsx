import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { localizer } from '../../helpers';
import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, Navbar } from "../";
import { useCalendarStore, useUiStore } from '../../hooks';

export const CalendarPage = () => {

  const { openDateModal } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore();
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

  const eventStyleGetter = (event, start, end, isSelected) => {

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: '#fff'
    };

    return {
      style
    };

  };

  const onDoubleClickEvent = (e) => {
    openDateModal();
  };

  const onSelectEvent = (e) => {
    setActiveEvent(e);
  };

  const onViewChangedEvent = (e) => {
    localStorage.setItem('lastView', e);
    setLastView(e);
  };


  return (
    <>
      <Navbar/>

      <Calendar
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClickEvent}
        onSelectEvent={onSelectEvent}
        onView={onViewChangedEvent}
      />
      <CalendarModal/>
      <FabAddNew/>
      <FabDelete/>
    </>
  )
}

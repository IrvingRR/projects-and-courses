import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../redux/calendar/calendarSlice";

export const useCalendarStore = () => {

    const { events, activeEvent } = useSelector(state => state.calendar);
    const dispatch = useDispatch();

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    };

    const startSavingEvent = async (calendarEvent) => {
        // TODO Came to backend

        // TODO All it's ok

        if(calendarEvent._id) {
            // Update
            onUpdateEvent(calendarEvent);
        } else {
            // Create
            dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime() }));
        }
    }

    const startDeletingEvent = () => {
        dispatch(onDeleteEvent());
    }

    return {
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        // Methods
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent
    };

}; 
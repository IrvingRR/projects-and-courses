
export const CalendarEvent = ({ event }) => {

    const { title, user } = event;

  return (
    <>
        <strong>{ title }</strong>
        <small> - { user.name }</small>
    </>
  );
};
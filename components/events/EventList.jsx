import EventListItem from './EventItem';
import classes from './event-list.module.css';

const EventList = (props) => {
  const { events } = props;

  const renderedEvents = events.map((event) => (
    <EventListItem key={event.id} event={event} />
  ));

  return <ul className={classes.list}>{renderedEvents}</ul>;
};

export default EventList;

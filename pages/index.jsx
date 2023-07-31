import EventList from '@/components/events/EventList';
import { getAllEvents } from '@/dummy-data';

const HomePage = () => {
  const allEvents = getAllEvents();

  return (
    <div>
      <h1>The Home Page</h1>
      <div>
        <h2>All events</h2>
        <EventList events={allEvents} />
      </div>
    </div>
  );
};

export default HomePage;

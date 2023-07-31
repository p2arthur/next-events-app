import EventList from '@/components/events/EventList';
import { getFeaturedEvents } from '@/dummy-data';
import EventsSearch from '@/components/events/EventsSearch';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>The Home Page</h1>
      <div>
        <h2>Featured events</h2>
        <EventList events={featuredEvents} />
      </div>
    </div>
  );
};

export default HomePage;

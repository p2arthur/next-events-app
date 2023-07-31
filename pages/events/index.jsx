import EventList from '@/components/events/EventList';
import { getFeaturedEvents } from '@/dummy-data';

const AllEventsPage = () => {
  const featuredEvents = getFeaturedEvents();

  console.log('featured events', featuredEvents);

  return (
    <div>
      <h1>Featured events</h1>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default AllEventsPage;

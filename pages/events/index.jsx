import EventList from '@/components/events/EventList';
import EventsSearch from '@/components/events/EventsSearch';
import { useRouter } from 'next/router';

import { getAllEvents } from '@/dummy-data';

const AllEventsPage = () => {
  const router = useRouter();

  const allEvents = getAllEvents();

  const handleFindEvent = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <h1>All events</h1>
      <EventsSearch onSearch={handleFindEvent} />
      <EventList events={allEvents} />
    </>
  );
};

export default AllEventsPage;

import EventList from '@/components/events/EventList';
import { getFilteredEvents } from '@/dummy-data';
import { useRouter } from 'next/router';

const EventsByDate = () => {
  const router = useRouter();

  const { slug } = router.query;

  if (!slug) {
    return <p>Loading...</p>;
  }

  const filteredYear = +slug[0];
  const filteredMonth = +slug[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return <p>Invalid filter. Please change your values</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length < 1) {
    return <p>Your filter returned 0 results</p>;
  }

  console.log('Filtered events', filteredEvents, filteredYear, filteredMonth);

  return (
    <div>
      <h1>Events by date</h1>
      <EventList events={filteredEvents} />
    </div>
  );
};

export default EventsByDate;

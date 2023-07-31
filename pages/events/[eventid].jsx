import { useRouter } from 'next/router';
import { getEventById } from '@/dummy-data';
import EventSummary from '@/components/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventContent from '@/components/event-detail/event-content';

const EventDetailsPage = () => {
  const router = useRouter();
  const { eventId } = router.query;

  const event = getEventById(eventId);

  if (!event) {
    return <p>No details were found for the event!</p>;
  }

  console.log('event:', event);

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </>
  );
};

export default EventDetailsPage;

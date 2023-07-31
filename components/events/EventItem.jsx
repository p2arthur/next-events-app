import Link from 'next/link';

import classes from './event-item.module.css';

const EventListItem = (props) => {
  const { event } = props;

  const readableDate = new Date(event.date).toLocaleDateString('en-US');
  const formattedAddress = event.location.replace(', ', '/n');
  const exploreLink = `/events/${event.id}`;

  console.log('readable date', readableDate);

  return (
    <li className={classes.item}>
      <img src={'/' + event.image} alt={event.title} />
      <div className={classes.content}>
        <div className={classes.sumary}>
          <h2>{event.title}</h2>

          <div className={classes.date}>
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{event.location}</address>
          </div>
          <div className={classes.actions}>
            <Link href={exploreLink}>View details</Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventListItem;

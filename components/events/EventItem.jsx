import Link from 'next/link';
import Button from '../ui/Button';

import classes from './event-item.module.css';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

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
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{event.location}</address>
          </div>
          <div className={classes.actions}>
            <Button link={exploreLink}>
              <span>Explore event</span>
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventListItem;

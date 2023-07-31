import Link from 'next/link';
import classes from './button.module.css';

const Button = (props) => {
  const { children, link } = props;

  if (link) {
    return (
      <Link className={classes.btn} href={link}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

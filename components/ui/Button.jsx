import Link from 'next/link';
import classes from './button.module.css';

const Button = (props) => {
  const { children, link } = props;

  return (
    <Link className={classes.btn} href={link}>
      {children}
    </Link>
  );
};

export default Button;

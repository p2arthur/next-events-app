import Link from 'next/link';
import React from 'react';

const NavItem = (props) => {
  const { navItem } = props;
  return (
    <li>
      <Link href={navItem.href}>{navItem.label}</Link>
    </li>
  );
};

export default NavItem;

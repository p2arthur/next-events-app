import React from 'react';
import { HeaderLogo } from './HeaderLogo';
import NavItemsList from './NavItemsList';

import classes from './main-header.module.css';

const MainHeader = () => {
  const navItems = [{ label: 'Browse All Events', href: '/events' }];

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <HeaderLogo />
      </div>
      <nav className={classes.navigation}>
        <NavItemsList navItems={navItems} />
      </nav>
    </header>
  );
};

export default MainHeader;

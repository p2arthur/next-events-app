import NavItem from './NavItem';

const NavItemsList = (props) => {
  const { navItems } = props;

  const renderedNavItemsList = navItems.map((navItem) => (
    <NavItem key={navItem.label} navItem={navItem} />
  ));

  return <ul>{renderedNavItemsList}</ul>;
};

export default NavItemsList;

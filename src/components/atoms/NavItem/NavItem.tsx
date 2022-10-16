import React from 'react';
import { useMatchRoute } from '../../../hooks';
import { NavLink } from './styles';
import { NavItemProps } from './types';

const NavItem = React.memo<NavItemProps>(({ url, children, className }) => {
  const { isActivated } = useMatchRoute({ url });
  return (
    <div className={className}>
      <NavLink isActive={isActivated} href={url}>
        {children}
      </NavLink>
    </div>
  );
});

NavItem.displayName = 'NavItem';
export default NavItem;

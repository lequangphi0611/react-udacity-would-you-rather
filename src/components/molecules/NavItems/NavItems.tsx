import { map } from 'lodash';
import React from 'react';
import { NavItem } from '../../atoms';
import { NavUl } from './styles';
import { NavItemsProps } from './types';

const NavItems = React.memo<NavItemsProps>(({ items }) => {
  return (
    <NavUl>
      {map(items, ({ key, url, children }) => (
        <li key={key}>
          <NavItem url={url}>{children}</NavItem>
        </li>
      ))}
    </NavUl>
  );
});

NavItems.displayName = 'NavItems';
export default NavItems;

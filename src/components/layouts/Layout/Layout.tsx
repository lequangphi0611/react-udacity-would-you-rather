import React, { PropsWithChildren } from 'react';
import { useLogout } from '../../../hooks';
import { Button } from '../../atoms';
import { NavItems, User } from '../../molecules';
import { NavItemType } from '../../molecules/NavItems';
import { Content, LayoutTitle, NavItemsContainer } from './styles';

const navItems: NavItemType[] = [
  {
    children: 'Home',
    key: 'home',
    url: '/',
  },
  {
    children: 'New Question',
    key: 'add-question',
    url: '/questions/add',
  },
  {
    children: 'Leader Board',
    key: 'leader-board',
    url: '/leaderboard',
  },
];

const Layout = React.memo<PropsWithChildren<{ title: string }>>(
  ({ children, title }) => {
    const logout = useLogout();
    return (
      <div>
        <LayoutTitle>{title}</LayoutTitle>
        <NavItemsContainer>
          <NavItems items={navItems} />
          <User />
          <Button onClick={logout} width='fit-content'>
            Log out
          </Button>
        </NavItemsContainer>
        <Content>{children}</Content>
      </div>
    );
  }
);

Layout.displayName = 'Layout';
export default Layout;

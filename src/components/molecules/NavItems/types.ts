import { ReactNode } from 'react';

export type NavItemType = {
  key: string;
  url: string;
  children: ReactNode;
};

export type NavItemsProps = CommonProps & {
  items: NavItemType[];
};

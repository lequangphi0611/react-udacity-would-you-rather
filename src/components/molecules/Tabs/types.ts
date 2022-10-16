import { PropsWithChildren, ReactNode } from 'react';

export type TabConfig = {
  index: string;
  content: ReactNode;
};

export type TabsProps = PropsWithChildren<{
  defaultActiveTabIndex: string;
  tabs: TabConfig[];
}>;

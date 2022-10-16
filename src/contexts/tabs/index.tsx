import React, { PropsWithChildren, useContext } from 'react';

export type TabsContextValue = {
  activeTab: string;
};

export type UseTabsContextResult = TabsContextValue;

const TabsContext = React.createContext<UseTabsContextResult>(
  {} as UseTabsContextResult
);

export const useTabsContext = (): UseTabsContextResult => {
  return useContext(TabsContext);
};

export const TabsProvider: React.FunctionComponent<
  PropsWithChildren<TabsContextValue>
> = ({ children, ...value }) => {
  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

TabsProvider.displayName = 'TabsProvider';

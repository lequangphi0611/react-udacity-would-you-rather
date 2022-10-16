import { map } from 'lodash';
import { useRouter } from 'next/router';
import { encode } from 'querystring';
import * as React from 'react';
import { TabsProvider } from '../../../contexts';
import { resolveTabActiveIndex } from '../../../hocs';
import { NavItem } from '../../atoms';
import Card from '../Card';
import { TabsHead } from './styles';
import { TabsProps } from './types';

const Tabs: React.FunctionComponent<TabsProps> =
  resolveTabActiveIndex<TabsProps>(({ children, activeTab, tabs }) => {
    const { query, pathname } = useRouter();

    const buildUrl = React.useCallback(
      (tabIndex: string) => {
        const queryBuilder = new URLSearchParams(encode(query));
        queryBuilder.set('activeTab', tabIndex);
        return `${pathname}?${queryBuilder.toString()}`;
      },
      [query, pathname]
    );

    return (
      <Card
        renderTitle={({ className }) => (
          <TabsHead className={className}>
            {map(tabs, (tab) => (
              <NavItem url={buildUrl(tab.index)} key={tab.index}>
                {tab.content}
              </NavItem>
            ))}
          </TabsHead>
        )}
      >
        <TabsProvider activeTab={activeTab}>{children}</TabsProvider>
      </Card>
    );
  });

Tabs.displayName = 'Tabs';
export default Tabs;

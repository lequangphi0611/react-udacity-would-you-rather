import * as React from 'react';
import { useTabsContext } from '../../../contexts';
import { TabContentContainer } from './styles';
import { TabContentProps } from './types';

const TabContent: React.FunctionComponent<TabContentProps> = ({
  children,
  tabIndex,
}) => {
  const { activeTab } = useTabsContext();

  const isRendered = React.useRef(false);

  if (activeTab !== tabIndex && !isRendered.current) {
    return null;
  }

  isRendered.current = true;
  return (
    <TabContentContainer visible={activeTab === tabIndex}>
      {children}
    </TabContentContainer>
  );
};

export default TabContent;

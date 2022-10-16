import { useRouter } from 'next/router';
import React, { useEffect, useLayoutEffect } from 'react';
import { Spinner } from '../components/atoms';
import { useQueryParam, useUser } from '../hooks';
import { SpinnerContainer } from '../styles';

type ResolveTabComponentProps = {
  defaultActiveTabIndex: string;
};

type ResolveTabActiveIndexProps = {
  activeTab: string;
};

const resolveTabActiveIndex = <P extends ResolveTabComponentProps>(
  Component: React.ComponentType<P & ResolveTabActiveIndexProps>
) => {
  const authenticatedComponent = React.memo<P>((props) => {
    const { isReady } = useRouter();
    const [activeTab, updateActiveTab] = useQueryParam('activeTab');

    const { defaultActiveTabIndex } = props;
    useLayoutEffect(() => {
      if (!isReady) {
        return;
      }

      if (!activeTab) {
        updateActiveTab(defaultActiveTabIndex);
      }
    }, [activeTab, defaultActiveTabIndex, isReady, updateActiveTab]);

    if (!activeTab) {
      return <Spinner />;
    }

    const index = typeof activeTab === 'string' ? activeTab : activeTab[0];

    if (!index) {
      return null;
    }

    return <Component activeTab={index} {...props} />;
  });

  authenticatedComponent.displayName = `Authenticated - ${Component.displayName}`;
  return authenticatedComponent;
};

export default resolveTabActiveIndex;

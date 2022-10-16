import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Spinner } from '../components/atoms';
import { useUser } from '../hooks';
import { SpinnerContainer } from '../styles';

const authenticated = <P extends {}>(Component: React.ComponentType<P>) => {
  const authenticatedComponent = React.memo<P>((props) => {
    const { asPath, replace, isReady } = useRouter();

    const { user, isLoading } = useUser();

    useEffect(() => {
      if (user || isLoading || !isReady) {
        return;
      }

      replace({
        pathname: '/login',
        query: { from: asPath },
      });
    }, [user, isLoading, asPath, replace, isReady]);

    if (isLoading) {
      return (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      );
    }

    if (!user) {
      return null;
    }

    return <Component {...props} />;
  });

  authenticatedComponent.displayName = `Authenticated - ${Component.displayName}`;
  return authenticatedComponent;
};

export default authenticated;

import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { Spinner } from '../components/atoms';
import { useUser } from '../hooks';
import { SpinnerContainer } from '../styles';

const redirectWhenAuthenticated = <P extends {}>(
  Component: React.ComponentType<P>
) => {
  const component = React.memo<P>((props) => {
    const { user, isLoading } = useUser();
    const { replace, query, isReady } = useRouter();

    const redirect = useCallback(() => {
      const destinationUrl = query['from'] || '/';
      replace(destinationUrl as string);
    }, [replace, query]);

    useEffect(() => {
      if (isLoading || !user || !isReady) {
        return;
      }

      redirect();
    }, [user, isLoading, redirect, isReady]);

    if (isLoading) {
      return (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      );
    }

    return <Component {...props} />;
  });

  component.displayName = `RedirectAuthenticated - ${Component.displayName}`;
  return component;
};

export default redirectWhenAuthenticated;

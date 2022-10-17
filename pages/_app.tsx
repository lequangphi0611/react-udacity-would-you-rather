import Head from 'next/head';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { ApiProvider } from '../src/apis';
import { ApiContextProvider } from '../src/contexts';
import { authenticated } from '../src/hocs';
import { useAxios, useConstant } from '../src/hooks';
import { store } from '../src/state/store';
import theme from '../src/theme';
import { CustomAppPageType } from '../src/types';
import '../styles/globals.css';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const SimpleApiContextProvider = React.memo<PropsWithChildren<{}>>(
  ({ children }) => {
    const axioValue = useAxios();

    const [apiProvider, setApiProvider] = useState<ApiProvider | null>(null);

    useEffect(() => {
      setApiProvider(new ApiProvider(axioValue));
    }, [axioValue]);
    return (
      <>
        {apiProvider && (
          <ApiContextProvider value={apiProvider}>
            {children}
          </ApiContextProvider>
        )}
      </>
    );
  }
);
SimpleApiContextProvider.displayName = 'SimpleApiContextProvider';

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <>{children}</>
);

const Authenticated = authenticated(DefaultLayout);
const AuthenticateRender = React.memo<
  PropsWithChildren<{ authenticated?: boolean }>
>(({ children, authenticated }) => {
  return (
    <>{authenticated ? <Authenticated>{children}</Authenticated> : children}</>
  );
});
AuthenticateRender.displayName = 'AuthenticateRender';

function MyApp({ Component, pageProps }: CustomAppPageType) {
  const Layout = Component.getLayout?.() || DefaultLayout;

  const authenticated = Component.authenticated;
  const title = pageProps.title || 'Would You Rather App';
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Would You Rather App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <SimpleApiContextProvider>
            <QueryClientProvider client={queryClient}>
              <AuthenticateRender authenticated={authenticated}>
                <Layout title={title}>
                  <Component {...pageProps} />
                </Layout>
              </AuthenticateRender>
            </QueryClientProvider>
          </SimpleApiContextProvider>
        </Provider>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default MyApp;

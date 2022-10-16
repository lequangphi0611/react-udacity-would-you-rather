import React, { useContext, PropsWithChildren } from 'react';
import ApiProvider from '../../apis/provider';
const ApiContext = React.createContext<ApiProvider>({} as ApiProvider);

export const useApiContext = (): ApiProvider => {
  return useContext(ApiContext);
};

export type ApiProviderProps = PropsWithChildren<{
  value: ApiProvider;
  }>;

const { Provider } = ApiContext;

export const ApiContextProvider = React.memo<ApiProviderProps>(
  ({ value, children }) => <Provider value={value}>{children}</Provider>
);

ApiContextProvider.displayName = 'ApiContextProvider';
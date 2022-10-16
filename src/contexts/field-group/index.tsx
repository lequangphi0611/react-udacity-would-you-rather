import React, { PropsWithChildren, useContext, useMemo } from 'react';

export type FieldGroupContextValue = {
  name: string;
  htmlId: string;
};

export type UseFieldGroupContextResult =
  | FieldGroupContextValue
  | undefined
  | null;

const FieldGroupContext = React.createContext<UseFieldGroupContextResult>(null);

export const useFieldGroupContext = (): UseFieldGroupContextResult => {
  return useContext(FieldGroupContext);
};

export const FieldGroupProvider = React.memo<
  PropsWithChildren<FieldGroupContextValue>
>(({ children, name, htmlId }) => {
  const value = useMemo(() => ({ name, htmlId }), [name, htmlId]);
  return (
    <FieldGroupContext.Provider value={value}>
      {children}
    </FieldGroupContext.Provider>
  );
});

FieldGroupProvider.displayName = 'FieldGroupProvider';

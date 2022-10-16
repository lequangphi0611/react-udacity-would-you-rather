import React, { PropsWithChildren, useContext, useMemo } from 'react';
import { UseFieldArrayReturn } from 'react-hook-form';

export type FieldArrayContextValue = UseFieldArrayReturn & {
  name: string;
};

export type UseFieldArrayContextResult = FieldArrayContextValue;

const FieldArrayContext = React.createContext<UseFieldArrayContextResult>(
  {} as UseFieldArrayContextResult
);

export const useFieldArrayContext = (): UseFieldArrayContextResult => {
  return useContext(FieldArrayContext);
};

export const FieldArrayProvider: React.FunctionComponent<
  PropsWithChildren<FieldArrayContextValue>
> = ({ children, ...fieldArrayMethod }) => {
  return (
    <FieldArrayContext.Provider value={fieldArrayMethod}>
      {children}
    </FieldArrayContext.Provider>
  );
};

FieldArrayProvider.displayName = 'FieldArrayProvider';

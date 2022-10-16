import React, { PropsWithChildren, useContext, useMemo } from 'react';

export type RadioGroupContextValue = {
  name: string;
  onChange: (value: string | number | null) => void;
  value: string | number | null;
};

export type UseRadioGroupContextResult = RadioGroupContextValue;

const RadioGroupContext = React.createContext<UseRadioGroupContextResult>(
  {} as UseRadioGroupContextResult
);

export const useRadioGroupContext = (): UseRadioGroupContextResult => {
  return useContext(RadioGroupContext);
};

export const RadioGroupProvider = React.memo<
  PropsWithChildren<RadioGroupContextValue>
>(({ children, name, onChange, value }) => {
  const providerValue = useMemo(
    () => ({ name, onChange, value }),
    [name, onChange, value]
  );
  return (
    <RadioGroupContext.Provider value={providerValue}>
      {children}
    </RadioGroupContext.Provider>
  );
});

RadioGroupProvider.displayName = 'RadioGroupProvider';

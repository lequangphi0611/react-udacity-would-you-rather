import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { RadioGroupProvider } from '../../../../../contexts';
import { RadioGroupProps } from './types';

const RadioGroup: React.FunctionComponent<RadioGroupProps> = ({
  name,
  children,
}) => {
  const { control } = useFormContext();
  const { field } = useController({ name, control });
  const { onChange, value } = field;

  return (
    <RadioGroupProvider name={name} value={value} onChange={onChange}>
      {children}
    </RadioGroupProvider>
  );
};

export default RadioGroup;

import React from 'react';
import { InputFieldProps } from './types';
import { Controller } from 'react-hook-form';
import Input from '../../../Input';
import { useFieldGroupContext } from '../../../../../contexts';
import { composeNames } from '../../../../../utils';

const InputField = React.memo(({ name, ...inputProps }: InputFieldProps) => {
  const fieldGroup = useFieldGroupContext();

  const inputName = composeNames(fieldGroup?.name, name);

  if (!inputName) {
    console.warn('The name prop must be not null or undefined.');
    return <Input {...inputProps} id={fieldGroup?.htmlId} />;
  }

  return (
    <Controller
      name={inputName}
      render={({ field }) => (
        <Input {...inputProps} {...field} id={fieldGroup?.htmlId} />
      )}
    />
  );
});

InputField.displayName = 'InputField';
export default InputField;

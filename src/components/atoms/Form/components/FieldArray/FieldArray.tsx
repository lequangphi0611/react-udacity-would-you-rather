import { map } from 'lodash';
import React, { useCallback, useRef } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import { FieldArrayProvider } from '../../../../../contexts/field-array';
import { composeNames } from '../../../../../utils';
import { FieldArrayProps } from './types';

const FieldArray: React.FunctionComponent<FieldArrayProps> = ({
  name,
  children,
}) => {
  const { control } = useFormContext();
  const initValueRef = useRef(control._defaultValues[name]?.[0]);
  initValueRef.current = control._defaultValues[name]?.[0];

  const fieldArrayMethods = useFieldArray({
    control,
    name,
  });

  return (
    <FieldArrayProvider name={name} {...fieldArrayMethods}>
      {children}
    </FieldArrayProvider>
  );
};

FieldArray.displayName = 'FieldArray';
export default FieldArray;

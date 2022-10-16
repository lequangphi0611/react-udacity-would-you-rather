import { toString } from 'lodash';
import React, { useCallback } from 'react';
import {
  useFieldGroupContext,
  useRadioGroupContext,
} from '../../../../../contexts';
import { InputProps } from '../../../Input/types';
import Label from '../../../Label';
import { RadioButton, RadioContainer } from './styles';
import { RadioProps } from './types';

const RadioField = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const fieldGroup = useFieldGroupContext();
    return (
      <RadioButton
        {...(props as any)}
        ref={ref}
        id={fieldGroup?.htmlId}
        name={fieldGroup?.name}
      />
    );
  }
);
RadioField.displayName = 'RadioField';

const Radio = React.memo(({ text, value: radioValue }: RadioProps) => {
  const { value, name, onChange } = useRadioGroupContext();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked, value } = event.target;
      onChange(checked ? value : null);
    },
    [onChange]
  );
  return (
    <RadioContainer name={name}>
      <RadioField
        checked={toString(value) === toString(radioValue)}
        value={radioValue === null ? undefined : radioValue}
        onChange={handleChange}
      />
      <Label>{text}</Label>
    </RadioContainer>
  );
});

Radio.displayName = 'Radio';
export default Radio;

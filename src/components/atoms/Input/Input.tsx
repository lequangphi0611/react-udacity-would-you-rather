import React from 'react';
import { StyledInput } from './styles';
import { InputProps } from './types';

const Input = React.memo(
  React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return <StyledInput ref={ref} {...props} />;
  })
);
Input.displayName = 'Input';

export default Input;

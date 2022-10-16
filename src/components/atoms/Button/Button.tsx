import React from 'react';
import { ButtonStyled } from './styles';
import { ButtonProps } from './types';

const Button = React.memo(({ type = 'button', ...rest }: ButtonProps) => {
  return <ButtonStyled role="button" type={type} {...rest} />;
});

Button.displayName = 'Button';
export default Button;

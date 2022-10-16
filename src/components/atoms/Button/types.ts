import React, { ReactNode } from 'react';

export type ButtonColor = 'primary' | 'secondary';

export type ButtonStyledProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  color?: ButtonColor;
  width?: string;
};

export type ButtonProps = CommonProps & {
  children: ReactNode;
  type?: 'submit' | 'button' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: ButtonColor;
  disabled?: boolean;
  width?: string;
};

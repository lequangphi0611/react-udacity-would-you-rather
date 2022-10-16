import React from 'react';

export type InputProps = {
  value?: string | number;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  ariaLabel?: string;
  className?: string;
  name?: string;
  id?: string;
  type?: string;
  checked?: boolean;
};

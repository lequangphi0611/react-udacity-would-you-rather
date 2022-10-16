import { InputProps } from '../../../Input/types';

export type InputFieldProps = CommonProps &
  Pick<InputProps, 'placeholder' | 'type'> & {
    name?: string;
  };

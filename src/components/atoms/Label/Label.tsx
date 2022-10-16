import React from 'react';
import { useFieldGroupContext } from '../../../contexts';
import { LabelContainer } from './styles';
import { LabelProps } from './types';

const Label = React.memo(({ children, className }: LabelProps) => {
  const fieldGroup = useFieldGroupContext();

  return (
    <LabelContainer htmlFor={fieldGroup?.htmlId} className={className}>
      {children}
    </LabelContainer>
  );
});

Label.displayName = 'Label';
export default Label;

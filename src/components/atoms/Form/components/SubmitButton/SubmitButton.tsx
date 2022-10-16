import * as React from 'react';
import { useFormContext, useFormState } from 'react-hook-form';
import Button from '../../../Button';

const SubmitButton = React.memo<React.PropsWithChildren>(({ children }) => {
  const { control } = useFormContext();
  const { isValid } = useFormState({ control });
  return (
    <Button type='submit' color='primary' disabled={!isValid}>
      {children}
    </Button>
  );
});

SubmitButton.displayName = 'SubmitButton';
export default SubmitButton;

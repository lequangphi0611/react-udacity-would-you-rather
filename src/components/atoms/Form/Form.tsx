import React, { useCallback, useMemo } from 'react';
import { FormProvider, FieldValues } from 'react-hook-form';
import { FormStyled } from './styles';
import { FormProps } from './types';

const genericMemo: <T>(component: T) => T = React.memo;

const Form = <T extends FieldValues>({
  children,
  onSubmit,
  onError,
  className,
  handleSubmit: hookformSubmit,
  ...rest
}: FormProps<T>) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useMemo(
    () => hookformSubmit(onSubmit, onError),
    [hookformSubmit, onSubmit, onError]
  );
  return (
    <FormProvider handleSubmit={hookformSubmit} {...rest}>
      <FormStyled className={className} onSubmit={handleSubmit}>
        {children}
      </FormStyled>
    </FormProvider>
  );
};

Form.displayName = 'Form';

export default genericMemo(Form);

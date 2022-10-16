import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { FieldGroupProvider } from '../../../../../contexts';
import { useConstant } from '../../../../../hooks';
import { FieldGroupStyled } from './styles';

type FieldGroupProps = CommonProps & {
  name: string;
};

const FieldGroup: React.FunctionComponent<
  React.PropsWithChildren<FieldGroupProps>
> = React.memo(({ name, className, children }) => {
  const htmlId = useConstant(() => uuid());

  return (
    <FieldGroupStyled className={className}>
      <FieldGroupProvider name={name} htmlId={htmlId}>
        {children}
      </FieldGroupProvider>
    </FieldGroupStyled>
  );
});

FieldGroup.displayName = 'FieldGroup';
export default FieldGroup;

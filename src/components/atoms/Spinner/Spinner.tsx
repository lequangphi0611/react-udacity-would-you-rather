import React from 'react';
import SpinnerMaterial from 'react-spinner-material';
import { useTheme } from 'styled-components';
import { SpinnerContainer, SpinnerMask, SpinnerStyled, SpinnerContent } from './styles';
import { SpinnerProps } from './types';

const Spinner: React.FunctionComponent<SpinnerProps> = ({
  children,
  isLoading = true,
}) => {
  const { backgrounds } = useTheme();

  if (!isLoading) {
    return <>{children}</>;
  }
  return (
    <SpinnerStyled>
      <SpinnerContainer>
        <SpinnerMaterial color={backgrounds.primary} stroke={3} />
      </SpinnerContainer>
      <SpinnerMask />
      <SpinnerContent>{children}</SpinnerContent>
    </SpinnerStyled>
  );
};

Spinner.displayName = 'Spinner';
export default Spinner;

import styled, { css } from 'styled-components';
import { CardTitleProps } from './types';

export const CardStyled = styled.div`
  display: flex;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.backgrounds.secondaryDark};

  flex-direction: column;
`;

export const CardTitle = styled(
  ({ align, as, fontSize, ...props }: CardTitleProps) => <h2 {...props} />
)`
  text-align: center;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.backgrounds.secondaryDark};
  margin: 0;
  background: ${({ theme }) => theme.backgrounds.secondary};
  text-align: ${({ align }) => align || 'center'};
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `}
`;

export const CardContent = styled.div`
  padding: 10px 15px;
  gap: 10px;
  display: flex;
  flex-direction: column;

  width: 100%;
`;

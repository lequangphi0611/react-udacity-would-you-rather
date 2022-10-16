import styled, { css } from 'styled-components';
import Link from '../../Link';
import { ButtonStyledProps } from '../types';

export const ButtonStyled = styled(
  ({ color, width, ...buttonProps }: ButtonStyledProps) => (
    <button {...buttonProps} />
  )
)`
  width: ${({ width }) => width || '100%'};
  height: 40px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  transition: background 0.4s ease-in;

  ${({ color, theme, disabled }) =>
    !disabled
      ? css`
          background: ${color === 'primary'
            ? theme.backgrounds.primary
            : theme.backgrounds.secondary};
          color: ${color === 'primary'
            ? theme.colors.white
            : theme.colors.black};

          &:hover {
            background: ${color === 'primary'
              ? theme.backgrounds.primaryDark
              : theme.backgrounds.secondaryDark};
          }
        `
      : css`
          background: ${theme.backgrounds.secondary};
          color: ${theme.backgrounds.secondaryDark};
          cursor: default;
        `}

  a {
    color: inherit;
    &:hover {
      text-decoration: none;
    }
  }
`;

import styled, { css } from 'styled-components';
import Link from '../Link';
import { ActiveLinkProps } from './types';

export const NavLink = styled(({ isActive, ...linkProps }: ActiveLinkProps) => (
  <Link {...linkProps} />
))`
  font-size: 18px;
  padding: 8px 12px;
  /* border-radius: 30px 0 30px 0; */
  color: ${({ theme }) => theme.colors.black};

  transition: all 0.3s ease;

  &:hover {
    text-decoration: none;
  }

  ${({ isActive, theme }) =>
    isActive
      ? css`
          font-weight: bold;
          border-bottom: 3px solid ${theme.backgrounds.primaryDark};
        `
      : css`
          &:hover {
            border-bottom: 3px solid ${theme.backgrounds.primaryLight};
          }
        `}
`;

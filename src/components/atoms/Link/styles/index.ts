import styled, { css } from 'styled-components';

export const LinkStyled = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.link};
    transition: text-decoration 0.2s ease;

    &:hover {
      text-decoration: underline;
    }
  `}
`;

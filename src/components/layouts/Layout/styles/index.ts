import styled from 'styled-components';

export const LayoutTitle = styled.h1`
  margin-top: 0;
  padding: 10px;
  background: ${({ theme }) => theme.backgrounds.primary};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const NavItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

import styled from 'styled-components';

export const StyledInput = styled.input`
  height: 40px;
  width: 100%;
  padding: 6px 12px;
  min-width: 250px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.backgrounds.secondary};
  outline: none;

  font-size: 14px;
  
  transition: all 0.3s;

  &:focus {
    border: 1px solid ${({ theme }) => theme.backgrounds.primaryLight};
    box-shadow: 0 0 10px ${({ theme }) => theme.backgrounds.primaryLight};
  }
`;

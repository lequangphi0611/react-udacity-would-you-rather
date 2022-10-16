import styled from 'styled-components';

export const SpinnerStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1001;
`;

export const SpinnerMask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white}A2;
  z-index: 1000;
`;

export const SpinnerContent = styled.div`
  opacity: 0.6;
`;

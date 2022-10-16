import ProgressBar from '@ramonak/react-progress-bar';
import styled, { css } from 'styled-components';
import Card from '../Card';
import { CardContent } from '../Card/styles';
import { ResultCardProps } from './types';

export const AvartarWrapper = styled.div`
  width: 45%;
  height: 100%;
  min-width: 120px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuestionContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  border-left: 3px solid ${({ theme }) => theme.backgrounds.secondary};
  padding: 8px;
`;

export const QuestionCard = styled(Card)`
  ${CardContent} {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    padding: 10px 8px;
  }
`;

export const Option = styled.b``;

export const ResultCard = styled(({ voted, ...props }: ResultCardProps) => (
  <Card {...props} />
))`
  position: relative;

  ${({ voted, theme }) =>
    voted &&
    css`
      border-color: ${theme.backgrounds.primaryDark};
      background-color: ${theme.backgrounds.secondary};

      ${Option} {
        color: ${theme.backgrounds.primaryDark};
      }
    `}

  ${CardContent} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 8px;
  }
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
`;

export const ResultBadge = styled.div`
  width: 50px;
  height: 50px;
  padding: 12px;
  background-color: ${({ theme }) => theme.backgrounds.primaryLight};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 12px;
  top: 0;
  right: 0;
  transform: translate(25%, -60%);
`;

export const ProgressBarStyled = styled(ProgressBar)`
  .completed {
    height: 20px;
    width: ${({ completed }) => completed}%;
    background: ${({ bgColor }) => bgColor};
    transition: width 1s ease-in-out 0s;
    border-radius: inherit;
    display: flex;
    align-items: center;

    ${({ completed }) =>
      completed > 20 &&
      css`
        justify-content: flex-end;
      `}
  }
`;

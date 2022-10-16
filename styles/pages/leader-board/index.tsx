import styled from 'styled-components';
import { Card } from '../../../src/components/molecules';
import {
  CardContent,
  CardTitle,
} from '../../../src/components/molecules/Card/styles';

export const LeaderBoardContent = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const LeaderBoardCard = styled(Card)`
  width: 100%;

  ${CardContent} {
    display: flex;
    flex-direction: row;
  }
`;

export const Score = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
`;

export const LeaderBoardCardMiddleContent = styled.div`
  padding: 12px 20px;
  border-left: 3px solid ${({ theme }) => theme.backgrounds.secondary};
  border-right: 3px solid ${({ theme }) => theme.backgrounds.secondary};

  h3 {
    margin-bottom: 10px;
  }

  hr {
    margin: 3px 0;
    border: 1px solid ${({ theme }) => theme.backgrounds.secondary};
  }
`;

export const ScoreCard = styled(Card)`
  ${CardTitle} {
    padding: 8px;
  }

  ${CardContent} {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    font-weight: bold;
    font-size: 1.25em;
    color: ${({ theme }) => theme.colors.white};
  }
`;

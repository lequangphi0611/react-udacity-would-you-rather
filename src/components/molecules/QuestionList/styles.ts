import styled from 'styled-components';
import Card from '../Card';
import { CardContent } from '../Card/styles';

export const QuestionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AvartarWrapper = styled.div`
  width: 30%;
  padding: 8px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 3px solid ${({ theme }) => theme.backgrounds.secondary};
`;

export const QuestionContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
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

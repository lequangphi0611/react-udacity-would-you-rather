import styled from 'styled-components';
import { Button } from '../../../../src/components/atoms';
import { Card } from '../../../../src/components/molecules';

export const Separator = styled.h3`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${({ theme }) => theme.backgrounds.secondary};
  }

  &&:not(:empty)::before {
    margin-right: 0.25em;
  }

  &:not(:empty)::after {
    margin-left: 0.25em;
  }
`;

export const QuestionCard = styled(Card)`
  width: 500px;
  height: auto;
`;

export const SubtractButton = styled(Button)`
  border: none;
  background: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  padding: 0;
`;

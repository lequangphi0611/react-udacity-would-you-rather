import { map } from 'lodash';
import React, { FunctionComponent } from 'react';
import { Avatar, Button, Link } from '../../atoms';
import QuestionItem from '../QuestionItem';
import {
  AvartarWrapper,
  QuestionCard,
  QuestionContent,
  QuestionListContainer,
} from './styles';
import { QuestionListProps } from './types';

const QuestionList: FunctionComponent<QuestionListProps> = React.memo(
  ({ questions }) => {
    return (
      <QuestionListContainer>
        {map(questions, (ques) => (
          <QuestionItem item={ques} key={ques.id} />
        ))}
      </QuestionListContainer>
    );
  }
);

QuestionList.displayName = 'QuestionList';
export default QuestionList;

import ProgressBar from '@ramonak/react-progress-bar';
import _, { map, round } from 'lodash';
import React, { FunctionComponent } from 'react';
import { useTheme } from 'styled-components';
import { useUser } from '../../../hooks';
import {
  Avatar,
  Button,
  Link,
  Radio,
  RadioGroup,
  SubmitButton,
} from '../../atoms';
import {
  AvartarWrapper,
  Option,
  ProgressBarContainer,
  ProgressBarStyled,
  QuestionCard,
  QuestionContent,
  ResultBadge,
  ResultCard,
} from './styles';
import { ContentProps, QuestionItemProps } from './types';

const StateLessContent = React.memo(({ item }: ContentProps) => {
  return (
    <>
      <p>...{item.options.at(0)?.text}...</p>
      <Link href={`/questions/${item.id}`}>
        <Button>View Poll</Button>
      </Link>
    </>
  );
});
StateLessContent.displayName = 'StateLessContent';

const VotedContent = React.memo(({ item }: ContentProps) => {
  const totalVoted = _(item.options).map('votes').flatten().size();
  const theme = useTheme();

  const { user } = useUser();

  return (
    <>
      {map(item.options, (option, index) => {
        const completed = round((option.votes.length / totalVoted) * 100, 2);
        const isVoted = option.votes.some(({ id }) => id === user?.id);
        return (
          <ResultCard voted={isVoted} key={index}>
            {isVoted && <ResultBadge>Your Vote</ResultBadge>}
            <Option>Would you rather {option.text}</Option>
            <ProgressBarContainer>
              <ProgressBarStyled
                completed={completed}
                bgColor={theme.backgrounds.primary}
                completedClassName='completed'
              />
            </ProgressBarContainer>
            <b>
              {option.votes.length} out of {totalVoted} votes
            </b>
          </ResultCard>
        );
      })}
    </>
  );
});
VotedContent.displayName = 'VotedContent';

const VotableContent = React.memo(({ item }: ContentProps) => {
  return (
    <>
      <RadioGroup name='option'>
        {map(item.options, (option, index) => (
          <Radio key={index} text={option.text} value={index} />
        ))}
      </RadioGroup>
      <SubmitButton>Submit</SubmitButton>
    </>
  );
});
VotableContent.displayName = 'VotableContent';

const QuestionItem: FunctionComponent<QuestionItemProps> = React.memo(
  ({ item, state = 'stateless' }) => {
    return (
      <QuestionCard
        titleAlign='left'
        titleSize='16px;'
        title={
          state === 'voted'
            ? `Asked by ${item.author.name}`
            : `${item.author.name} ask:`
        }
        key={item.id}
      >
        <AvartarWrapper>
          <Avatar size='100px' imageSrc={item.author.avatarURL} />
        </AvartarWrapper>

        <QuestionContent>
          <h3>{state !== 'voted' ? 'Would you rather' : 'Result:'}</h3>
          {state === 'stateless' && <StateLessContent item={item} />}
          {state === 'votable' && <VotableContent item={item} />}
          {state === 'voted' && <VotedContent item={item} />}
        </QuestionContent>
      </QuestionCard>
    );
  }
);

QuestionItem.displayName = 'QuestionItem';
export default QuestionItem;

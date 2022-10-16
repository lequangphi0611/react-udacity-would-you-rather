import { QuestionItemResponse } from '../../../apis/types/QuestionsResponse';
import { CardProps } from '../Card/types';

export type QuestionItemState = 'stateless' | 'votable' | 'voted';

export type QuestionItemProps = {
  item: QuestionItemResponse;
  state?: QuestionItemState;
};

export type ContentProps = {
  item: QuestionItemResponse;
};

export type ResultCardProps = CardProps & {
  voted: boolean;
};

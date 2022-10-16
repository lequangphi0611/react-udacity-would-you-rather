import { UserDB } from '../../../mocks';

export interface QuestionOptionResponse {
  votes: UserDB[];
  text: string;
}

export interface QuestionItemResponse {
  id: string;
  author: UserDB;
  timestamp: number;
  options: QuestionOptionResponse[];
}

export default interface QuestionsResponse {
  unanswered: QuestionItemResponse[];
  answered: QuestionItemResponse[];
}

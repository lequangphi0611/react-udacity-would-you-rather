import { Axios } from 'axios';
import {
  CreateQuestionRequest,
  CreateQuestionResponse,
  QuestionsResponse,
  VoteQuestionRequest,
} from '../types';
import { QuestionItemResponse } from '../types/QuestionsResponse';

export default class QuestionApi {
  constructor(private axios: Axios) {}

  async getQuestions(): Promise<QuestionsResponse> {
    return this.axios.get('/questions');
  }

  async createQuestion(
    question: CreateQuestionRequest
  ): Promise<CreateQuestionResponse> {
    return this.axios.post('/questions', question);
  }

  async getQuestion(questionId: string): Promise<QuestionItemResponse> {
    return this.axios.get(`/questions/${questionId}`);
  }

  async voteQuestion({
    option,
    questionId,
  }: VoteQuestionRequest & {
    questionId: string;
  }): Promise<QuestionItemResponse> {
    return this.axios.post(`/questions/${questionId}/vote`, { option });
  }
}

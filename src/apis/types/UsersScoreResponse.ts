import { UserDB } from '../../../mocks';

export interface UserScore extends UserDB {
  totalAnsweredQuestions: number;
  totalCreatedQuestion: number;
}

export default interface UsersScoreResponse {
  users: UserScore[];
}

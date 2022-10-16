// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import _ from 'lodash';
import __, { map } from 'lodash';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  QuestionDB,
  questionsService,
  UsersDBResult,
  usersService,
} from '../../../mocks';
import {
  CreateQuestionResponse,
  ErrorResponse,
  CreateQuestionRequest,
  QuestionsResponse,
} from '../../../src/apis';
import { QuestionItemResponse } from '../../../src/apis/types/QuestionsResponse';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    ErrorResponse | CreateQuestionResponse | QuestionsResponse
  >
) {
  const authorization = req.headers.authorization;

  if (!authorization) {
    res.status(401).json({
      message: 'Unauthorized',
      detailMessage: 'Unauthorized',
      errorCode: 401,
    });
    return;
  }

  const user = await usersService.findByToken(authorization);

  if (!user) {
    res.status(401).json({
      message: 'Unauthorized',
      detailMessage: 'Unauthorized',
      errorCode: 401,
    });
    return;
  }

  if (req.method === 'GET') {
    const users = await usersService.loadUsers();
    const unanswered = _(await questionsService.getUnAnsweredQuestions(user.id))
      .map(mapQuestionToResponse(users))
      .orderBy('timestamp', 'desc')
      .value();
    const answered = _(await questionsService.getAnsweredQuestions(user.id))
      .map(mapQuestionToResponse(users))
      .orderBy('timestamp', 'desc')
      .value();
    res.status(201).json({ unanswered, answered });
    return;
  }

  if (req.method === 'POST') {
    const question = await questionsService.addQuestion(
      req.body as CreateQuestionRequest
    );
    res.status(201).json(question);
    return;
  }
}
function mapQuestionToResponse(
  users: UsersDBResult
): _.ListIterator<QuestionDB, QuestionItemResponse> {
  return (ques) => ({
    id: ques.id,
    author: users[ques.author],
    timestamp: ques.timestamp,
    options: map(ques.options, ({ text, votes }) => ({
      votes: map(votes, (userId) => users[userId]),
      text,
    })),
  });
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { map } from 'lodash';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  QuestionDB,
  QuestionDBOption,
  questionsService,
  UsersDBResult,
  usersService,
} from '../../../../../mocks';
import { ErrorResponse, VoteQuestionRequest } from '../../../../../src/apis';
import { QuestionItemResponse } from '../../../../../src/apis/types/QuestionsResponse';
import update from 'immutability-helper';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | QuestionItemResponse>
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

  if (req.method !== 'POST') {
    res.status(405).json({
      message: `Method ${req.method} not supported.`,
      detailMessage: `Method ${req.method} not supported.`,
      errorCode: 405,
    });
    return;
  }

  const id = req.query['id'];
  if (!id) {
    res.status(400).json({
      message: '[id] must be not null',
      detailMessage: '[id] must be not null',
      errorCode: 400,
    });
    return;
  }
  const question = await questionsService.getQuestion(id as string);

  if (!question) {
    res.status(404).json({
      message: 'The question not found',
      detailMessage: 'The question not found',
      errorCode: 400,
    });
    return;
  }

  const { option } = req.body as VoteQuestionRequest;

  const newQuestion = update(question, {
    options: {
      $apply(prevOptions: QuestionDBOption[]) {
        const newOptions = [...prevOptions];
        const op = newOptions[option];

        newOptions[option] = update(op, {
          votes: {
            $push: [user.id],
          },
        });
        return newOptions;
      },
    },
  });

  await questionsService.udpateQuestion(newQuestion);
  const users = await usersService.loadUsers();

  res.status(200).json(mapQuestionToResponse(users, newQuestion));
}

function mapQuestionToResponse(
  users: UsersDBResult,
  ques: QuestionDB
): QuestionItemResponse {
  return {
    id: ques.id,
    author: users[ques.author],
    timestamp: ques.timestamp,
    options: map(ques.options, ({ text, votes }) => ({
      votes: map(votes, (userId) => users[userId]),
      text,
    })),
  };
}

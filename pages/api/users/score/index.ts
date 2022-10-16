// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { orderBy } from 'lodash';
import type { NextApiRequest, NextApiResponse } from 'next';
import { usersService } from '../../../../mocks';
import { ErrorResponse, UsersScoreResponse } from '../../../../src/apis';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | UsersScoreResponse>
) {
  if (req.method !== 'GET') {
    return;
  }

  // Handle method GET
  const authorization = req.headers.authorization;
  if (
    !authorization ||
    !(await usersService.verifyAuthorizedToken(authorization))
  ) {
    res.status(401).json({
      message: 'Unauthorized',
      detailMessage: 'Unauthorized',
      errorCode: 401,
    });
    return;
  }

  const usersScore = orderBy(
    await usersService.calcScore(),
    (score) => score.totalAnsweredQuestions + score.totalCreatedQuestion,
    'desc'
  );
  res.status(200).json({ users: usersScore });
}

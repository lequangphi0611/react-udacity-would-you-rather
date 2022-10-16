// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import __ from 'lodash';
import type { NextApiRequest, NextApiResponse } from 'next';
import { UsersDBResult, usersService } from '../../../../mocks';
import { ErrorResponse, UserBaseInfoResponse } from '../../../../src/apis';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | UserBaseInfoResponse>
) {
  if (req.method !== 'GET') {
    return;
  }

  // Handle method GET
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
    res.status(404).json({
      message: 'User not found',
      detailMessage: 'User not found',
      errorCode: 404,
    });
    return;
  }

  res.status(200).json(user);
}

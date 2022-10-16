// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import get from 'lodash/get';
import type { NextApiRequest, NextApiResponse } from 'next';
import { usersService } from '../../../mocks';
import { LoginRequest, LoginResponse, ErrorResponse } from '../../../src/apis';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | LoginResponse>
) {
  if (req.method !== 'POST') {
    return;
  }

  // Handle method POST
  const { username } = req.body as LoginRequest;
  const user = await usersService.findUser(username);
  if (!user) {
    res.status(401).json({
      message: 'UnAuthorized',
      detailMessage: 'UnAuthorized',
      errorCode: 401,
    });
    return;
  }

  res.status(200).json({ token: user.token });
}

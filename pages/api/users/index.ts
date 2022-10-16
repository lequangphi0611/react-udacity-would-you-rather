// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import map from 'lodash/map';
import type { NextApiRequest, NextApiResponse } from 'next';
import { usersService } from '../../../mocks';
import { ErrorResponse, UserResponse } from '../../../src/apis';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | UserResponse[]>
) {
  if (req.method !== 'GET') {
    return;
  }

  // Handle method GET
  const users = await usersService.loadUsers();
  res.status(200).json(
    map(
      users,
      (user): UserResponse => ({
        avatarURL: user.avatarURL,
        id: user.id,
        name: user.name,
        token: user.token,
      })
    )
  );
}

import React from 'react';
import { useUser } from '../../../hooks';
import { Avatar } from '../../atoms';
import { UserContainer } from './styles';

const User = React.memo(() => {
  const { user } = useUser();
  if (!user) {
    return null;
  }
  return (
    <UserContainer>
      <b>{user.name}</b>
      <Avatar size='30px' imageSrc={user.avatarURL} />
    </UserContainer>
  );
});

User.displayName = 'User';
export default User;

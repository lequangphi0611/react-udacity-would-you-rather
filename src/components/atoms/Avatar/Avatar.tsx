import Image from 'next/image';
import React from 'react';
import { ImageStyled } from './styles';
import { AvatarProps } from './types';

const Avatar = React.memo<AvatarProps>(
  ({ imageSrc, size, className }) => {
    return (
      <ImageStyled size={size} className={className} imageSrc={imageSrc} />
    );
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;

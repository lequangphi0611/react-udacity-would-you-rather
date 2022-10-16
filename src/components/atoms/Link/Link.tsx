import React, { PropsWithChildren } from 'react';
import NextLink from 'next/link';
import { LinkStyled } from './styles';
import { LinkProps } from './types';

const Link = React.memo<LinkProps>(({ children, className, ...rest }) => {
  return (
    <NextLink {...rest} passHref>
      <LinkStyled className={className}>{children}</LinkStyled>
    </NextLink>
  );
});

Link.displayName = 'Link';

export default Link;

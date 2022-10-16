import { PropsWithChildren } from 'react';
import { LinkProps as NextLinkProps } from 'next/link';

export type LinkProps = PropsWithChildren<NextLinkProps & CommonProps>;

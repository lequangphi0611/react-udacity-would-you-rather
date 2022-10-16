import { PropsWithChildren } from 'react';
import { LinkProps } from '../Link';

export type ActiveLinkProps = LinkProps & {
    isActive: boolean;
}

export type NavItemProps = PropsWithChildren<
  CommonProps & {
    url: string;
  }
>;

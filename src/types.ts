import { NextComponentType, NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { PropsWithChildren } from 'react';

export type CustomAppPageType = AppProps<{ title?: string }> & {
  Component: NextComponentType<NextPageContext, any, any> & {
    getLayout: () => (
      props: PropsWithChildren<{ title: string }>
    ) => JSX.Element;

    authenticated?: boolean;
  };
};

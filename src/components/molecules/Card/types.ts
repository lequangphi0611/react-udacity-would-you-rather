import { PropsWithChildren } from 'react';

export type CardTitleProps = PropsWithChildren<{
  align?: React.CSSProperties['textAlign'];
  fontSize?: string;
  as?: never | undefined;
}>;

export type CardProps = PropsWithChildren<
  CommonProps & {
    title?: string;
    renderTitle?: (
      props: PropsWithChildren<{ className?: string }>
    ) => JSX.Element;
    titleAlign?: React.CSSProperties['textAlign'];
    titleSize?: string;
  }
>;

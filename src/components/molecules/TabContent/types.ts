import React from 'react';

export type TabContentContainerProps = React.PropsWithChildren<{
  visible: boolean;
}>;

export type TabContentProps = React.PropsWithChildren<{
  tabIndex: string;
}>;

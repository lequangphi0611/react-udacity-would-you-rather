import { PropsWithChildren } from 'react';

export type FieldItemProps = {
  fieldName: string;
  index: number;
  removeField: () => void;
  size: number;
};

export type FieldItemsConsumerProps = {
  children: (props: FieldItemProps) => React.ReactNode;
};

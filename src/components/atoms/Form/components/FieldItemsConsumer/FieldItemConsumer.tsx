import { map } from 'lodash';
import * as React from 'react';
import { useFieldArrayContext } from '../../../../../contexts';
import { composeNames } from '../../../../../utils';
import { FieldItemsConsumerProps } from './types';

const FieldItemsConsumer: React.FunctionComponent<FieldItemsConsumerProps> = ({
  children,
}) => {
  const { fields, name, remove } = useFieldArrayContext();
  return (
    <>
      {map(fields, ({ id }, index) => {
        return (
          <React.Fragment key={id}>
            {children({
              fieldName: composeNames(name, index),
              removeField() {
                remove(index);
              },
              index,
              size: fields.length,
            })}
          </React.Fragment>
        );
      })}
    </>
  );
};

FieldItemsConsumer.displayName = 'FieldItemsConsumer';
export default FieldItemsConsumer;

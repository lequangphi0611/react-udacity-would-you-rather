import { isNil, negate, toString } from 'lodash';

const composeNames = (
  name: string | number | undefined,
  ...names: (string | number | undefined)[]
): string => {
  if (!names || names.length === 0) {
    return toString(name);
  }

  return [name, ...names].filter(negate(isNil)).join('.');
};

export default composeNames;

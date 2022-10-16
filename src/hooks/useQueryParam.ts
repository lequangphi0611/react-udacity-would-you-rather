import { forEach } from 'lodash';
import { useRouter } from 'next/router';
import { encode } from 'querystring';
import { useCallback, useDebugValue, useMemo } from 'react';

const useQueryParam = (
  name: string
): [
  string | string[] | undefined,
  (val: string | string[] | undefined) => void
] => {
  const { query, pathname, push } = useRouter();

  const value = query[name];

  const encodeQuery = encode(query);
  const updateValue = useCallback(
    (newValue: string | string[] | undefined) => {
      const queryBuilder = new URLSearchParams(encodeQuery);

      if (!newValue) {
        queryBuilder.delete(name);
      } else if (typeof newValue === 'string') {
        queryBuilder.set(name, newValue);
      } else {
        queryBuilder.delete(name);
        forEach(newValue, (val) => queryBuilder.append(name, val));
      }

      push(`${pathname}?${queryBuilder.toString()}`);
    },
    [name, pathname, push, encodeQuery]
  );

  useDebugValue(`${name} = ${value}`);

  return [value, updateValue];
};

export default useQueryParam;

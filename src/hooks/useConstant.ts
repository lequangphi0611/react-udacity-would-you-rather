import { useDebugValue, useEffect, useRef, useState } from 'react';

const useConstant = <T extends unknown>(initial: T | (() => T)): T => {
  const [value, setValue] = useState(initial);

  useDebugValue(value);
  return value;
};

export default useConstant;

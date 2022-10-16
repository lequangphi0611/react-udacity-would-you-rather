import { useDebugValue } from 'react';
import { useQuery } from 'react-query';
import { useApiContext } from '../contexts';

const useQuestion = (questionId: string | undefined) => {
  const apiProvider = useApiContext();
  const queried = useQuery(['questions', questionId], ({ queryKey }) =>
    queryKey?.[1]
      ? apiProvider.getQuestionApi().getQuestion(queryKey?.[1])
      : null
  );

  useDebugValue(queried.data);
  return queried;
};

export default useQuestion;

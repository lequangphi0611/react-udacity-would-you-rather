import { AxiosError } from 'axios';
import { useDebugValue } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { ErrorResponse } from '../apis';
import { QuestionItemResponse } from '../apis/types/QuestionsResponse';
import { useApiContext } from '../contexts';

export type UseVoteQuestionOptions = {
  onError?: (err: ErrorResponse) => void;
};

const useQuestion = (questionId: string | undefined): UseQueryResult<QuestionItemResponse | null, AxiosError> => {
  const apiProvider = useApiContext();
  const queried = useQuery<QuestionItemResponse | null, AxiosError, QuestionItemResponse | null, (string | undefined)[]>(['questions', questionId], ({ queryKey }) =>
    queryKey?.[1]
      ? apiProvider.getQuestionApi().getQuestion(queryKey?.[1])
      : null
  );

  useDebugValue(queried.data);
  return queried;
};

export default useQuestion;

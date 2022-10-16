import { setCookie } from 'cookies-next';
import { invoke } from 'lodash';
import { useRef } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { VoteQuestionRequest } from '../apis';
import { useApiContext } from '../contexts';
import { actions as authenticateActions } from '../state/authenticate';

export type UseVoteQuestionOptions = {
  questionId: string | undefined;
  onSuccess?: () => void;
};

const useVoteQuestion = ({ questionId, onSuccess }: UseVoteQuestionOptions) => {
  const apiProvider = useApiContext();

  const { mutate, ...rest } = useMutation(
    ({ option }: VoteQuestionRequest) => {
      if (!questionId) {
        return Promise.reject('[questionId] must not be null.');
      }
      
      return apiProvider.getQuestionApi().voteQuestion({
        questionId,
        option,
      });
    },
    {
      onSuccess,
    }
  );
  return { voteQuestion: mutate, ...rest };
};

export default useVoteQuestion;

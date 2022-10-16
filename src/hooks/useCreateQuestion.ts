import { useMutation } from 'react-query';
import { CreateQuestionRequest, CreateQuestionResponse } from '../apis';
import { useApiContext } from '../contexts';
import useUser from './useUser';
import { v4 as uuid } from 'uuid';
import { map } from 'lodash';
import { useRef } from 'react';

type CreateQuestionParam = {
  options: string[];
};

type UseCreateQuestionOptions = {
  onSuccess?: (data: CreateQuestionResponse) => void;
};

const useCreateQuestion = (options: UseCreateQuestionOptions = {}) => {
  const apiProvider = useApiContext();

  const { user } = useUser();

  const author = user?.id;

  const createQuestion = ({ options }: CreateQuestionParam) =>
    apiProvider.getQuestionApi().createQuestion({
      author: author as string,
      id: uuid(),
      timestamp: new Date().getTime(),
      options: map(options, (option) => ({ votes: [], text: option })),
    });

  const { mutate, ...rest } = useMutation(createQuestion, {
    onSuccess: options.onSuccess,
  });
  return { createQuestion: mutate, ...rest };
};

export default useCreateQuestion;

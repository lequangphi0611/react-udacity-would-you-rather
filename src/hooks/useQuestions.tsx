import { useQuery } from 'react-query';
import { useApiContext } from '../contexts';

const useQuestions = () => {
  const apiProvider = useApiContext();
  const queried = useQuery('questions', () =>
    apiProvider.getQuestionApi().getQuestions()
  );

  return queried;
};

export default useQuestions;

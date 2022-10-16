import { useQuery } from 'react-query';
import { useApiContext } from '../contexts';

const useUserScore = () => {
  const apiProvider = useApiContext();
  const queried = useQuery('score', () => apiProvider.getUserApi().score());

  return queried;
};

export default useUserScore;

import { useQuery } from 'react-query';
import { useApiContext } from '../contexts';

const useUsers = () => {
  const apiProvider = useApiContext();
  const queried = useQuery('users', () => apiProvider.getUserApi().getUsers());
  
  return queried;
};

export default useUsers;

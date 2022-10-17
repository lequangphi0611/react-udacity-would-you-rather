import { getCookie } from 'cookies-next';
import { useCallback, useDebugValue, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useApiContext } from '../contexts';
import { actions as authenticateActions } from '../state/authenticate';
import { authenticateSelectors } from '../state/selectors';

const useUser = () => {
  const tokenState = useSelector(authenticateSelectors.selectToken);
  const userState = useSelector(authenticateSelectors.selectUser);
  const [isLoading, setLoading] = useState(!userState);

  const dispatch = useDispatch();

  const apiProvider = useApiContext();

  const { mutate } = useMutation(
    [tokenState],
    (token: string) => apiProvider.getUserApi().getBaseInfo(token),
    {
      onSuccess(data, variables) {
        dispatch(authenticateActions.setUser(data));
        dispatch(authenticateActions.login({ token: variables }));
      },
      onSettled() {
        setLoading(false);
      },
    }
  );

  // Get authenticate token from cookie
  const getToken = useCallback(
    () => tokenState || getCookie('token')?.valueOf(),
    [tokenState]
  );

  useEffect(() => {
    if (userState) {
      setLoading(false);
      return;
    }

    const token = getToken();
    if (!token) {
      setLoading(false);
      return;
    }

    mutate(token as string);
  }, [userState, mutate, getToken]);

  useDebugValue(userState?.name);

  return { user: userState, isLoading };
};

export default useUser;

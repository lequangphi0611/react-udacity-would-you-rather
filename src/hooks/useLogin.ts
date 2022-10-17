import { setCookie } from 'cookies-next';
import { invoke } from 'lodash';
import { useRef } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useApiContext } from '../contexts';
import { actions as authenticateActions } from '../state/authenticate';

export type UseLoginOptions = {
  onSuccess?: () => void;
};

const useLogin = () => {
  const apiProvider = useApiContext();

  const dispatch = useDispatch();

  const { mutate, ...rest } = useMutation(
    (req: { username: string; password: string }) =>
      apiProvider.getLoginApi().login(req),
    {
      onSuccess: (data) => {
        dispatch(authenticateActions.login(data));
        // set authenticate token from cookie
        setCookie('token', data.token);
      },
    }
  );
  return { login: mutate, ...rest };
};

export default useLogin;

import { deleteCookie } from 'cookies-next';
import { invoke } from 'lodash';
import { useCallback, useRef } from 'react';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useApiContext } from '../contexts';
import { actions as authenticateActions } from '../state/authenticate';

export type UseLogoutOptions = {
  onSuccess?: () => void;
};

const useLogout = () => {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(authenticateActions.logout());
    deleteCookie('token');
  }, [dispatch]);
};

export default useLogout;

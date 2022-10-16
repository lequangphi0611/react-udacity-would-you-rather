import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectAuthenticate = (state: RootState) => state.authenticate;

export const selectToken = createDraftSafeSelector(
  selectAuthenticate,
  (authenticate) => authenticate.token
);

export const selectUser = createDraftSafeSelector(
  selectAuthenticate,
  (authenticate) => authenticate.user
);

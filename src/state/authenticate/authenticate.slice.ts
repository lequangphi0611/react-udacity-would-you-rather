import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse, UserBaseInfoResponse } from '../../apis';

export interface User extends UserBaseInfoResponse {}

export interface AuthenticateState {
  token: string | null;
  user: User | null;
}

const initialState: AuthenticateState = {
  token: null,
  user: null,
};

const authenticateSlice = createSlice({
  name: 'authenticate',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginResponse>) => {
      state.token = action.payload.token;
    },

    logout: (state) => {
      state.token = null;
      state.user = null;
    },

    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

const reducer = authenticateSlice.reducer;
const actions = authenticateSlice.actions;
export { reducer, actions };

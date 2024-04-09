import {createSlice} from '@reduxjs/toolkit';
import {UserLoginProps} from '@/shared/types';
import {AuthorizationStatus} from '@/shared/config';
import {checkAuthAction, logoutAction} from './api';

type InitialStateProp = {
  user: UserLoginProps | null;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialStateProp = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkAuthAction.fulfilled, (state, {payload}) => {
      state.user = payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    });
    builder.addCase(checkAuthAction.pending, (state) => {
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.Unknown;
    });
    builder.addCase(checkAuthAction.rejected, (state) => {
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
    builder.addCase(logoutAction.pending, (state) => {
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
  }
});

export default clientSlice.reducer;

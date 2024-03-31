import {createSlice} from '@reduxjs/toolkit';
import {UserProps} from '@/shared/types';
import {AuthorizationStatus} from '@/shared/config';
import {checkAuthAction, logoutAction} from './index';

type InitialStateProp = {
  user: UserProps | null;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialStateProp = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const requireAuthorizationSlice = createSlice({
  name: 'requireAuthorizationSlice',
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

export default requireAuthorizationSlice.reducer;

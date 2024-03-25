import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserProps} from '../../types';
import {AuthorizationStatus} from '../../config';
import {checkAuthAction} from './index';

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
  reducers: {
    setRequireAuth: (state, {payload}: PayloadAction<UserProps>) => {
      state.user = payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    }
  },
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
  }
});

export const {setRequireAuth} = requireAuthorizationSlice.actions;
export default requireAuthorizationSlice.reducer;

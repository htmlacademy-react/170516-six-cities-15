import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserProps} from '../../types';
import {AuthorizationStatus} from '../../config';
import {checkAuthAction} from './index';

type initialStateProp = {
  user: UserProps | null;
  authorizationStatus: AuthorizationStatus;
}

const initialState: initialStateProp = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const requireAuthorizationSlice = createSlice({
  name: 'utils/requireAuthorization',
  initialState,
  reducers: {
    setRequireAuth: (state, {payload}: PayloadAction<UserProps>) => {
      state.user = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(checkAuthAction.fulfilled, (state, action) => {
      state.user = action.payload;
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

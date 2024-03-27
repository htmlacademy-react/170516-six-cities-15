import {createSelector} from '@reduxjs/toolkit';
import {TypeState} from '../../types';
import {AuthorizationStatus} from '../../config';

const getAuthStatus = (state: TypeState): AuthorizationStatus => (
  state.client.authorizationStatus
);

export const getAuthCheckedStatus = createSelector(
  getAuthStatus,
  (authStatus: AuthorizationStatus) => (
    authStatus === AuthorizationStatus.Auth
  )
);

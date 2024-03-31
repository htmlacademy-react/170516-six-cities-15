import {createSelector} from '@reduxjs/toolkit';
import {TypeState} from '@/shared/types';
import {AuthorizationStatus} from '@/shared/config';

const getAuthStatus = (state: TypeState): AuthorizationStatus => (
  state.client.authorizationStatus
);

export const getAuthCheckedStatus = createSelector(
  getAuthStatus,
  (authStatus: AuthorizationStatus) => (
    authStatus === AuthorizationStatus.Auth
  )
);

import {combineReducers} from '@reduxjs/toolkit';
import {clientSlice} from '@/shared/api';
import {offersSlice, offerSlice} from '@/pages';

export const rootReducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [clientSlice.name]: clientSlice.reducer,
  [offerSlice.name]: offerSlice.reducer,
});

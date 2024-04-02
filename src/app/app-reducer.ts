import {combineReducers} from '@reduxjs/toolkit';
//TODO: Проверить пути
import {clientSlice} from '@/shared/api';
import {citySlice} from '@/entities/locations/model';
import {offersSlice} from '@/pages/main/model';
import {offerSlice} from '@/pages/offer/model';

export const rootReducer = combineReducers({
  [citySlice.name]: citySlice.reducer,
  [offersSlice.name]: offersSlice.reducer,
  [clientSlice.name]: clientSlice.reducer,
  [offerSlice.name]: offerSlice.reducer,
});

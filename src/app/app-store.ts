import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {redirect} from '@/shared/utils';
import {createAPI, requireAuthorizationSlice} from '@/shared/api';
import {AppDispatch, State} from '@/shared/types';
//TODO: Не верный импорты modal.ts

import {currentCitySlice} from '@/entities/locations/model';
import {offersSlice} from '@/pages/main/model';
import {currentOfferSlice} from '@/pages/offer/model';

export const api = createAPI();

export const appStore = configureStore({
  reducer: {
    currentCity: currentCitySlice.reducer,
    offers: offersSlice.reducer,
    client: requireAuthorizationSlice.reducer,
    currentOffers: currentOfferSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }).concat(redirect)
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

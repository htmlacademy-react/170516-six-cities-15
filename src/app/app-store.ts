import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {createAPI, redirect, requireAuthorizationSlice} from '../shared/utils';
import {currentCitySlice} from '../entities/locations/model';
import {offersSlice} from '../pages/main/model';
import {currentOfferSlice} from '../pages/offer/model';
import {favoriteSlice} from "../pages/favorites/model";

export const api = createAPI();

export const appStore = configureStore({
  reducer: {
    currentCity: currentCitySlice.reducer,
    offers: offersSlice.reducer,
    client: requireAuthorizationSlice.reducer,
    currentOffers: currentOfferSlice.reducer,
    favorite: favoriteSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }).concat(redirect)
});

//TODO: Вынести в типы
export type State = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

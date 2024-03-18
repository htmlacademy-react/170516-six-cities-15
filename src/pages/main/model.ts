import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosInstance} from "axios";
import {AppDispatch, State} from "../../app/app-store";
import {PreviewCardProps} from "../../shared/types";

export const setOffersDataLoadingStatus = createAction<boolean>('main/setOffersDataLoadingStatus');
export const loadOffers = createAction<PreviewCardProps[]>('main/loadOffers');

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'main/fetchOffersAction',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get('/offers');
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {PlacesProps} from './ui/places/type';
import {addOffers} from './model';

type ExtraType = {
  extra: AxiosInstance;
};

export const fetchOffersAction = createAsyncThunk<
  PlacesProps[],
  void,
  ExtraType
>('pages/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<PlacesProps[]>('/offers');
  dispatch(addOffers(data));
  return data;
});



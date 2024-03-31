import {createAsyncThunk} from '@reduxjs/toolkit';
import {ExtraType, PreviewOfferProps} from '../../shared/types';

export const fetchOffersAction = createAsyncThunk<
  PreviewOfferProps[],
  void,
  ExtraType
>('pages/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<PreviewOfferProps[]>('/offers');
  return data;
});



import {createAsyncThunk} from "@reduxjs/toolkit";
import {ExtraType, PreviewOfferProps} from "@/shared/types";

export const fetchFavoriteAction = createAsyncThunk<PreviewOfferProps[], undefined, ExtraType>(
  'favorite/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PreviewOfferProps[]>('/favorite');
    return data;
  },
);

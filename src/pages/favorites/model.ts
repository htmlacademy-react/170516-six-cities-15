import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ExtraType, PreviewCardProps, TypeState} from '../../shared/types';
import {Status} from '../../shared/config';
import {postFavoriteStatusAction} from '../../shared/api';

type InitialState = {
  list: PreviewCardProps[];
  status: Status | null;
}

const initialState:InitialState = {
  list: [],
  status: null
};

export const fetchFavoriteAction = createAsyncThunk<PreviewCardProps[], undefined, ExtraType>(
  'favorite/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<PreviewCardProps[]>('/favorite');
    return data;
  },
);

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFavoriteAction.pending, (state) => {
      state.status = Status.Loading;
    });
    builder.addCase(fetchFavoriteAction.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(postFavoriteStatusAction.fulfilled, (state, action) => {
      const {id, isFavorite} = action.payload;

      state.list = state.list.map((offer) => {
        if (offer.id === id) {
          return {
            ...offer,
            isFavorite
          };
        }

        return offer;
      });
    });
  }
});

export const getFavoritesOffers = (state: TypeState): PreviewCardProps[] => state.favorite.list;

export default favoriteSlice.reducer;

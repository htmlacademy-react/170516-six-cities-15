import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ExtraType, PreviewCardProps, TypeState} from "../../shared/types";
import {Status} from "../../shared/config";

type InitialState = {
  list: PreviewCardProps[],
  status: Status | null
}

const initialState:InitialState = {
  list: [],
  status: null
}

export const fetchFavoriteAction = createAsyncThunk<PreviewCardProps[], undefined, ExtraType>(
  `favorite/fetchOffers`,
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
    builder
      .addCase(fetchFavoriteAction.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(fetchFavoriteAction.fulfilled, (state, action) => {
        state.list = action.payload;
      })
  }
});

export const getFavoritesOffers = (state: TypeState): PreviewCardProps[] => state.favorite.list;

export default favoriteSlice.reducer;

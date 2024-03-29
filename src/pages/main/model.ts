import {createSlice} from '@reduxjs/toolkit';
import {fetchOffersAction} from './api';
import {Status} from '../../shared/config';
import {PreviewCardProps} from '../../shared/types';
import {postFavoriteStatusAction} from "../../shared/api";

type InitialStateProps = {
  offerList: PreviewCardProps[];
  status: null | string;
};

const initialState: InitialStateProps = {
  offerList: [],
  status: null,
};

export const offersSlice = createSlice({
  name: 'offersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOffersAction.fulfilled, (state, {payload}) => {
      state.status = Status.Resolved;
      state.offerList = payload;
    });
    builder.addCase(fetchOffersAction.pending, (state) => {
      state.status = Status.Loading;
    });
    builder.addCase(postFavoriteStatusAction.fulfilled, (state, action) => {
      const {id, isFavorite} = action.payload;

      state.offerList = state.offerList.map((offer) => {
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

export default offersSlice.reducer;

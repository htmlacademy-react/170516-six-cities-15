import {createSlice} from '@reduxjs/toolkit';
import {OfferProp} from './type';
import {fetchCurrentOfferAction, fetchNearbyAction} from './api';
import {Status} from '../../shared/config';
import {PreviewCardProps} from '../../shared/types';

type InitialStateProps = {
  statusOffer: null | Status;
  info: null | OfferProp;
  nearPlaces: PreviewCardProps[];
}

const initialState: InitialStateProps = {
  statusOffer: null,
  info: null,
  nearPlaces: [],
};

//TODO: как написать без reducers??
export const currentOfferSlice = createSlice({
  name: 'currentOfferSlice',
  initialState,
  reducers: {
    getCurrentOffer: (state, {payload}) => {
      state.info = payload as [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentOfferAction.fulfilled, (state, {payload}) => {
      state.statusOffer = Status.Resolved;
      state.info = payload;
    });
    builder.addCase(fetchCurrentOfferAction.pending, (state) => {
      state.statusOffer = Status.Loading;
    });
    builder.addCase(fetchNearbyAction.fulfilled, (state, {payload}) => {
      state.nearPlaces = payload;
    });
  }
});

export default currentOfferSlice.reducer;

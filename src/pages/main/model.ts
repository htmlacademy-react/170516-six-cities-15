import {createSlice} from '@reduxjs/toolkit';
import {fetchOffersAction} from './api';
import {Status} from '../../shared/config';
import {PreviewCardProps} from '../../shared/types';

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
  reducers: {
    addOffers: (state: InitialStateProps, {payload}) => {
      state.offerList = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOffersAction.fulfilled, (state) => {
      state.status = Status.Resolved;
    });
    builder.addCase(fetchOffersAction.pending, (state) => {
      state.status = Status.Loading;
    });
  }
});

export const {addOffers} = offersSlice.actions;
export default offersSlice.reducer;

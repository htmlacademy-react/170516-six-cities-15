import {createSlice} from '@reduxjs/toolkit';
import {Status} from '@/shared/config';
import {PreviewOfferProps} from '@/shared/types';
import {fetchFavoriteAction} from '@/shared/api';
import {postFavoriteStatusAction} from '@/feature/bookmark/modal';
import {fetchOffersAction} from '../api';

type InitialStateProps = {
  list: PreviewOfferProps[];
  status: null | string;
  favorites: PreviewOfferProps[];
};

const initialState: InitialStateProps = {
  list: [],
  status: null,
  favorites: [],
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOffersAction.fulfilled, (state, {payload}) => {
      state.status = Status.Resolved;
      state.list = payload;
    });
    builder.addCase(fetchOffersAction.pending, (state) => {
      state.status = Status.Loading;
    });
    builder.addCase(fetchFavoriteAction.fulfilled, (state, action) => {
      state.favorites = action.payload;
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

      if (isFavorite) {
        state.favorites.push(action.payload);
      } else {
        state.favorites = state.favorites.filter((item) => item.id !== id);
      }
    });
  }
});

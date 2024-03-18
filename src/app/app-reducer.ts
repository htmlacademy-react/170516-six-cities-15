import {createReducer} from '@reduxjs/toolkit';
import {cities} from '../shared/mock';
import {NameCitiesProps, PreviewCardProps} from '../shared/types';
import {AuthorizationStatus} from "../shared/config";

//TODO: не нравятся пути
import {setCurrentCity} from '../entities/locations/model';
import {loadOffers, setOffersDataLoadingStatus} from "../pages/main/model";

type InitialStateProp = {
  currentCity: NameCitiesProps;
  offers: PreviewCardProps[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
}

const initialState: InitialStateProp = {
  currentCity: cities[0].name,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
};

export const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
});

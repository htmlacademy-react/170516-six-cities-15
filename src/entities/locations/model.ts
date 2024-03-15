import {createAction} from '@reduxjs/toolkit';
import {NameCitiesProps} from '../../shared/types';

//TODO: createSlice
export const setCurrentCity = createAction('locations', (currentCityName: NameCitiesProps) => ({
  payload: currentCityName
}));

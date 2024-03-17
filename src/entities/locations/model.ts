import {createAction} from '@reduxjs/toolkit';
import {NameCitiesProps} from '../../shared/types';

//TODO: createSlice
export const setCurrentCity = createAction('entities/locations', (currentCityName: NameCitiesProps) => ({
  payload: currentCityName
}));

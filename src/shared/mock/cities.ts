import {LocationProps, NameCitiesProps} from '../types';

type CitiesProps = {
  name: NameCitiesProps;
  location: LocationProps;
}

export const cities: CitiesProps[] = [
  {
    name: 'Paris',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 8,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 8,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 8,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 8,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 8,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 52.379189,
      longitude: 4.899431,
      zoom: 8,
    },
  },
];

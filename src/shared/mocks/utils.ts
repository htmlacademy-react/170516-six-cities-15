import {datatype, image, internet, lorem, name, random} from 'faker';
import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {OfferProp, TypeState, UserLoginProps, CommentsProps} from '@/shared/types';
import {AuthorizationStatus, CityName} from '@/shared/config';
import {createAPI} from '@/shared/api';

const goods = Array.from({length: Math.floor(Math.random() * 6) + 1}, () => lorem.word());

const cities = Object.values(CityName);
const randomCity = cities[Math.floor(Math.random() * cities.length)];

export const DEFAULT_STATE = {
  offers: {
    list: [],
    status: null,
    favorites: [],
  },
  client: {
    user: null,
    authorizationStatus: AuthorizationStatus.Unknown,
  },
  offer: {
    status: null,
    statusComment: null,
    info: null,
    nearPlaces: [],
    comments: []
  }
};

export type AppThunkDispatch = ThunkDispatch<TypeState, ReturnType<typeof createAPI>, Action>;
export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const makeFakeCity = ():OfferProp['city'] => ({
  name: randomCity,
  location: {
    latitude: datatype.number(),
    longitude: datatype.number(),
    zoom: datatype.number({min: 10, max: 15}),
  },
});

export const makeFakeOffer = ():OfferProp => ({
  id: datatype.uuid(),
  title: lorem.words(),
  type: random.arrayElement(['apartment', 'room', 'house', 'hotel']),
  price: datatype.number(),
  city: makeFakeCity(),
  location: {
    latitude: datatype.number(),
    longitude: datatype.number(),
    zoom: datatype.number({min: 10, max: 15}),
  },
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  rating: datatype.number({min: 1, max: 5}),
  description: lorem.paragraph(),
  bedrooms: datatype.number({min: 1, max: 5}),
  goods: goods,
  host: {
    name: name.findName(),
    avatarUrl: image.imageUrl(),
    isPro: datatype.boolean(),
  },
  images: [image.imageUrl(), image.imageUrl(), image.imageUrl()],
  maxAdults: datatype.number({min: 1, max: 10}),
  previewImage: image.imageUrl(),
});

export const makeFakeUser = ():UserLoginProps => ({
  email: internet.email(),
  token: datatype.string(),
  name: name.findName(),
  avatarUrl: image.imageUrl(),
  isPro: datatype.boolean(),
});

export const makeFakeComment = ():CommentsProps => ({
  id: datatype.uuid(),
  date: datatype.datetime().toJSON(),
  user: makeFakeUser(),
  comment: lorem.paragraph(),
  rating: datatype.number({min: 1, max: 5}),
});

export const makeFakeStore = (initialState?: Partial<TypeState>) => ({
  ...DEFAULT_STATE,
  ...(initialState ?? {}),
});

import {AxiosInstance} from 'axios';
import {appStore} from '../../app/app-store';
import {CityName} from '../config';

type TypeAppDispatch = typeof appStore.dispatch;
export type TypeState = ReturnType<typeof appStore.getState>;

export type ExtraType = {
  extra: AxiosInstance;
};

export type PromiseProps = {
  dispatch: TypeAppDispatch;
  state: TypeState;
  extra: AxiosInstance;
}

export type LocationProps = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type PreviewCardProps = {
  id: string;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  price: number;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  className?: string;
  widthImg?: number;
  heightImg?: number;
}

export type PreviewOfferProps = PreviewCardProps & {
  city: {
    name: CityName;
    location: LocationProps;
  };
  location: LocationProps;
  isFavorite: boolean;
}

export type UserProps= {
  avatarUrl: string;
  email: string;
  isPro: boolean;
  name: string;
  token: string;
};

export type OfferProp = PreviewOfferProps & {
  bedrooms: number;
  description: string;
  host: UserProps;
  images: string[];
  maxAdults: number;
  goods: string[];
}

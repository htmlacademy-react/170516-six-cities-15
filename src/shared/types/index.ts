import {AxiosInstance} from 'axios';
import {appStore} from '../../app/app-store';

type TypeState = ReturnType<typeof appStore.getState>;
type TypeAppDispatch = typeof appStore.dispatch;

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

export type NameCitiesProps = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type PreviewCardProps = {
  id: string;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  price: number;
  city?: {
    name: NameCitiesProps;
    location: LocationProps;
  };
  location?: LocationProps;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  className?: string;
  widthImg?: number;
  heightImg?: number;
}

export type UserProps= {
  avatarUrl: string;
  email: string;
  isPro: boolean;
  name: string;
  token: string;
};

import {PreviewCardProps, UserProps} from '../../shared/types';

export type OfferProp = PreviewCardProps & {
  bedrooms: number;
  description: string;
  host: UserProps;
  images: string[];
  maxAdults: number;
  goods: string[];
}

export type CommentsProps = {
  id: string;
  date: string;
  user: UserProps;
  comment: string;
  rating: number;
}

import {PreviewOfferProps} from '@/shared/types';

export type PlacesProps = {
  numberPlacesToStay: number;
  nameCity: string | null;
  onListItemHover?: (id: string) => void;
  offers: PreviewOfferProps[];
  isAuth: boolean;
};

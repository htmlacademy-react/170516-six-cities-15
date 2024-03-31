import {PreviewOfferProps} from '../../../../shared/types';
import {CityName} from '../../../../shared/config';

export type PlacesProps = {
  numberPlacesToStay: number;
  nameCity: CityName;
  onListItemHover?: (id: string) => void;
  offers: PreviewOfferProps[];
  isAuth: boolean;
};

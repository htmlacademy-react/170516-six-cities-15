import {PreviewCardProps} from '../../../../shared/types';
import {CityName} from "../../../../shared/config";

export type PlacesProps = {
  numberPlacesToStay: number;
  nameCity: CityName;
  onListItemHover?: (id: string) => void;
  offers: PreviewCardProps[];
};

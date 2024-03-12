import {PreviewCardProps} from '../../shared/types';

export type PlacesProps = {
  countCities: number;
  nameCity: string;
  onListItemHover?: (id: string) => void;
  listCities: PreviewCardProps[];
};

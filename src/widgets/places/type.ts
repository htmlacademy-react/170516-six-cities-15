import {PreviewCardProps} from '../../shared/types';

export type PlacesProps = {
  countCities: number;
  nameCity: string;
  onListItemHover?: (title: string) => void;
  listCities: PreviewCardProps[];
};

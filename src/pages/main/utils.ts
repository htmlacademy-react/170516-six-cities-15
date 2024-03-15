import {PreviewCardProps} from '../../shared/types';

export enum SortingOptions {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRating = 'Top rated first'
}

//TODO: На сколько правильно типизировать enum таким образом?
export type SortingOptionsValuesType = `${SortingOptions}`;

export const sortByType = (listCities: PreviewCardProps[], type: string) => {
  switch (type) {
    case SortingOptions.TopRating:
      return listCities.toSorted((itemA, itemB) => itemB.rating - itemA.rating);
      break;
    case SortingOptions.LowToHigh:
      return listCities.toSorted((itemA, itemB) => itemA.price - itemB.price);
      break;
    case SortingOptions.HighToLow:
      return listCities.toSorted((itemA, itemB) => itemB.price - itemA.price);
      break;
    default:
      return listCities.slice();
  }
};

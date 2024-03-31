import {PreviewOfferProps} from '@/shared/types';

export const getFavoritesByCity = (favorites: PreviewOfferProps[]) => (
  favorites.reduce<{[key: string]: PreviewOfferProps[]}>((acc, curr) => {
    const city = curr.city.name;

    if(!(city in acc)) {
      acc[city] = [];
    }

    acc[city].push(curr);
    return acc;
  }, {})
);

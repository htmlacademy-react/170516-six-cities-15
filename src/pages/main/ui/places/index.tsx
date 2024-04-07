import {FC, useState} from 'react';
import {VisuallyHidden} from '@/shared/utils';
import {PlaceCard} from '@/entities';
import {Bookmark} from '@/feature';
import {SortingOptions, sortByType, SortingOptionsValuesType} from '@/pages/main/utils';
import {PlacesProps} from './type';
import {Sorting} from '../sorting';

export const Places:FC<PlacesProps> = ({numberPlacesToStay, nameCity, onListItemHover, offers, isAuth}) => {
  const [activeSorting, setActiveSorting] = useState<SortingOptionsValuesType>(SortingOptions.Popular);
  const sortedPlaceCard = sortByType(offers, activeSorting);
  const textPlacesToStay = numberPlacesToStay === 1 ? 'place' : 'places';

  return (
    <section className="cities__places places">
      <VisuallyHidden tagName="h2">Places</VisuallyHidden>
      <b className="places__found">{numberPlacesToStay} {textPlacesToStay} to stay in {nameCity}</b>
      <Sorting activeOptionSorting={activeSorting} onSortingOptionClick={setActiveSorting}/>
      <div className="cities__places-list places__list tabs__content">
        {sortedPlaceCard.map(({id, title, previewImage, type, price, rating, isPremium, isFavorite}) => (
          <PlaceCard
            id={id}
            key={id}
            title={title}
            previewImage={previewImage}
            className="cities"
            type={type}
            price={price}
            rating={rating}
            isPremium={isPremium}
            onListItemHover={onListItemHover}
            btnBookmark={
              <Bookmark className='place-card' isFavorite={isFavorite} offerId={id} isAuth={isAuth} />
            }
          />
        ))}
      </div>
    </section>
  );
};

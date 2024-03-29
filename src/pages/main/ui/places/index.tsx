import {FC, useState} from 'react';
import {PlacesProps} from './type';
import {sortByType, SortingOptions, SortingOptionsValuesType} from '../../utils';
import {Sorting} from '../sorting';
import {VisuallyHidden} from '../../../../shared/utils';
import {PlaceCard} from '../../../../entities';
import {Bookmark} from "../../../../feature";

export const Places:FC<PlacesProps> = ({numberPlacesToStay, nameCity, onListItemHover, offers, isAuth}) => {
  const [activeSorting, setActiveSorting] = useState<SortingOptionsValuesType>(SortingOptions.Popular);
  const sortedPlaceCard = sortByType(offers, activeSorting);

  return (
    <section className="cities__places places">
      <VisuallyHidden tagName="h2">Places</VisuallyHidden>
      <b className="places__found">{numberPlacesToStay} places to stay in {nameCity}</b>
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
            isFavorite={isFavorite}
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

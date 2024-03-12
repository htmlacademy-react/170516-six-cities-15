import {FC, useState} from 'react';
import {PlacesProps} from './type';
import {VisuallyHidden} from '../../shared/utils';
import {PlaceCard} from '../../entities';

export const Places:FC<PlacesProps> = ({countCities, nameCity, onListItemHover, listCities}) => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen((prevValue) => !prevValue);

  return (
    <section className="cities__places places">
      <VisuallyHidden tagName="h2">Places</VisuallyHidden>
      <b className="places__found">{countCities} places to stay in {nameCity}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0} onClick={toggleDropdown}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use href="#icon-arrow-select"></use>
          </svg>
        </span>
        {open && (
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        )}
      </form>
      <div className="cities__places-list places__list tabs__content">
        {listCities.map(({id, title, previewImage, type, price, rating, isPremium, isFavorite}) => (
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
          />
        ))}
      </div>
    </section>
  );
};

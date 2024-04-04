import classNames from 'classnames';
import {memo} from 'react';
import {Link} from 'react-router-dom';
import {useAppSelector} from '@/app/app-store';
import {Path} from '@/shared/config';
import {VisuallyHidden} from '@/shared/utils';
import {PreviewOfferProps, TypeState} from '@/shared/types';
import {PlaceCard} from '@/entities';
import {Bookmark} from '@/feature';
import {getFavoritesByCity} from './utils';

export const Favorites = memo(() => {
  const favorites = useAppSelector((state: TypeState): PreviewOfferProps[] => state.offers.favorites);
  const favoritesByCity = getFavoritesByCity(favorites);
  const hasEmpty = !favorites.length;
  const emptyClass = classNames({
    'page__main--favorites-empty': hasEmpty
  });

  if (hasEmpty) {
    return (
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <VisuallyHidden>Favorites (empty)</VisuallyHidden>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className={`page__main page__main--favorites ${emptyClass}`}>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(favoritesByCity).map(([city, groupedFavorites]) => (
              <li className="favorites__locations-items" key={city}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to={`${Path.Main}?location=${city}`}>
                      <span>{city}</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">
                  {groupedFavorites.map(({id, title, previewImage, type, price, rating, isPremium, isFavorite}) => (
                    <PlaceCard
                      id={id}
                      key={id}
                      title={title}
                      previewImage={previewImage}
                      className="favorites"
                      type={type}
                      price={price}
                      rating={rating}
                      isPremium={isPremium}
                      widthImg={150}
                      heightImg={110}
                      btnBookmark={
                        <Bookmark className='place-card' isFavorite={isFavorite} offerId={id} isAuth />
                      }
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
});

Favorites.displayName = 'Favorites';

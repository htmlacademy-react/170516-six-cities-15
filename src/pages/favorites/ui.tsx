import {memo} from 'react';
import {Link} from 'react-router-dom';
import {useAppSelector} from '@/app/app-store';
import {Path} from '@/shared/config';
import {PreviewOfferProps, TypeState} from '@/shared/types';
import {PlaceCard} from '@/entities';
import {Bookmark} from '@/feature';
import {getFavoritesByCity} from './utils';

export const Favorites = memo(() => {
  const favorites = useAppSelector((state: TypeState): PreviewOfferProps[] => state.offers.favorites);
  const favoritesByCity = getFavoritesByCity(favorites);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(favoritesByCity).map(([city, groupedFavorites]) => (
              <li className="favorites__locations-items" key={city}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to={Path.Main}>
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

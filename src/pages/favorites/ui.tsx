import {memo, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Path} from "../../shared/config";
import {PreviewCardProps} from "../../shared/types";
import {PlaceCard} from '../../entities';
import {useAppDispatch, useAppSelector} from "../../app/app-store";
import {fetchFavoriteAction, getFavoritesOffers} from "./model";

function getFavoritesByCity(favorites: PreviewCardProps[]){
  return favorites.reduce<{[key: string]: PreviewCardProps[]}>((acc, curr) => {
    const city = curr.city.name;

    if(!(city in acc)) {
      acc[city] = [];
    }

    acc[city].push(curr);
    return acc;
  }, {});
}

export const Favorites = memo(() => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavoritesOffers);
  const favoritesByCity = getFavoritesByCity(favorites);

  useEffect(() => {
    dispatch(fetchFavoriteAction());
  }, [dispatch])
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(favoritesByCity).map(([city, groupedFavorites]) => (
              <li className="favorites__locations-items">
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
                      isFavorite={isFavorite}
                      widthImg={150}
                      heightImg={110}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
});

Favorites.displayName = 'Favorites';

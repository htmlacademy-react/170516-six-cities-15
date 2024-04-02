import {memo} from 'react';
import {listCities} from '../../shared/mock';
import {PlaceCard} from '../../entities';

export const Favorites = memo(() => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {listCities.map(({id, title, previewImage, type, price, rating, isPremium, isFavorite}) => (
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
        </ul>
      </section>
    </div>
  </main>
));

Favorites.displayName = 'Favorites';

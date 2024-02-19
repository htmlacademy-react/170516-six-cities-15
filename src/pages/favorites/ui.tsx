import {PlaceCard} from '../../entities';
import {Footer, Header} from '../../widgets';

export const Favorites = () => (
  <>
    <Header/>
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
                <PlaceCard
                  id={4}
                  title="Nice, cozy, warm big bed apartment"
                  type="Apartment"
                  className="favorites"
                  price={180}
                  isFavorite={false}
                  isPremium
                  rating={3}
                  previewImage="img/apartment-small-03.jpg"
                />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
    <Footer/>
  </>
);

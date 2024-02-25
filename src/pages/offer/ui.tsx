import {PlaceCard, Reviews} from '../../entities';
import {Bookmark, Rating, User} from '../../shared';

export const Offer = () => {
  const photoStudio = ['room', 'apartment-01', 'apartment-02', 'apartment-03', 'studio-01', 'amsterdam'];
  const goods = ['Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'];

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {photoStudio.map((text) => (
              <div className="offer__image-wrapper" key={text}>
                <img className="offer__image" src={`img/${text}.jpg`} alt="Photo studio"/>
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <div className="offer__mark">
              <span>Premium</span>
            </div>
            <div className="offer__name-wrapper">
              <h1 className="offer__name">Beautiful &amp; luxurious studio at great location</h1>
              <Bookmark className="offer" />
            </div>
            <Rating
              rating={3}
              className="offer"
            />
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                Apartment
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                3 Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max 4 adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;120</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {goods.map((text) => (
                  <li className="offer__inside-item" key={text}>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <User
                name="Angelina"
                avatarUrl="img/avatar-angelina.jpg"
                isPro
                className="offer"
              />
              <div className="offer__description">
                <p className="offer__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The
                  building is green and from 18th century.
                </p>
                <p className="offer__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the
                  bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <Reviews className="offer__reviews"/>
          </div>
        </div>
        <section className="offer__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <PlaceCard
              id={2}
              title="Beautiful & luxurious apartment at great location"
              previewImage="img/apartment-01.jpg"
              className="near-places"
              type="Room"
              price={120}
              rating={4}
              isPremium
              isFavorite
            />
          </div>
        </section>
      </div>
    </main>
  );
};

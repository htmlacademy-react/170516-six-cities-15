import {listCities} from '../../shared/mock';
import {Bookmark, Map, Rating, User} from '../../shared';
import {PlaceCard, Reviews} from '../../entities';

export const Offer = () => {
  const photoStudio = ['room', 'apartment-01', 'apartment-02', 'apartment-03', 'studio-01', 'amsterdam'];
  const goods = ['Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'];
  const {title, type, price, rating, isPremium, isFavorite} = listCities[0];

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
            {isPremium && (
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{title}</h1>
              <Bookmark className="offer" isFavorite={isFavorite}/>
            </div>
            <Rating
              rating={rating}
              className="offer"
            />
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {/*TODO: Сделай с большой буквой*/}
                {type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                3 Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max 4 adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
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
        <Map className="offer__map" location={listCities[0].location} points={listCities} selectedPoint={listCities[0].id}/>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {listCities.map((elem) => (
              <PlaceCard
                id={elem.id}
                key={elem.id}
                title={title}
                previewImage={elem.previewImage}
                className="near-places"
                type={elem.type}
                price={elem.price}
                rating={elem.rating}
                isPremium={elem.isPremium}
                isFavorite={elem.isFavorite}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

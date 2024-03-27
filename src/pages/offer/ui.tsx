import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/app-store';
import {fetchCommentsAction, fetchCurrentOfferAction, fetchNearbyAction} from './api';
import {Bookmark, Loader, Map, Rating, User} from '../../shared';
import {PlaceCard} from '../../entities';
import {Reviews} from './ui/reviews';
import {ReviewForm} from './ui/review-form';
import {getNearPlaces, getOffer, getComments} from "./model";

export const Offer = () => {
  const MAX_NEAR_PLACES = 3;
  const MAX_COMMENTS = 10;
  const {offerId} = useParams();
  const dispatch = useAppDispatch();
  const currentOffersInfo = useAppSelector(getOffer)
  const nearPlaces = useAppSelector(getNearPlaces).slice(0, MAX_NEAR_PLACES);
  const currentOffersComments = useAppSelector(getComments).slice(0, MAX_COMMENTS);

  useEffect(() => {
    if(offerId) {
      dispatch(fetchCurrentOfferAction(offerId));
      dispatch(fetchNearbyAction(offerId));
      dispatch(fetchCommentsAction(offerId));
    }
  }, [offerId, dispatch]);

  if (currentOffersInfo === null) {
    return (
      <div className="offer__gallery">
        <Loader/>
      </div>
    );
  }

  const {title, type, price, rating, isPremium, isFavorite, goods, images, host, city, description, bedrooms, maxAdults, id} = currentOffersInfo;
  const pointsNearPlaces = [...nearPlaces, currentOffersInfo];

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {images.map((text) => (
              <div className="offer__image-wrapper" key={text}>
                <img className="offer__image" src={text} alt="Photo studio"/>
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
            <ul className="offer__features" style={{textTransform: 'capitalize'}}>
              <li className="offer__feature offer__feature--entire">
                {type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {maxAdults} adults
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
                name={host.name}
                avatarUrl={host.avatarUrl}
                isPro={host.isPro}
                className="offer"
              />
              <div className="offer__description">
                <p className="offer__text">{description}</p>
              </div>
            </div>
            <Reviews className="offer__reviews" comments={currentOffersComments}>
              <ReviewForm id={offerId}/>
            </Reviews>
          </div>
        </div>
        <Map className="offer__map" location={city} points={pointsNearPlaces} selectedPoint={id}/>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {nearPlaces.map((elem) => (
              <PlaceCard
                id={elem.id}
                key={elem.id}
                title={elem.title}
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

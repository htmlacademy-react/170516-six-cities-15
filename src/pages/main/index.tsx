import {useState} from 'react';
import classNames from 'classnames';
import {Places, CitiesEmpty} from './ui';
import {appStore, useAppSelector} from '../../app/app-store';
import {VisuallyHidden} from '../../shared/utils';
import {PreviewCardProps} from '../../shared/types';
import {Map} from '../../shared';
import {Locations} from '../../entities';
import {fetchOffersAction} from "./model";

appStore.dispatch(fetchOffersAction());
export const Main = () => {
  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers);
  const [selectedPoint, setSelectedPoint] = useState<string>();
  const handleListItemHover = (selectedCardId: PreviewCardProps['id']) => setSelectedPoint(selectedCardId);
  const filterOffers = offers.filter(({city}) => city?.name === currentCity);
  const hasPlaces: boolean = !!filterOffers.length;

  const classNamePage = classNames(
    'page__main page__main--index',
    {'page__main--index-empty': !hasPlaces}
  );
  const classNameCities = classNames(
    'cities__places-container container',
    {'cities__places-container--empty': !hasPlaces}
  );

  return (
    <main className={classNamePage}>
      <VisuallyHidden tagName="h1">Cities</VisuallyHidden>
      <Locations currentCity={currentCity}/>
      <div className="cities">
        <div className={classNameCities}>
          {hasPlaces ?
            <Places
              numberPlacesToStay={filterOffers.length}
              nameCity={currentCity}
              onListItemHover={handleListItemHover}
              listCities={filterOffers}
            /> : <CitiesEmpty />}
          <div className="cities__right-section">
            {hasPlaces && <Map className="cities__map" location={filterOffers[0].city.location} points={filterOffers} selectedPoint={selectedPoint}/>}
          </div>
        </div>
      </div>
    </main>
  );
};

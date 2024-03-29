import {useEffect, useState} from 'react';
import classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '../../app/app-store';
import {Places, CitiesEmpty} from './ui';
import {fetchOffersAction} from './api';
import {getAuthCheckedStatus, VisuallyHidden} from '../../shared/utils';
import {PreviewCardProps} from '../../shared/types';
import {Status} from '../../shared/config';
import {Loader, Map} from '../../shared';
import {Locations} from '../../entities';

export const Main = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);
  const currentCity = useAppSelector((state) => state.currentCity);
  const isAuth = useAppSelector(getAuthCheckedStatus);
  const {offerList, status} = useAppSelector((state) => state.offers);
  const isLoading = Status.Resolved !== status;
  const [selectedPoint, setSelectedPoint] = useState<string>();
  const handleListItemHover = (selectedCardId: PreviewCardProps['id']) => setSelectedPoint(selectedCardId);
  const filterOffers = offerList?.filter(({city}) => city?.name === currentCity);
  const hasPlaces: boolean = !!offerList.length;

  const classNamePage = classNames(
    'page__main page__main--index',
    {'page__main--index-empty': !hasPlaces}
  );
  const classNameCities = classNames(
    'cities__places-container container',
    {'cities__places-container--empty': !hasPlaces}
  );

  if (isLoading) {
    return (
      <main className={classNamePage}>
        <Loader/>
      </main>
    );
  }

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
              offers={filterOffers}
              isAuth={isAuth}
            /> : <CitiesEmpty/>}
          <div className="cities__right-section">
            {hasPlaces &&
              <Map
                className="cities__map"
                location={offerList[0].city}
                points={filterOffers}
                selectedPoint={selectedPoint}
              />}
          </div>
        </div>
      </div>
    </main>
  );
};

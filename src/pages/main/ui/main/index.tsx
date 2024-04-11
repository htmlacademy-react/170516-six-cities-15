import {useSearchParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '@/app/app-store';
import {getAuthCheckedStatus, VisuallyHidden} from '@/shared/utils';
import {PreviewOfferProps} from '@/shared/types';
import {CityName, Status} from '@/shared/config';
import {Loader} from '@/shared';
import {Locations, Map} from '@/entities';
import {fetchOffersAction} from '../../api';
import {Places} from '../places';
import {CitiesEmpty} from '../сities-empty';

export const Main = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const isAuth = useAppSelector(getAuthCheckedStatus);
  const hasSearchParams:boolean = !!searchParams.get('location');
  const locationParams = hasSearchParams ? searchParams.get('location') : CityName.Paris;

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  const {list, status} = useAppSelector((state) => state.offers);
  const isLoading = Status.Resolved !== status;
  const [selectedPoint, setSelectedPoint] = useState<string>();
  const handleListItemHover = (selectedCardId: PreviewOfferProps['id']) => setSelectedPoint(selectedCardId);
  const filterOffers = list.filter(({city}) => city.name === locationParams);
  const hasPlaces: boolean = !!filterOffers.length;

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
      <main className={classNamePage} data-testid='main-loading'>
        <Loader/>
      </main>
    );
  }

  return (
    <main className={classNamePage} data-testid='main'>
      <VisuallyHidden tagName="h1">Cities</VisuallyHidden>
      <Locations currentCity={locationParams}/>
      <div className="cities">
        <div className={classNameCities}>
          {hasPlaces ?
            <Places
              numberPlacesToStay={filterOffers.length}
              nameCity={locationParams}
              onListItemHover={handleListItemHover}
              offers={filterOffers}
              isAuth={isAuth}
            /> : <CitiesEmpty currentCity={locationParams}/>}
          <div className="cities__right-section">
            {hasPlaces &&
            <Map
              className="cities__map"
              city={filterOffers[0].city}
              points={filterOffers}
              selectedPoint={selectedPoint}
            />}
          </div>
        </div>
      </div>
    </main>
  );
};

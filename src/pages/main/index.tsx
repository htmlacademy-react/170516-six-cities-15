import {useState} from 'react';
import classNames from 'classnames';
import {Places, CitiesEmpty} from './ui';
import {useAppSelector} from '../../app/app-store';
import {VisuallyHidden} from '../../shared/utils';
import {PreviewCardProps} from '../../shared/types';
import {listCities} from '../../shared/mock';
import {Map} from '../../shared';
import {Locations} from '../../entities';

export const Main = () => {
  const currentCity = useAppSelector((state) => state.currentCity);
  const [selectedPoint, setSelectedPoint] = useState<string>();
  const handleListItemHover = (selectedCardId: PreviewCardProps['id']) => setSelectedPoint(selectedCardId);
  const filterCities = listCities.filter(({city}) => city.name === currentCity);
  const hasPlaces: boolean = !!filterCities.length;
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
              numberPlacesToStay={filterCities.length}
              nameCity={currentCity}
              onListItemHover={handleListItemHover}
              listCities={filterCities}
            /> : <CitiesEmpty />}
          <div className="cities__right-section">
            {hasPlaces && <Map className="cities__map" location={listCities[0].location} points={listCities} selectedPoint={selectedPoint}/>}
          </div>
        </div>
      </div>
    </main>
  );
};

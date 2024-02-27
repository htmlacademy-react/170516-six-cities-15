import {useState} from 'react';
import {listCities} from './mock';
import {VisuallyHidden} from '../../shared/utils';
import {Map} from '../../shared';
import {Locations} from '../../entities';
import {Places} from '../../widgets';

export const Main = () => {
  const [selectedPoint, setSelectedPoint] = useState('');
  const handleListItemHover = (listItemName: string) => {
    const currentPoint = listCities.find(({id}) => id === listItemName).id;
    return setSelectedPoint(currentPoint);
  };

  return (
    <main className="page__main page__main--index">
      <VisuallyHidden tagName="h1">Cities</VisuallyHidden>
      <Locations/>
      <div className="cities">
        <div className="cities__places-container container">
          <Places
            countCities={listCities.length}
            nameCity="Amsterdam"
            onListItemHover={handleListItemHover}
            listCities={listCities}
          />
          <div className="cities__right-section">
            <Map className="cities__map" city={listCities[0]} points={listCities} selectedPoint={selectedPoint}/>
          </div>
        </div>
      </div>
    </main>
  );
};

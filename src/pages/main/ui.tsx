import {useState} from 'react';
import {VisuallyHidden} from '../../shared/utils';
import {PreviewCardProps} from '../../shared/types';
import {listCities} from '../../shared/mock';
import {Map} from '../../shared';
import {Locations} from '../../entities';
import {Places} from '../../widgets';

export const Main = () => {
  const [selectedPoint, setSelectedPoint] = useState<string>();
  const handleListItemHover = (selectedCardId: PreviewCardProps['id']) => setSelectedPoint(selectedCardId);

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
            <Map className="cities__map" location={listCities[0].location} points={listCities} selectedPoint={selectedPoint}/>
          </div>
        </div>
      </div>
    </main>
  );
};

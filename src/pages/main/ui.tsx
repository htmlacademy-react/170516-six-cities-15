import {VisuallyHidden} from '../../shared/utils';
import {Locations} from '../../entities';
import {Places} from '../../widgets';

export const Main = () => (
  <main className="page__main page__main--index">
    <VisuallyHidden tagName="h1">Cities</VisuallyHidden>
    <Locations/>
    <div className="cities">
      <div className="cities__places-container container">
        <Places
          countCities={312}
          nameCity="Amsterdam"
        />
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  </main>
);

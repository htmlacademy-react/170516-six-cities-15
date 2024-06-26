import {FC} from 'react';

type CitiesEmptyProps = {
  currentCity: string | null;
};

export const CitiesEmpty:FC<CitiesEmptyProps> = ({currentCity}) => (
  <section className="cities__no-places" data-testid='city-empty'>
    <div className="cities__status-wrapper tabs__content">
      <b className="cities__status">No places to stay available</b>
      <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
    </div>
  </section>
);

import {FC} from 'react';
import classNames from 'classnames';
import {useAppDispatch} from '../../app/app-store';
import {cities} from '../../shared/mock';
import {NameCitiesProps} from '../../shared/types';
import {setCurrentCity} from './model';

type LocationProps = {
  currentCity: NameCitiesProps;
};

export const Locations:FC<LocationProps> = ({currentCity}) => {
  const dispatch = useAppDispatch();
  //TODO: см. bindActionCreators
  const handleCityClick = (city: NameCitiesProps) => () => dispatch(setCurrentCity(city));

  const locationsItemClass = (city: string) => classNames(
    'locations__item-link tabs__item',
    {'tabs__item--active': city === currentCity}
  );

  //TODO: ссылки сделать через link как табы с хешемо
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {cities.map(({name}) => (
            <li className='locations__item' key={name}>
              <span
                style={{cursor: 'pointer'}}
                className={locationsItemClass(name)}
                onClick={handleCityClick(name)}
              >
                <span>{name}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

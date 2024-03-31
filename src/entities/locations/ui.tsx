import {FC} from 'react';
import classNames from 'classnames';
import {useAppDispatch} from '@/app/app-store';
import {CityName} from '@/shared/config';
import {setCurrentCity} from './model';

type LocationProps = {
  currentCity: `${CityName}`;
};

export const Locations:FC<LocationProps> = ({currentCity}) => {
  const dispatch = useAppDispatch();
  //TODO: см. bindActionCreators
  const handleCityClick = (city: CityName) => () => dispatch(setCurrentCity(city));
  const CityNameValues: CityName[] = Object.values(CityName);

  const locationsItemClass = (city: string) => classNames(
    'locations__item-link tabs__item',
    {'tabs__item--active': city === currentCity}
  );

  //TODO: ссылки сделать через link как табы с хешемо
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {CityNameValues.map((name) => (
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

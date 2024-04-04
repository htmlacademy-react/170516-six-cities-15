import {FC} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {CityName, Path} from '@/shared/config';

type LocationsProps = {
  currentCity: string | null;
};

export const Locations:FC<LocationsProps> = ({currentCity}) => {
  const CityNameValues: CityName[] = Object.values(CityName);

  const locationsItemClass = (city: string) => classNames(
    'locations__item-link tabs__item',
    {'tabs__item--active': city === currentCity}
  );

  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {CityNameValues.map((name) => (
            <li className='locations__item' key={name}>
              <Link
                className={locationsItemClass(name)}
                to={`${Path.Main}?location=${name}`}
              >
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

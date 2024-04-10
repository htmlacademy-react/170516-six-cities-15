import {render, screen} from '@testing-library/react';
import {CityName} from '@/shared/config';
import {withHistory} from '@/shared/mocks';
import {Locations} from './index';

describe('Entities: Locations', () => {
  const cityNameValues: CityName[] = Object.values(CityName);

  cityNameValues.forEach((item) => {
    it(`should render city tab ${item}`, () => {
      render(withHistory(<Locations currentCity={item} />));
      const locations = screen.getByTestId('locations');
      expect(locations).toBeInTheDocument();
    });
  });
});

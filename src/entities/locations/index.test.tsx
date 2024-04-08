import {MemoryRouter } from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {CityName, Path} from '@/shared/config';
import {Locations} from './index';

const renderTabLocation = (city: string) => {
  render(
    <MemoryRouter initialEntries={[Path.Main]}>
      <Locations currentCity={city} />
    </MemoryRouter>,
  );
  const locations = screen.getByTestId('locations');
  expect(locations).toBeInTheDocument();
};

describe('Entities: Locations', () => {
  const cityNameValues: CityName[] = Object.values(CityName);
  cityNameValues.forEach((item) => {
    it(`should render city tab ${item}`, () => renderTabLocation(item));
  });
});

import {render, screen} from '@testing-library/react';
import {CityName} from '@/shared/config';
import {withHistory} from "@/shared/utils";
import {Locations} from './index';

const renderTabLocation = (city: string) => {
  render(withHistory(<Locations currentCity={city} />));
  const locations = screen.getByTestId('locations');
  expect(locations).toBeInTheDocument();
};

describe('Entities: Locations', () => {
  const cityNameValues: CityName[] = Object.values(CityName);
  cityNameValues.forEach((item) => {
    it(`should render city tab ${item}`, () => renderTabLocation(item));
  });
});

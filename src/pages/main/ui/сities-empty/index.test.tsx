import {render, screen} from '@testing-library/react';
import {makeFakeOffer} from '@/shared/mocks';
import {CitiesEmpty} from './';

describe('Page: CityEmpty', () => {
  it('should render correct', () => {
    const mockOffer = makeFakeOffer();
    render(<CitiesEmpty currentCity={mockOffer.city.name}/>);
    const favoriteEmptyTestId = screen.getByTestId('city-empty');
    expect(favoriteEmptyTestId).toBeInTheDocument();
  });
});

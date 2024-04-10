import {render, screen} from '@testing-library/react';
import {getRandomNumber, makeFakeOffer} from '@/shared/mocks';
import {Map} from '@/entities';

describe('Entities: Map', () => {
  const mockDataOffers = Array.from({length: getRandomNumber(0, 5)}, makeFakeOffer);
  it('should render correct', () => {
    render(<Map points={mockDataOffers} city={mockDataOffers[0].city}/>);
    const mapTestId = screen.getByTestId('map');
    expect(mapTestId).toBeInTheDocument();
  });
});

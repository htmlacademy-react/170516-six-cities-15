import {render, screen} from '@testing-library/react';
import {MemoryHistory, createMemoryHistory} from 'history';
import {getRandomNumber, makeFakeOffer, makeFakeStore, withHistory, withStore} from "@/shared/mocks";
import {Places} from "@/pages/main/ui/places/index";

describe('Page: MainPlaces', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const mockOffers = Array.from({length: getRandomNumber(0, 5)}, makeFakeOffer);

    const withHistoryComponent = withHistory(
      <Places numberPlacesToStay={mockOffers.length} offers={mockOffers} nameCity={mockOffers[0].city.name} isAuth/>,
      mockHistory
    );
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);
    const placesTestId = screen.getByTestId('places');

    expect(placesTestId).toBeInTheDocument();
  });
});

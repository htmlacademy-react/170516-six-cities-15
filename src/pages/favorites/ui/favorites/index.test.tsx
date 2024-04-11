import {render, screen} from '@testing-library/react';
import {createMemoryHistory, MemoryHistory} from 'history';
import {getRandomNumber, makeFakeOffer, makeFakeStore, withHistory, withStore} from '@/shared/mocks';
import {Favorites} from './';

describe('Page: Favorite', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correct', () => {
    const mockOffers = Array.from({length: getRandomNumber(1, 5)}, makeFakeOffer);

    const withHistoryComponent = withHistory(<Favorites/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore({
        offers: {...makeFakeStore().offers, favorites: mockOffers},
      })
    );
    render(withStoreComponent);
    const favoriteEmptyTestId = screen.getByTestId('favorites');
    expect(favoriteEmptyTestId).toBeInTheDocument();
  });
});

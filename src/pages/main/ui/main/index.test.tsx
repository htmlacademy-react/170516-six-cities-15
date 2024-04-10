import {render, screen} from '@testing-library/react';
import {createMemoryHistory, MemoryHistory} from 'history';
import {getRandomNumber, makeFakeOffer, makeFakeStore, withHistory, withStore} from '@/shared/mocks';
import {Status} from "@/shared/config";
import {Main} from './';

describe('Page: Main', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correct', () => {
    const mockOffers = Array.from({length: getRandomNumber(1, 5)}, makeFakeOffer);

    const withHistoryComponent = withHistory(<Main/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore({
        offers: {...makeFakeStore().offers, list: mockOffers, status: Status.Resolved},
      })
    );

    render(withStoreComponent);
    const mainEmptyTestId = screen.getByTestId('main');
    expect(mainEmptyTestId).toBeInTheDocument();
  });
});

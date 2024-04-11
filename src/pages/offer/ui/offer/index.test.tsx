import {render, screen} from '@testing-library/react';
import {makeFakeOffer, makeFakeStore, withHistory, withStore} from '@/shared/mocks';
import {Offer} from './';
import {createMemoryHistory, MemoryHistory} from 'history';
import {Status} from '@/shared/config';

describe('Page: Offer', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correct', () => {
    const withHistoryComponent = withHistory(<Offer/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore({
        offer: {...makeFakeStore().offer, info: makeFakeOffer(), status: Status.Resolved},
      })
    );

    render(withStoreComponent);
    const mainEmptyTestId = screen.getByTestId('offer');
    expect(mainEmptyTestId).toBeInTheDocument();
  });
});

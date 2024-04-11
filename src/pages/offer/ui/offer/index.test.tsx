import {datatype} from 'faker';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory, MemoryHistory} from 'history';
import {makeFakeOffer, makeFakeStore, withHistory, withStore} from '@/shared/mocks';
import {Status} from '@/shared/config';
import {Offer} from './';

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
        offer: {...makeFakeStore().offer, info: {...makeFakeOffer(), images: [datatype.uuid(), datatype.uuid()]}, status: Status.Resolved},
      })
    );

    render(withStoreComponent);
    const mainEmptyTestId = screen.getByTestId('offer');
    expect(mainEmptyTestId).toBeInTheDocument();
  });
});

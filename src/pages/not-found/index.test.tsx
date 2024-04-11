import {render, screen} from '@testing-library/react';
import {createMemoryHistory, MemoryHistory} from 'history';
import {withHistory} from '@/shared/mocks';
import {NotFound} from './';

describe('Page: NotFound', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const withHistoryComponent = withHistory(<NotFound/>, mockHistory);

    render(withHistoryComponent);
    const notFoundTestId = screen.getByTestId('not-found');
    expect(notFoundTestId).toBeInTheDocument();
  });
});

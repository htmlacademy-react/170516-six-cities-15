import {render, screen} from '@testing-library/react';
import {createMemoryHistory, MemoryHistory} from 'history';
import {withHistory} from '@/shared/mocks';
import {Footer} from "./";

describe('Component: Footer', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const withHistoryComponent = withHistory(<Footer/>, mockHistory);

    render(withHistoryComponent);
    const footerTestId = screen.getByTestId('footer')

    expect(footerTestId).toBeInTheDocument();
  });
});

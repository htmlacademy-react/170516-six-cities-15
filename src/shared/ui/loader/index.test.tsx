import {render, screen} from '@testing-library/react';
import {Loader} from '@/shared';

describe('UI component: Loader', () => {
  it('should render correctly', () => {
    render(<Loader/>);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
});

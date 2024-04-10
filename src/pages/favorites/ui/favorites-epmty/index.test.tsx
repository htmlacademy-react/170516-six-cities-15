import {render, screen} from '@testing-library/react';
import {FavoritesEmpty} from './';

describe('Page: FavoriteEmpty', () => {
  it('should render correct', () => {
    render(<FavoritesEmpty/>);
    const favoriteEmptyTestId = screen.getByTestId('favorites-empty');
    expect(favoriteEmptyTestId).toBeInTheDocument();
  });
});

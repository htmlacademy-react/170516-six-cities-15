import {render, screen} from '@testing-library/react';
import {Sorting} from '@/pages/main/ui/sorting/index';
import {SortingOptions} from '../../utils';

describe('Page: MainSorting', () => {
  it('should render correctly', () => {
    render(
      <Sorting
        activeOptionSorting={SortingOptions.Popular}
        onSortingOptionClick={() => {}}
      />
    );
    const sortingTestId = screen.getByTestId('sorting');
    expect(sortingTestId).toBeInTheDocument();
  });

});

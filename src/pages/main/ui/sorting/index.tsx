import {useState} from 'react';
import classNames from 'classnames';
import {SortingOptions, SortingOptionsValuesType} from '../../utils';

type SortingProps = {
  activeOptionSorting: string;
  onSortingOptionClick: (value: SortingOptionsValuesType) => void;
}

export const Sorting = ({activeOptionSorting, onSortingOptionClick}: SortingProps) => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen((prevValue) => !prevValue);
  const handleSortingOptionClick = (value: SortingOptionsValuesType) => {
    setOpen(false);
    onSortingOptionClick(value);
  };
  const sortingOptionsEntries = Object.values<SortingOptionsValuesType>(SortingOptions);
  const classNamesOption = (option: string) => classNames('places__option', {
    'places__option--active': activeOptionSorting === option,
  });

  const classNamesListDropdown = classNames('places__options places__options--custom', {
    'places__options--opened': open,
  });

  return (
    <form className="places__sorting" action="#" method="get" data-testid='sorting'>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={toggleDropdown}>
        {activeOptionSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNamesListDropdown}>
        {sortingOptionsEntries.map((value) => (
          <li
            key={value}
            className={classNamesOption(value)}
            tabIndex={0}
            onClick={() => handleSortingOptionClick(value)}
          >
            {value}
          </li>
        ))}
      </ul>
    </form>
  );
};

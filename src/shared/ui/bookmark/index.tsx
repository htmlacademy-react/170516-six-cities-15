import {FC} from 'react';
import classNames from "classnames";
import {VisuallyHidden} from '../../utils';

type BookmarkType = {
  isFavorite?: boolean;
  className?: string;
}

export const Bookmark:FC<BookmarkType> = ({
  isFavorite,
  className,
}) => {
  const bookmarkClass = classNames(`button ${className}__bookmark-button`, {
    [`${className}__bookmark-button--active`]: isFavorite
  });

  return (
    <button className={bookmarkClass} type="button">
      <svg className={`${className}__bookmark-icon`} style={{width: '100%', height: '100%'}}>
        <use href="#icon-bookmark"></use>
      </svg>
      <VisuallyHidden>In bookmarks</VisuallyHidden>
    </button>
  );
};

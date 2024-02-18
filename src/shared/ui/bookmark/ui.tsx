import {FC} from 'react';
import {BookmarkType} from './type';
import {VisuallyHidden} from '../../utils';

export const Bookmark:FC<BookmarkType> = ({isFavorite, className}) => {
  const hasBookmarkActive = isFavorite ? `${className}__bookmark--active` : '';
  return (
    <button
      className={`button ${className}__bookmark ${hasBookmarkActive}`}
      type="button"
    >
      <svg className={`${className}__bookmark-icon`} width="18" height="19">
        <use href="#icon-bookmark"></use>
      </svg>
      <VisuallyHidden>In bookmarks</VisuallyHidden>
    </button>
  );
};

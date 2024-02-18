import {FC} from 'react';
import {BookmarkType} from './type';
import {VisuallyHidden} from '../../utils';

export const Bookmark:FC<BookmarkType> = ({
  isFavorite,
  className,
}) => {
  const hasBookmarkActive = isFavorite ? `${className}__bookmark-button--active` : '';
  return (
    <button className={`button ${className}__bookmark-button ${hasBookmarkActive}`} type="button">
      <svg className={`${className}__bookmark-icon`} style={{width: '100%', height: '100%'}}>
        <use href="#icon-bookmark"></use>
      </svg>
      <VisuallyHidden>In bookmarks</VisuallyHidden>
    </button>
  );
};

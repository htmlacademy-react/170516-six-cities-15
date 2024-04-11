import {memo, MouseEvent} from 'react';
import classNames from 'classnames';
import {useAppDispatch} from '@/app/app-store';
import {Path} from '@/shared/config';
import {PreviewOfferProps} from '@/shared/types';
import {redirectToRoute, VisuallyHidden} from '@/shared/utils';
import {postFavoriteStatusAction} from './modal';

type BookmarkType = {
  isFavorite: boolean;
  className?: string;
  offerId: PreviewOfferProps['id'];
  isAuth: boolean;
}

export const Bookmark = memo(({isFavorite, className, offerId, isAuth}: BookmarkType) => {
  const dispatch = useAppDispatch();
  const bookmarkClass = classNames(`button ${className}__bookmark-button`, {
    [`${className}__bookmark-button--active`]: isFavorite
  });

  const handleBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(isAuth) {

      dispatch(postFavoriteStatusAction({
        id: offerId,
        status: Number(!isFavorite),
      }));
    } else {
      dispatch(redirectToRoute(Path.Login));
    }
  };

  return (
    <button className={bookmarkClass} type="button" onClick={handleBtnClick} data-testid='bookmark'>
      <svg className={`${className}__bookmark-icon`} style={{width: '100%', height: '100%'}}>
        <use href="#icon-bookmark"></use>
      </svg>
      <VisuallyHidden>In bookmarks</VisuallyHidden>
    </button>
  );
});

Bookmark.displayName = 'Bookmark';

import { useNavigate } from 'react-router-dom';
import {memo, MouseEvent} from 'react';
import classNames from 'classnames';
import {useAppDispatch} from '../../app/app-store';
import {Path} from '../../shared/config';
import {PreviewOfferProps} from '../../shared/types';
import {VisuallyHidden} from '../../shared/utils';
import {postFavoriteStatusAction} from '../../shared/api';

type BookmarkType = {
  isFavorite: boolean;
  className?: string;
  offerId: PreviewOfferProps['id'];
  isAuth: boolean;
}

export const Bookmark = memo(({isFavorite, className, offerId, isAuth}: BookmarkType) => {
  const navigation = useNavigate();
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
      navigation(Path.Login);
    }
  };

  return (
    <button className={bookmarkClass} type="button" onClick={handleBtnClick}>
      <svg className={`${className}__bookmark-icon`} style={{width: '100%', height: '100%'}}>
        <use href="#icon-bookmark"></use>
      </svg>
      <VisuallyHidden>In bookmarks</VisuallyHidden>
    </button>
  );
});

Bookmark.displayName = 'Bookmark';

import { useNavigate } from "react-router-dom";
import {FC, memo, MouseEvent, useState} from 'react';
import classNames from 'classnames';
import {useAppDispatch, useAppSelector} from '../../app/app-store';
import {Path} from "../../shared/config";
import {PreviewCardProps} from "../../shared/types";
import {getAuthCheckedStatus, VisuallyHidden} from "../../shared/utils";
import {postFavoriteStatusAction} from "./api";

type BookmarkType = {
  isFavorite: boolean;
  className?: string;
  offerId: PreviewCardProps['id'];
}

export const Bookmark:FC<BookmarkType> = memo(({
  isFavorite,
  className,
  offerId
}) => {
  const isAuth = useAppSelector(getAuthCheckedStatus);
  const [isFavorites, setFavorites] = useState(isFavorite);

  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const bookmarkClass = classNames(`button ${className}__bookmark-button`, {
    [`${className}__bookmark-button--active`]: isFavorites
  });

  const handleBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(isAuth) {
      setFavorites(((prevState) => !prevState));

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

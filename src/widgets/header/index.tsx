import {memo, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '@/app/app-store';
import {Path} from '@/shared/config';
import {getAuthCheckedStatus} from '@/shared/utils';
import {fetchFavoriteAction, logoutAction} from '@/shared/api';

type HeaderProps = {
  showRightContent?: boolean;
}

export const Header = memo(({showRightContent}: HeaderProps) => {
  const user = useAppSelector((state) => state.client.user);
  const isAuth = useAppSelector(getAuthCheckedStatus);
  const numberAddedFavorites = useAppSelector((state) => state.offers.favorites).length;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(isAuth) {
      dispatch(fetchFavoriteAction());
    }
  }, [dispatch, isAuth]);

  return (
    <header className="header" data-testid='header'>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={Path.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {showRightContent && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {isAuth ?
                  <>
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={Path.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                          <img src={user?.avatarUrl} alt={user?.email}/>
                        </div>
                        <span className="header__user-name user__name">{user?.email}</span>
                        <span className="header__favorite-count">{numberAddedFavorites}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        to={Path.Login}
                        onClick={(evt) => {
                          evt.preventDefault();
                          dispatch(logoutAction());
                        }}
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                  :
                  <Link className="header__nav-link header__nav-link--profile" to={Path.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

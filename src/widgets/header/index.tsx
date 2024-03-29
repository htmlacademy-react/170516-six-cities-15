import {FC} from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/app-store';
import {Path} from '../../shared/config';
import {logoutAction, useAuthStatus} from '../../shared/utils';

type HeaderProps = {
  showRightContent?: boolean;
}

export const Header:FC<HeaderProps> = ({showRightContent}) => {
  const user = useAppSelector((state) => state.client.user);
  const hasAuthStatus = useAuthStatus();
  const dispatch = useAppDispatch();

  return (
    <header className="header">
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
                {hasAuthStatus ?
                  <>
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={Path.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                          <img src={user?.avatarUrl} alt={user?.email}/>
                        </div>
                        <span className="header__user-name user__name">{user?.email}</span>
                        <span className="header__favorite-count">3</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        to={Path.Main}
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
};

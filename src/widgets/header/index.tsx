import {FC} from 'react';
import {Link} from 'react-router-dom';
import {Path} from '../../shared/config';

//TODO: После Redux подумать над рассположением хедер, не нужно экспортировать в каждый компонент
type HeaderProps = {
  hasPageLogin?: boolean;
}

export const Header:FC<HeaderProps> = ({hasPageLogin}) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link className="header__logo-link" to={Path.Main}>
            <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
          </Link>
        </div>
        {!hasPageLogin && (
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={Path.Main}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">3</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to={Path.Main}>
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  </header>
);

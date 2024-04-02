import {memo} from 'react';
import {Link} from 'react-router-dom';
import {PATH_MAIN_PAGE} from '@/shared/config';

export const Footer = memo(() => (
  <footer className="footer container">
    <Link className="footer__logo-link" to={PATH_MAIN_PAGE}>
      <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
    </Link>
  </footer>
));

Footer.displayName = 'Footer';

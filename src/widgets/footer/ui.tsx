import {Link} from 'react-router-dom';
import {Path} from '../../shared/config';

export const Footer = () => (
  <footer className="footer container">
    <Link className="footer__logo-link" to={Path.Main}>
      <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
    </Link>
  </footer>
);

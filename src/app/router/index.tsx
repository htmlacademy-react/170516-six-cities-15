import {PrivateRoute} from '../private-route';
import {AuthorizationStatus, Path} from '../../shared/config';
import {Footer} from '../../widgets';
import {Main, Login, Favorites, Offer, NotFound} from '../../pages';

export const routes = [
  {
    helmetTitle: 'main',
    className: 'page--gray page--main',
    tpl: <Main/>,
    path: Path.Main
  },
  {
    helmetTitle: 'login',
    className: 'page--gray page--login',
    tpl: <Login/>,
    path: Path.Login
  },
  {
    helmetTitle: 'favorites',
    tpl:
      <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
        <Favorites/>
        <Footer/>
      </PrivateRoute>,
    path: Path.Favorites
  },
  {
    helmetTitle: 'offer',
    tpl: <Offer/>,
    path: `${Path.Offer}/:id`
  },
  {
    helmetTitle: 'not found',
    className: 'page--gray page--login',
    tpl: <NotFound/>,
    path: '*'
  },
];

import {Path} from '../../shared/config';
import {Main, Login, Favorites, Offer, NotFound} from '../../pages';

export const routes = [
  {
    tpl: <Main/>,
    path: Path.Main,
    index: true
  },
  {
    tpl: <Login/>,
    path: Path.Login
  },
  {
    tpl:
      <Favorites/>,
    path: Path.Favorites
  },
  {
    tpl: <Offer/>,
    path: `${Path.Offer}/:id`
  },
  {
    tpl: <NotFound/>,
    path: '*'
  },
];

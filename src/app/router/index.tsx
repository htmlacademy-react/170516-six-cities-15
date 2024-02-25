import {Path} from '../../shared/config';
import {Main, Login, Favorites, Offer, NotFound} from '../../pages';

// Выполнить через https://reactrouter.com/en/main/routers/create-browser-router
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

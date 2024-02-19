import {Footer} from '../widgets';
import {Path} from "../shared/config";
import {Main, Login, Favorites, Offer} from '../pages';

export const routes = [
  {
    className: 'page--gray page--main',
    tpl: <Main/>,
    path: Path.Main
  },
  {
    className: 'page--gray page--login',
    tpl: <Login/>,
    path: Path.Login
  },
  {
    tpl:
      <>
        <Favorites/>
        <Footer/>
      </>
    ,
    path: Path.Favorites
  },
  {
    tpl: <Offer/>,
    path: `${Path.Offer}/:id`
  },
  {
    tpl: <h1>404 Not Found</h1>,
    path: '*'
  },
];

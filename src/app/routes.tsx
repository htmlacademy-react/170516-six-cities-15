import {Footer} from '../widgets';
import {Path} from '../shared/config';
import {Main, Login, Favorites, Offer, NotFound} from '../pages';

//TODO: Подумать над расположением файла
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
    className: 'page--gray page--login',
    tpl: <NotFound/>,
    path: '*'
  },
];

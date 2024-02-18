import {Footer} from '../widgets';
import {Main, Login, Favorites, Offer} from '../pages';

export const routes = [
  {
    className: 'page--gray page--main',
    tpl: <Main/>,
    path: '/'
  },
  {
    className: 'page--gray page--login',
    tpl: <Login/>,
    path: '/login'
  },
  {
    tpl:
      <>
        <Favorites/>
        <Footer/>
      </>
    ,
    path: '/favorites'
  },
  {
    tpl: <Offer/>,
    path: '/offer/:id'
  },
  {
    tpl: <h1>404 Not Found</h1>,
    path: '*'
  },
];

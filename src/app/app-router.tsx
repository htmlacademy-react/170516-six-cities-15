import {Route, Routes} from 'react-router-dom';
import {PrivateRoute} from './private-route';
import {Layout} from './layout';
import {Path, AuthorizationStatus} from '../shared/config';
import {Main, Login, Favorites, Offer, NotFound} from '../pages';

export const AppRouter = () => (
  <Routes>
    <Route path={Path.Main} element={<Layout />}>
      <Route path={Path.Main} element={<Main/>}/>
      <Route path={Path.Login} element={<Login/>}/>
      <Route
        path={Path.Favorites}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites/>
          </PrivateRoute>
        }/>
      <Route path={`${Path.Offer}/:id`} element={<Offer/>} />
      <Route path={Path.NotFound} element={<NotFound/>} />
    </Route>
  </Routes>
);

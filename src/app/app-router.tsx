import {Route, Routes} from 'react-router-dom';
import {Path} from '@/shared/config';
import {Main, Login, Favorites, Offer, NotFound} from '@/pages';
import {PrivateRoute} from './private-route';
import {useAppSelector} from "./app-store";
import {Layout} from './layout';

export const AppRouter = () => {
  const authorizationStatus = useAppSelector((state) => state.client.authorizationStatus);

  return (
    <Routes>
      <Route path={Path.Main} element={<Layout/>}>
        <Route path={Path.Main} element={<Main/>}/>
        <Route path={Path.Login} element={<Login/>}/>
        <Route
          path={Path.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites/>
            </PrivateRoute>
          }
        />
        <Route path={`${Path.Offer}/:offerId`} element={<Offer/>}/>
        <Route path={Path.NotFound} element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

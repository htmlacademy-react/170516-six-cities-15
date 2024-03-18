import {RouterProvider} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import {routes} from './app-router';
import {appStore} from './app-store';

// import {fetchOffersAction} from "../pages/main/model";
// //TODO: А можно чтоб гет запрос был на кокретной странице?
// appStore.dispatch(fetchOffersAction());

export const App = () => (
  <Provider store={appStore}>
    <HelmetProvider>
      <RouterProvider router={routes} />
    </HelmetProvider>
  </Provider>
);

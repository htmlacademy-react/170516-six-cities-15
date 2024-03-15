import {RouterProvider} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import {routes} from './app-router';
import {appStore} from './app-store';

export const App = () => (
  <Provider store={appStore}>
    <HelmetProvider>
      <RouterProvider router={routes} />
    </HelmetProvider>
  </Provider>
);

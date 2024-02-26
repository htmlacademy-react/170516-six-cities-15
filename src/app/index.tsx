import {RouterProvider} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {routes} from './router';

export const App = () => (
  <HelmetProvider>
    <RouterProvider router={routes} />
  </HelmetProvider>
);

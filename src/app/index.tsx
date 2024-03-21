import {RouterProvider} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from 'react-redux';
import {routes} from './app-router';
import {appStore} from './app-store';
import {checkAuthAction} from '../shared/utils';

appStore.dispatch(checkAuthAction());

export const App = () => (
  <Provider store={appStore}>
    <HelmetProvider>
      <ToastContainer />
      <RouterProvider router={routes} />
    </HelmetProvider>
  </Provider>
);

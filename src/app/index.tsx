import {HelmetProvider} from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from 'react-redux';
import {appStore} from './app-store';
import {AppRouter} from './app-router';
import {browserHistory, checkAuthAction, HistoryRouter} from '../shared/utils';

appStore.dispatch(checkAuthAction());

export const App = () => (
  <Provider store={appStore}>
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <AppRouter/>
      </HistoryRouter>
    </HelmetProvider>
  </Provider>
);

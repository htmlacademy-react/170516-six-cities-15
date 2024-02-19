import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Page} from '../shared';
import {Header} from '../widgets';
import {routes} from './routes';

export const App = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({className, tpl, path}) => (
        <Route key={path} path={path} element={
          <Page className={className ?? ''}>
            <Header/>
            {tpl}
          </Page>
        }
        />)
      )}
    </Routes>
  </BrowserRouter>
);

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import {routes} from './router';
import {Page} from '../shared';

export const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        {routes.map(({className, tpl, path, helmetTitle}) => (
          <Route key={path} path={path} element={
            <Page className={className ?? ''}>
              <Helmet>
                <title>6 cities {helmetTitle}</title>
              </Helmet>
              {tpl}
            </Page>
          }
          />)
        )}
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

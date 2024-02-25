import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {routes} from './router';
import {Layout} from './layout';
import {Path} from '../shared/config';

export const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path={Path.Main} element={<Layout />}>
          {routes.map(({tpl, path, index}) => (
            <Route key={path} path={path} element={tpl} index={index}/>)
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

import {Outlet, useLocation, useParams, ScrollRestoration} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {getLayoutState} from './utils';
import {Footer, Header} from '../../widgets';

export const Layout = () => {
  const {pathname} = useLocation();
  const {id} = useParams();
  const {pageClassName, helmetTitle, renderFooter} = getLayoutState(pathname, id);
  return (
    <div className={`page ${pageClassName}`}>
      <ScrollRestoration />
      <Helmet>
        <title>6 cities {helmetTitle}</title>
      </Helmet>
      <Header/>
      <Outlet/>
      {renderFooter && <Footer/>}
    </div>
  );
};

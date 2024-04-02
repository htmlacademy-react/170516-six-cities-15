import {Outlet, useLocation, useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {Footer, Header} from '@/widgets';
import {getLayoutState} from './utils';

export const Layout = () => {
  const {pathname} = useLocation();
  const {offerId} = useParams();
  const {pageClassName, helmetTitle, renderFooter, showRightContent} = getLayoutState(pathname, offerId);
  return (
    <div className={`page ${pageClassName}`}>
      <Helmet>
        <title>6 cities {helmetTitle}</title>
      </Helmet>
      <Header showRightContent={showRightContent}/>
      <Outlet/>
      {renderFooter && <Footer/>}
    </div>
  );
};

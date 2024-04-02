import {memo} from 'react';
import {Link} from 'react-router-dom';
import {PATH_MAIN_PAGE} from '@/shared/config';

export const NotFound = memo(() => (
  <main className="page__main page__main--login">
    <div className="page__login-container container">
      <section className="login form">
        <h1 className="login__title">404. Page not found</h1>
        <div className="login__form form">
          <Link className="login__submit form__submit button" to={PATH_MAIN_PAGE}>To main</Link>
        </div>
      </section>
    </div>
  </main>
));

NotFound.displayName = 'NotFound';

import {Link} from 'react-router-dom';
import {Path} from '../../shared/config';
import {Header} from '../../widgets';

export const NotFound = () => (
  <>
    <Header/>
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login form">
          <h1 className="login__title">404. Page not found</h1>
          <div className="login__form form">
            <Link className="login__submit form__submit button" to={Path.Main}>To main</Link>
          </div>
        </section>
      </div>
    </main>
  </>
);

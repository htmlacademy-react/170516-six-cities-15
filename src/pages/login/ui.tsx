import {Link} from 'react-router-dom';
import {Path} from '../../shared/config';
import {VisuallyHidden} from '../../shared/utils';

export const Login = () => {
  const formFields = [
    {
      id: 1,
      type: 'email',
      placeholder: 'Email'
    },
    {
      id: 2,
      type: 'password',
      placeholder: 'Password'
    },
  ];

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post">
            {formFields.map(({type, placeholder, id}) => (
              <label className="login__input-wrapper form__input-wrapper" key={id}>
                <VisuallyHidden>{type}</VisuallyHidden>
                <input className="login__input form__input" type={type} name={type} placeholder={placeholder} required />
              </label>
            ))}
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={Path.Main}>
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

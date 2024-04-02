import {ChangeEvent, FormEvent, memo, useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/app-store';
import {Path} from '../../shared/config';
import {getAuthCheckedStatus, VisuallyHidden} from '../../shared/utils';
import {loginAction} from './model';

export const Login = memo(() => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthCheckedStatus);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const hasValid = !!login.email && !!login.password;

  if (isAuth) {
    return (
      <Navigate to={Path.Main} />
    );
  }

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setLogin({
      ...login,
      [name]: value
    });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (hasValid) {
      dispatch(loginAction({
        email: login.email,
        password: login.password
      }));
    }
  };
  const formFields = [
    {
      id: 1,
      type: 'email',
      placeholder: 'Email',
    },
    {
      id: 2,
      type: 'password',
      placeholder: 'Password',
    },
  ];

  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
            {formFields.map(({type, placeholder, id}) => (
              <label className="login__input-wrapper form__input-wrapper" key={id}>
                <VisuallyHidden>{placeholder}</VisuallyHidden>
                <input className="login__input form__input" type={type} name={type} placeholder={placeholder} required onChange={handleInputChange} />
              </label>
            ))}
            <button className="login__submit form__submit button" type="submit" disabled={!hasValid}>Sign in</button>
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
});

Login.displayName = 'Login';

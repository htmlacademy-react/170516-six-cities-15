import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import {createMemoryHistory, MemoryHistory} from 'history';
import {redirectToRoute} from '@/shared/utils';
import {loginAction} from '@/pages/login/model';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {Action} from 'redux';
import {extractActionsTypes, makeFakeStore, withHistory, withStore} from '@/shared/mocks';
import {Path} from '@/shared/config';
import {checkAuthAction, createAPI} from '@/shared/api';
import {TypeState, AppDispatch} from '@/shared/types';
import {Login} from './';

describe('Page: Login', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<TypeState, Action<string>, AppDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  const emailTestId = 'email';
  const expectedEmailValue = 'test@mail.ru';
  const passwordTestId = 'password';
  const expectedPasswordValue = 'asd2';
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    store = mockStoreCreator();
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const withHistoryComponent = withHistory(<Login/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);
    const loginTestId = screen.getByTestId('login');
    expect(loginTestId).toBeInTheDocument();
  });

  it('should render correctly when user enter email and password', async () => {
    const withHistoryComponent = withHistory(<Login/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    render(withStoreComponent);

    await userEvent.type(
      screen.getByTestId(emailTestId),
      expectedEmailValue
    );

    await userEvent.type(
      screen.getByTestId(passwordTestId),
      expectedPasswordValue
    );

    expect(screen.getByDisplayValue(expectedEmailValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPasswordValue)).toBeInTheDocument();
  });

  it('should dispatch "loginAction.pending", "redirectToRoute", "loginAction.fulfilled" when server response 200', async () => {
    const fakeUser = { email: expectedEmailValue, password: expectedPasswordValue };
    const fakeServerReplay = { token: 'secret' };
    mockAxiosAdapter.onPost(Path.Login).reply(200, fakeServerReplay);

    await store.dispatch(loginAction(fakeUser));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      loginAction.pending.type,
      redirectToRoute.type,
      checkAuthAction.pending.type,
      loginAction.fulfilled.type,
    ]);
  });
});

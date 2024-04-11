import {configureMockStore, MockStore} from '@jedmao/redux-mock-store';
import {State} from 'history';
import {AnyAction} from '@reduxjs/toolkit';
import {browserHistory, redirect, redirectToRoute} from '@/shared/utils';
import {Path} from '@/shared/config';

vi.mock('../../browser-history', () => ({
  default: {
    location: { pathname: ''},
    push(path: string) {
      this.location.pathname = path;
    }
  }
}));

describe('Redirect middleware', () => {
  let store: MockStore;

  beforeAll(() => {
    const middleware = [redirect];
    const mockStoreCreator = configureMockStore<State, AnyAction>(middleware);
    store = mockStoreCreator();
  });

  beforeEach(() => {
    browserHistory.push('');
  });

  it('should redirect to "/login" with redirectToRoute action', () => {
    const redirectAction = redirectToRoute(Path.Login);
    store.dispatch(redirectAction);
    expect(browserHistory.location.pathname).toBe(Path.Login);
  });

  it('should not redirect to "/lose" with empty action', () => {
    const emptyAction = { type: '', payload: Path.Lose };
    store.dispatch(emptyAction);
    expect(browserHistory.location.pathname).not.toBe(Path.Lose);
  });
});

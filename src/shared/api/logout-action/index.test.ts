import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import {AppDispatch, TypeState} from '@/shared/types';
import {token} from '@/shared/utils';
import {extractActionsTypes} from '@/shared/mocks';
import {createAPI} from '@/shared/api';
import {logoutAction} from './';

describe('logoutAction', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<TypeState, Action<string>, AppDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator();
  });

  it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async () => {
    mockAxiosAdapter.onDelete('/logout').reply(204);

    await store.dispatch(logoutAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.fulfilled.type,
    ]);
  });

  it('should one call "dropToken" with "logoutAction"', async () => {
    mockAxiosAdapter.onDelete('/logout').reply(204);
    const mockDropToken = vi.spyOn(token, 'drop');

    await store.dispatch(logoutAction());

    expect(mockDropToken).toHaveBeenCalledTimes(1);
  });
});

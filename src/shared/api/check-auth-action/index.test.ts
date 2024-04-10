import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import {checkAuthAction, createAPI} from '@/shared/api';
import {AppDispatch, TypeState} from '@/shared/types';
import {Path} from '@/shared/config';
import {extractActionsTypes} from '@/shared/mocks';

describe('checkAuthAction', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<TypeState, Action<string>, AppDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator();
  });

  it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
    mockAxiosAdapter.onGet(Path.Login).reply(200);

    await store.dispatch(checkAuthAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type,
    ]);
  });

  it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400', async () => {
    mockAxiosAdapter.onGet(Path.Login).reply(400);

    await store.dispatch(checkAuthAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.rejected.type,
    ]);
  });
});

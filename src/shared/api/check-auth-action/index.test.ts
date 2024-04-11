import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import {checkAuthAction, createAPI} from '@/shared/api';
import {AppDispatch, TypeState} from '@/shared/types';
import {AuthorizationStatus, Path} from '@/shared/config';
import {DEFAULT_STATE, extractActionsTypes, makeFakeUser} from '@/shared/mocks';
import {clientSlice} from './';

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

describe('Client Slice', () => {
  it('should set "status" to "loading", with "checkAuthAction.pending"', () => {
    const expectedState = {
      user: null,
      authorizationStatus: AuthorizationStatus.Unknown,
    };

    const result = clientSlice.reducer(
      undefined,
      checkAuthAction.pending
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "status" to "loading", with "checkAuthAction.fulfilled"', () => {
    const mockUserData = makeFakeUser();
    const expectedState = {
      ...DEFAULT_STATE.client,
      user: mockUserData,
      authorizationStatus: AuthorizationStatus.Auth,
    };

    const result = clientSlice.reducer(
      undefined,
      checkAuthAction.fulfilled(mockUserData, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });
});

import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import {AppDispatch, TypeState} from '@/shared/types';
import {extractActionsTypes, getRandomNumber, makeFakeOffer} from '@/shared/mocks';
import {createAPI} from '@/shared/api';
import {fetchFavoriteAction} from './';

describe('fetchFavoriteAction', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<TypeState, Action<string>, AppDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator();
  });

  it('should dispatch "fetchFavoriteAction.pending", "fetchFavoriteAction.fulfilled", when server response 200', async () => {
    const mockOffer = makeFakeOffer();
    const mockOffers = Array.from(
      {length: getRandomNumber(1, 15)},
      () => mockOffer
    );
    mockAxiosAdapter.onGet('/favorite').reply(200, mockOffers);

    await store.dispatch(fetchFavoriteAction());

    const emittedActions = store.getActions();
    const extractedActionsTypes = extractActionsTypes(emittedActions);
    const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavoriteAction.fulfilled>;

    expect(extractedActionsTypes).toEqual([
      fetchFavoriteAction.pending.type,
      fetchFavoriteAction.fulfilled.type,
    ]);

    expect(fetchOffersActionFulfilled.payload).toEqual(mockOffers);
  });
});

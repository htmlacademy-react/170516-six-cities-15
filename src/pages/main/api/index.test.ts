import {createAPI} from '@/shared/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AppDispatch, TypeState} from '@/shared/types';
import {Action} from 'redux';
import {extractActionsTypes, getRandomNumber, makeFakeOffer} from '@/shared/mocks';
import {fetchOffersAction} from '../api';


describe('fetchOffersAction', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<TypeState, Action<string>, AppDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator();
  });

  it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.fulfilled", when server response 200', async () => {
    const mockOffer = makeFakeOffer();
    const mockOffers = Array.from(
      {length: getRandomNumber(1, 15)},
      () => mockOffer
    );
    mockAxiosAdapter.onGet('/offers').reply(200, mockOffers);

    await store.dispatch(fetchOffersAction());

    const emittedActions = store.getActions();
    const extractedActionsTypes = extractActionsTypes(emittedActions);
    const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffersAction.fulfilled>;

    expect(extractedActionsTypes).toEqual([
      fetchOffersAction.pending.type,
      fetchOffersAction.fulfilled.type,
    ]);

    expect(fetchOffersActionFulfilled.payload).toEqual(mockOffers);
  });

  it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.rejected" when server response 400', async () => {
    mockAxiosAdapter.onGet('/offers').reply(400, []);

    await store.dispatch(fetchOffersAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      fetchOffersAction.rejected.type,
    ]);
  });
});

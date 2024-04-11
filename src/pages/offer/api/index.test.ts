import {createAPI} from '@/shared/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import {AppDispatch, TypeState} from '@/shared/types';
import {extractActionsTypes, makeFakeComment, makeFakeOffer} from '@/shared/mocks';
import {fetchCommentsAction, fetchCurrentOfferAction, fetchNearbyAction, postReviewAction} from './';

describe('Offer async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<TypeState, Action<string>, AppDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator();
  });

  describe('fetchCurrentOfferAction', () => {
    it('should dispatch "fetchCurrentOfferAction.pending", "fetchCurrentOfferAction.fulfilled", when server response 200', async () => {
      const mockOffer = makeFakeOffer();
      mockAxiosAdapter
        .onGet(`/offers/${mockOffer.id}`)
        .reply(200, mockOffer);

      await store.dispatch(fetchCurrentOfferAction(mockOffer.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchCurrentOfferAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchCurrentOfferAction.pending.type,
        fetchCurrentOfferAction.fulfilled.type,
      ]);

      expect(fetchOfferActionFulfilled.payload).toEqual(mockOffer);
    });
  });

  describe('fetchNearbyAction', () => {
    it('should dispatch "fetchNearbyAction.pending", "fetchNearbyAction.fulfilled", when server response 200', async () => {
      const mockOffer = makeFakeOffer();
      mockAxiosAdapter
        .onGet(`/offers/${mockOffer.id}/nearby`)
        .reply(200, mockOffer);

      await store.dispatch(fetchNearbyAction(mockOffer.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchNearbyAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchNearbyAction.pending.type,
        fetchNearbyAction.fulfilled.type,
      ]);

      expect(fetchOfferActionFulfilled.payload).toEqual(mockOffer);
    });
  });

  describe('fetchCommentsAction', () => {
    it('should dispatch "fetchCommentsAction.pending", "fetchCommentsAction.fulfilled", when server response 200', async () => {
      const mockOffer = makeFakeOffer();
      mockAxiosAdapter
        .onGet(`/comments/${mockOffer.id}`)
        .reply(200, mockOffer);

      await store.dispatch(fetchCommentsAction(mockOffer.id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOfferActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchCommentsAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchCommentsAction.pending.type,
        fetchCommentsAction.fulfilled.type,
      ]);

      expect(fetchOfferActionFulfilled.payload).toEqual(mockOffer);
    });
  });

  describe('postReviewAction', () => {
    it('should dispatch "postReviewAction.pending", "postReviewAction.fulfilled", when server response 200', async () => {
      const mockOffer = makeFakeOffer();
      const mockComment = makeFakeComment();
      const mockCommentData = {
        id: mockOffer.id,
        comment: mockComment.comment,
        rating: mockComment.rating,
      };

      mockAxiosAdapter
        .onPost(`/comments/${mockOffer.id}`)
        .reply(200, mockComment);

      await store.dispatch(postReviewAction(mockCommentData));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const postCommentActionFulfilled = emittedActions.at(1) as ReturnType<typeof postReviewAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        postReviewAction.pending.type,
        postReviewAction.fulfilled.type,
      ]);

      expect(postCommentActionFulfilled.payload).toEqual(mockComment);
    });
  });
});

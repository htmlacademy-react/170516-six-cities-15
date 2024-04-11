import {DEFAULT_STATE, getRandomNumber, makeFakeComment, makeFakeOffer} from '@/shared/mocks';
import {Status} from '@/shared/config';
import {fetchCommentsAction, fetchCurrentOfferAction, fetchNearbyAction, postReviewAction} from '../api';
import {offerSlice} from './';

describe('Offer Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      ...DEFAULT_STATE.offer,
    };

    const result = offerSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "status" to "loading", with "fetchCurrentOfferAction.pending"', () => {
    const expectedState = {
      ...DEFAULT_STATE.offer,
      status: Status.Loading,
    };

    const result = offerSlice.reducer(
      undefined,
      fetchCurrentOfferAction.pending
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "offer" to with offers, "status" to "resolved", with "fetchCurrentOfferAction.fulfilled"', () => {
    const mockOffers = Array.from({length: getRandomNumber(1, 15)}, makeFakeOffer);
    const expectedState = {
      ...DEFAULT_STATE.offer,
      info: mockOffers,
      status: Status.Resolved,
    };

    const result = offerSlice.reducer(
      undefined,
      fetchCurrentOfferAction.fulfilled(mockOffers, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "offer", with "fetchNearbyAction.fulfilled"', () => {
    const mockOffer = makeFakeOffer();
    const {id} = mockOffer;
    const mockOffers = Array.from({length: getRandomNumber(1, 15)}, makeFakeOffer);

    const expectedState = {
      ...DEFAULT_STATE.offer,
      nearPlaces: mockOffers,
    };

    const result = offerSlice.reducer(
      undefined,
      fetchNearbyAction.fulfilled(mockOffers, '', id)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "offer", with "fetchCommentsAction.fulfilled"', () => {
    const mockOffer = makeFakeOffer();
    const {id} = mockOffer;
    const mockComments = Array.from({length: getRandomNumber(1, 15)}, makeFakeComment);

    const expectedState = {
      ...DEFAULT_STATE.offer,
      comments: mockComments,
    };

    const result = offerSlice.reducer(
      undefined,
      fetchCommentsAction.fulfilled(mockComments, '', id)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set  with "postReviewAction.fulfilled"', () => {
    const mockOffer = makeFakeOffer();
    const {id} = mockOffer;
    const mockComment = makeFakeComment();
    const {comment, rating} = mockComment;

    const expectedState = {
      ...DEFAULT_STATE.offer,
      comments: [mockComment],
      statusComment: Status.Resolved
    };

    const result = offerSlice.reducer(
      undefined,
      postReviewAction.fulfilled(mockComment, '', {
        id,
        comment,
        rating,
      })
    );

    expect(result).toEqual(expectedState);
  });
});

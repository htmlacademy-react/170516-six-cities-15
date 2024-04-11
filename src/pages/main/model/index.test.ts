import {DEFAULT_STATE, getRandomNumber, makeFakeOffer} from '@/shared/mocks';
import {Status} from '@/shared/config';
import {fetchFavoriteAction} from '@/shared/api';
import {fetchOffersAction} from '../api';
import {offersSlice} from './';

describe('Main Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      ...DEFAULT_STATE.offers,
    };

    const result = offersSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "status" to "loading", with "fetchOffersAction.pending"', () => {
    const expectedState = {
      ...DEFAULT_STATE.offers,
      status: Status.Loading,
    };

    const result = offersSlice.reducer(
      undefined,
      fetchOffersAction.pending
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "offers" to array with offers, "status" to "resolved", with "fetchOffersAction.fulfilled"', () => {
    const mockOffer = makeFakeOffer();
    const mockOffers = Array.from(
      {length: getRandomNumber(1, 15)},
      () => mockOffer
    );
    const expectedState = {
      ...DEFAULT_STATE.offers,
      list: mockOffers,
      status: Status.Resolved,
    };

    const result = offersSlice.reducer(
      undefined,
      fetchOffersAction.fulfilled(mockOffers, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "favorites" to favoriteOffers with "fetchFavoriteAction.fulfilled"', () => {
    const mockOffers = Array.from({length: getRandomNumber(1, 15)}, makeFakeOffer);

    const expectedState = {
      ...DEFAULT_STATE.offers,
      favorites: mockOffers,
    };

    const result = offersSlice.reducer(
      undefined,
      fetchFavoriteAction.fulfilled(mockOffers, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });
});

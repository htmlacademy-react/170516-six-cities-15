import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {Action} from 'redux';
import {TypeState, AppDispatch} from '@/shared/types';
import {extractActionsTypes, makeFakeOffer, makeFakeStore, withStore} from '@/shared/mocks';
import {createAPI} from '@/shared/api';
import {Bookmark} from './ui';
import {postFavoriteStatusAction} from './modal';

describe('Feature: bookmark', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<TypeState, Action<string>, AppDispatch>(middleware);
  const mockOffer = makeFakeOffer();
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ offers: { favorites: [] }});
  });

  it('should render correct ', () => {
    const {withStoreComponent} = withStore(
      <Bookmark
        isFavorite={mockOffer.isFavorite}
        offerId={mockOffer.id}
        isAuth
      />,
      makeFakeStore()
    );
    render(withStoreComponent);
    const bookmarkTestId = screen.getByTestId('bookmark');
    expect(bookmarkTestId).toBeInTheDocument();
  });

  it('should dispatch "postFavorite.pending", "postFavorite.fulfilled"', async () => {
    const fakeFavoriteSend = { id: mockOffer.id, status: Number(!mockOffer.isFavorite) };
    const fakeServerReplay = { token: 'secret' };
    mockAxiosAdapter.onPost(`/favorite/${fakeFavoriteSend.id}/${fakeFavoriteSend.status}`).reply(200, fakeServerReplay);

    await store.dispatch(postFavoriteStatusAction(fakeFavoriteSend));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      postFavoriteStatusAction.pending.type,
      postFavoriteStatusAction.fulfilled.type,
    ]);
  });
});

import {render, screen} from '@testing-library/react';
import {MemoryHistory, createMemoryHistory} from 'history';
import {
  DEFAULT_STATE,
  getRandomNumber,
  makeFakeOffer,
  makeFakeStore,
  makeFakeUser,
  withHistory,
  withStore
} from '@/shared/mocks';
import {AuthorizationStatus, Path} from '@/shared/config';
import {AppRouter} from './app-router';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "MainPage" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<AppRouter/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    mockHistory.push(Path.Main);

    render(withStoreComponent);

    expect(screen.getByTestId('main-loading')).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<AppRouter/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    mockHistory.push(Path.Login);

    render(withStoreComponent);

    const signInTestId = screen.getByTestId('login');
    expect(signInTestId).toBeInTheDocument();
  });

  it('should render "FavoritesPage" when user navigate to "/favorites"', () => {
    const withHistoryComponent = withHistory(<AppRouter/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore({
        offers: {
          ...DEFAULT_STATE.offers,
          favorites: Array.from({length: getRandomNumber(1, 5)}, makeFakeOffer),
        },
        client: {
          user: makeFakeUser(),
          authorizationStatus: AuthorizationStatus.Auth,
        }
      })
    );
    mockHistory.push(Path.Favorites);

    render(withStoreComponent);

    expect(screen.getByTestId('favorites')).toBeInTheDocument();
  });

  it('should render "OfferPage" when user navigate to "/offer/:id"', () => {
    const withHistoryComponent = withHistory(<AppRouter/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    mockHistory.push(`${Path.Offer}/${makeFakeOffer().id}`);

    render(withStoreComponent);

    expect(screen.getByTestId('offer-loading')).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    const withHistoryComponent = withHistory(<AppRouter/>, mockHistory);
    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    const unknownRoute = '/unknown-route';
    mockHistory.push(unknownRoute);

    render(withStoreComponent);

    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
});

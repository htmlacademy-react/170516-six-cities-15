import {MockStore, configureMockStore} from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import {Provider} from 'react-redux';
import {Action} from 'redux';
import thunk from 'redux-thunk';
import { MemoryHistory, createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import {HistoryRouter} from '@/shared/utils';
import {createAPI} from '@/shared/api';
import {TypeState} from '@/shared/types';
import {AppThunkDispatch} from '@/shared/mocks';

export const withHistory = (component: JSX.Element, history?: MemoryHistory) => {
  const memoryHistory = history ?? createMemoryHistory();

  return (
    <HistoryRouter history={memoryHistory}>
      <HelmetProvider>
        {component}
      </HelmetProvider>
    </HistoryRouter>
  );
};

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
};

export const withStore = (
  component: JSX.Element,
  initialState: Partial<TypeState> = {}
): ComponentWithMockStore => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
    TypeState,
    Action<string>,
    AppThunkDispatch
    >(middleware);
  const mockStore = mockStoreCreator(initialState);

  return {
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter,
  };
};

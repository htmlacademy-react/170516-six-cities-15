import { MemoryHistory, createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import {HistoryRouter} from "@/shared/utils";

export const withHistory = (component: JSX.Element, history?: MemoryHistory) => {
  const memoryHistory = history ?? createMemoryHistory();

  return (
    <HistoryRouter history={memoryHistory}>
      <HelmetProvider>
        {component}
      </HelmetProvider>
    </HistoryRouter>
  );
}

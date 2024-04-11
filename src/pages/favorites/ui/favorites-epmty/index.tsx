import {VisuallyHidden} from '@/shared/utils';

export const FavoritesEmpty = () => (
  <main className="page__main page__main--favorites page__main--favorites-empty" data-testid='favorites-empty'>
    <div className="page__favorites-container container">
      <section className="favorites favorites--empty">
        <VisuallyHidden>Favorites (empty)</VisuallyHidden>
        <div className="favorites__status-wrapper">
          <b className="favorites__status">Nothing yet saved.</b>
          <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
        </div>
      </section>
    </div>
  </main>
);

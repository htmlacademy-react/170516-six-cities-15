import {render, screen} from '@testing-library/react';
import {makeFakeOffer, makeFakeStore, withStore} from '@/shared/mocks';
import {ReviewForm} from './';

describe('Page: OfferReviewForm', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<ReviewForm id={makeFakeOffer().id}/>, makeFakeStore());
    render(withStoreComponent);

    const reviewsFormTestId = screen.getByTestId('reviews-form');
    expect(reviewsFormTestId).toBeInTheDocument();
  });
});

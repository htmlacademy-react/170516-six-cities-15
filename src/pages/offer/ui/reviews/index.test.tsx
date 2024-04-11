import {render, screen} from '@testing-library/react';
import {getRandomNumber, makeFakeComment} from '@/shared/mocks';
import {Reviews} from './';

describe('Page: OfferReviews', () => {
  it('should render correctly', () => {
    const mockOffers = Array.from({length: getRandomNumber(0, 5)}, makeFakeComment);

    render(<Reviews allReviews={mockOffers} comments={mockOffers}>test text</Reviews>);
    const reviewsTestId = screen.getByTestId('reviews');
    expect(reviewsTestId).toBeInTheDocument();
  });
});

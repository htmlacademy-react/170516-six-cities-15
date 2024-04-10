import {render, screen} from '@testing-library/react';
import {Rating} from './';
import {getRandomNumber} from '@/shared/mocks';

describe('UI component: Rating', () => {
  const randomNumber = getRandomNumber(0, 100);
  it('should render correctly', () => {
    render(<Rating rating={randomNumber}/>);
    const ratingTestId = screen.getByTestId('rating');
    expect(ratingTestId).toBeInTheDocument();
  });
});

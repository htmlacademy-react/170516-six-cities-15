import {render, screen} from '@testing-library/react';
import {Rating, User} from './';
import {getRandomNumber, makeFakeOffer} from "@/shared/mocks";

describe('UI component: User', () => {
  const mockName = makeFakeOffer().host.name;
  it('should render correctly', () => {
    render(<User name={mockName} isPro/>);
    const userTestId = screen.getByTestId('user');
    expect(userTestId).toBeInTheDocument();
  });
});

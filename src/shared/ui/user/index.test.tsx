import {render, screen} from '@testing-library/react';
import {makeFakeOffer} from '@/shared/mocks';
import {User} from './';

describe('UI component: User', () => {
  const mockName = makeFakeOffer().host.name;
  it('should render correctly', () => {
    render(<User name={mockName} isPro/>);
    const userTestId = screen.getByTestId('user');
    expect(userTestId).toBeInTheDocument();
  });
});

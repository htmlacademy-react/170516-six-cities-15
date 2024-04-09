import {render, screen} from "@testing-library/react";
import {createMemoryHistory, MemoryHistory} from "history";
import {makeFakeOffer, makeFakeStore, withHistory, withStore} from "@/shared/mocks";
import {PlaceCard} from "@/entities";

describe('Entities: PlaceCard', () => {
  const mockOffer = makeFakeOffer();
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correct', () => {
    const withHistoryComponent = withHistory(
      <PlaceCard
        id={mockOffer.id}
        title={mockOffer.title}
        type={mockOffer.type}
        price={mockOffer.price}
        isPremium={mockOffer.isPremium}
        rating={mockOffer.rating}
        previewImage={mockOffer.previewImage}
      />, mockHistory)

    const {withStoreComponent} = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    const placeCardTestId = screen.getByTestId('place-card-components');
    expect(placeCardTestId).toBeInTheDocument()
  });
})

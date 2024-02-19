export type PlaceCardProps = {
  id: number;
  title: string;
  type: 'Apartment' | 'Room' | 'House' | 'Hotel';
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  className?: string;
}

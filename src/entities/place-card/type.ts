export type PlaceCardProps = {
  id: string;
  title: string;
  type: 'Apartment' | 'Room' | 'House' | 'Hotel';
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  className?: string;
  widthImg?: number;
  heightImg?: number;
  onListItemHover?: (title: string) => string;
}

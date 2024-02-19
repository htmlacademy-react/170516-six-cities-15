export type PlaceCardProps = {
  id: number;
  title: string;
  type: string; //TODO: Сделай UNION type
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  className?: string;
}

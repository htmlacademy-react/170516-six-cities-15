//TODO: Удалить
export type PlaceCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  className?: string;
  widthImg?: number;
  heightImg?: number;
  onListItemHover?: (title: string) => void;
}

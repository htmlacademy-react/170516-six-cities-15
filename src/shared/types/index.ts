// TODO: Спросить про типизацию, лучше сразу в PreviewCardProps?
export type LocationProps = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type PreviewCardProps = {
  id: string;
  title: string;
  type: string; //TODO: 'apartment' | 'room' | 'house' | 'hotel'
  price: number;
  city?: {
    name: string;
    location: LocationProps;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  className?: string;
  widthImg?: number;
  heightImg?: number;
}

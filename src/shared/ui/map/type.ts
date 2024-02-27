//TODO: Может так лучше?
// location: {
//   [name: string]: number,
// }

type LocationProps = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

export type MainProps = {
  id: string;
  className?: string;
  selectedPoint?: string;
  city: LocationProps;
  points: LocationProps[];
};

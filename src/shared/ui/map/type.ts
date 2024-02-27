import {LocationProps, PreviewCardProps} from '../../types';

type PreviewCardLocationProps = PreviewCardProps & {
  location: LocationProps;
}

export type MapProps = {
  points: PreviewCardLocationProps[];
  location: LocationProps;
  selectedPoint: string;
  className?: string;
};

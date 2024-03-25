import {LocationProps, PreviewCardProps} from '../../types';

export type MapProps = {
  points: PreviewCardProps[];
  location: LocationProps;
  className?: string;
  selectedPoint?: PreviewCardProps['id'];
};

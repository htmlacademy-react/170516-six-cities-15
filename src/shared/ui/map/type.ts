import {PreviewCardProps} from '../../types';

export type MapProps = {
  points: PreviewCardProps[];
  location: PreviewCardProps['location'];
  className?: string;
  selectedPoint?: string;
};

export type SizeIconProps = {
  [key: string]: number[];
};

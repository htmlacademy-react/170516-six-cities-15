import {PreviewCardProps} from '../../types';

export type MapProps = {
  points: PreviewCardProps[];
  location: PreviewCardProps['city'];
  className?: string;
  selectedPoint?: PreviewCardProps['id'];
};

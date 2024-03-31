import {PreviewOfferProps} from '../../types';

export type MapProps = {
  points: PreviewOfferProps[];
  location: PreviewOfferProps['city'];
  className?: string;
  selectedPoint?: PreviewOfferProps['id'];
};

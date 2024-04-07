import {PreviewOfferProps} from '@/shared/types';

export type MapProps = {
  points: PreviewOfferProps[];
  city: PreviewOfferProps['city'];
  className?: string;
  selectedPoint?: PreviewOfferProps['id'];
};
